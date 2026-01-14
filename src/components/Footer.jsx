import {ArrowUp} from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap
                           justify-between items-center">
            {" "}
            <p className="text-sm text-muted-foreground ml-4">
                &copy; {new Date().getFullYear()} Tadiwa Kabayadondo. All rights reserved.
            </p>

            <a href="#hero" className="max-md:hidden p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary
                                       transition-colors mr-16">
                <ArrowUp size={26}/>
            </a>
        </footer>
    );
}
