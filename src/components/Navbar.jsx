import { cn } from "@/lib/utils.js";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle.jsx";
import Logo from "/public/logo.svg";

const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // active link state + staged transition
    const [activeHref, setActiveHref] = useState("#hero");
    const [leavingHref, setLeavingHref] = useState(null);
    const transitionTimer = useRef(null);

    // Fix: scrollY not screenY
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Observe sections to update active link (hash-nav "current page")
    useEffect(() => {
        const sections = navItems
            .map((n) => document.getElementById(n.id))
            .filter(Boolean);

        if (!sections.length) return;

        const ratios = new Map(); // id -> intersectionRatio

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
                });

                // pick the section with the highest ratio
                let bestId = null;
                let bestRatio = 0;

                ratios.forEach((ratio, id) => {
                    if (ratio > bestRatio) {
                        bestRatio = ratio;
                        bestId = id;
                    }
                });

                if (bestId) {
                    const nextHref = `#${bestId}`;

                    if (nextHref !== activeHref && nextHref !== leavingHref) {
                        setLeavingHref(activeHref);

                        if (transitionTimer.current) clearTimeout(transitionTimer.current);
                        transitionTimer.current = setTimeout(() => {
                            setActiveHref(nextHref);
                            setLeavingHref(null);
                        }, 140);
                    }
                }
            },
            {
                root: null,
                // less strict so short sections still get detected
                rootMargin: "-30% 0px -60% 0px",
                threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8],
            }
        );

        sections.forEach((el) => {
            ratios.set(el.id, 0);
            obs.observe(el);
        });

        return () => {
            if (transitionTimer.current) clearTimeout(transitionTimer.current);
            obs.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeHref, leavingHref]);


    const isActive = (href) => href === activeHref;
    const isLeaving = (href) => href === leavingHref;

    const linkClass = (href) =>
        cn(
            "relative px-2 py-1 transition-colors duration-300",
            // base
            "text-foreground hover:text-primary",
            isLeaving(href) && "text-foreground/70"
        );

    const underlineClass = (href) =>
        cn(
            "after:content-[''] after:absolute after:left-0 after:-bottom-0.25 after:h-[2px] after:w-full after:bg-primary after:rounded-full",
            "after:transition-all after:duration-200 after:ease-out",
            // Active: show underline
            isActive(href) && "text-primary after:opacity-100 after:scale-x-100",
            // Not active: hidden underline
            !isActive(href) && "after:opacity-0 after:scale-x-0",
            // Leaving: disappear first
            isLeaving(href) && "after:opacity-0 after:scale-x-0"
        );

    const handleNavClick = (href) => {
        if (href !== activeHref) {
            setLeavingHref(activeHref);
            if (transitionTimer.current) clearTimeout(transitionTimer.current);
            transitionTimer.current = setTimeout(() => {
                setActiveHref(href);
                setLeavingHref(null);
            }, 140);
        }
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={cn(
                "bg-background/80 fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="between">
                    <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                        <div className="relative z-10 flex items-center space-x-2">
                            <img src={Logo} alt="logo" width={36} className="mr-4" />
                            <span className="text-glow text-foreground">Tadiwa</span>
                            <span>Kabayadondo</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:between space-x-4">
                        {navItems.map((item) => (
                            <a
                                href={item.href}
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={cn(
                                    linkClass(item.href),
                                    underlineClass(item.href),
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Nav */}
                    <div className="md:hidden flex items-center gap-3 bg-background/90">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="md:hidden p-2 text-foreground z-50"
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile overlay menu */}
                    <div
                        className={cn(
                            "fixed top-0 left-0 w-screen h-[100dvh] bg-background/95 backdrop-blur-md z-40 md:hidden",
                            "transition-opacity duration-300",
                            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        )}
                    >
                        <div className="pt-24 flex flex-col items-center justify-start h-full">
                            <img src={Logo} alt="logo" width={64} height={64} />
                            <div className="flex flex-col space-y-8 text-xl mt-12">
                                {navItems.map((item) => (
                                    <a
                                        href={item.href}
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className={cn(
                                            "text-center transition-colors duration-300",
                                            isActive(item.href) ? "text-primary underline underline-offset-4 decoration-primary" : "text-foreground/80 hover:text-primary"
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
};
