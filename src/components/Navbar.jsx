import {cn} from "@/lib/utils.js";
import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";
import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import Logo from "/public/logo.svg";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn("bg-background/80 fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}
        >
            <div className="between mx-12">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                <div className="relative z-10 flex items-center space-x-2">
                    <img src={Logo} alt="logo" width={36} className="mr-4" />
                    <span className="text-glow text-foreground"> Tadiwa</span><span>Kabayadondo</span>
                </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:between space-x-4">
                    {navItems.map((item, key) => (
                        <a href={item.href} key={key}
                           className="text-foreground hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                    <div className="">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden space-x-4 bg-background/90">
                    <ThemeToggle />
                    <button onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="md:hidden p-2 text-foreground z-50"
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {""}
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col " +
                    "items-center justify-center transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-95 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a href={item.href} key={key}
                               className="text-foreground/80 hover:text-primary transition-colors duration-300"
                               onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

        </nav>
    );
};