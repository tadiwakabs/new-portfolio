import {ArrowDown} from "lucide-react"
import {useState, useEffect} from "react";

export const HeroSection = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const fadeDistance = 300;
            const newOpacity = Math.max(1 - scrollTop / fadeDistance, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className=""> Hi, I'm</span>
                        <span className="text-primary ">
                        {" "}
                            Tadiwa </span>
                        <span className="text-gradient ml-1 ">
                        {" "}Kabayadondo</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl
                 mx-auto">
                        I build applications that solve real-world problems
                    </p>

                    <div className="pt-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/3 flex flex-col items-center
                        animate-bounce transition-opacity duration-300"
                 style={{opacity}}
            >
                <span className="text-small text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}