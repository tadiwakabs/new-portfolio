import {Navbar} from "@/components/Navbar.jsx";
import {Footer} from "@/components/Footer.jsx";
import {HeroSection} from "@/pages/HeroSection.jsx";
import {ProjectsSection} from "@/pages/ProjectsSection.jsx";
import {AboutSection} from "@/pages/AboutSection.jsx";
import {SkillsSection} from "@/pages/SkillsSection.jsx";
import {ContactSection} from "@/pages/ContactSection.jsx";

export const Shell = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Nav Bar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}