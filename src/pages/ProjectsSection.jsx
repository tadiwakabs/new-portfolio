import {ExternalLink, ArrowRight, Github} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "TadzzCloud",
        description: "A fully-functioning cloud storage web application built with Next.js, React, Tailwind CSS and Appwrite.",
        image: "projects/tadzzcloud/logo-new.svg",
        tags: ["Next.js", "React", "Tailwind", "Appwrite"],
        demoUrl: "https://cloud.tadzz.net",
        githubUrl: "https://github.com/tadiwakabs/google-drive-clone",
    },
    {
        id: 2,
        title: "Mongi Guest House",
        description: "A cross-platform hotel booking + rewards mobile application developed using Flutter and Dart.",
        image: "projects/mongi/logo.png",
        tags: ["Flutter", "Dart", "Firebase"],
        demoUrl: "https://apps.apple.com/us/app/mongi-guest-house/id6749555775",
        githubUrl: "https://github.com/tadiwakabs/mongi_app",
    },
    {
        id: 3,
        title: "Singh's Generosity",
        description: "A non-profit organization's web application for managing volunteers, events, and historical participation data.",
        image: "projects/singh/logo.png",
        tags: ["React", "Express", "MySQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/tadiwakabs/foodbank-volunteer-app",
    },
    {
        id: 4,
        title: "Raystone Apartment Homes",
        description: "Website for a local apartment complex built using Javascript, HTML, CSS and Tailwind.",
        image: "projects/raystone/logo.svg",
        tags: ["Javascript", "HTML", "CSS", "Tailwind"],
        demoUrl: "https://tadiwakabs.github.io/raystone-apts/",
        githubUrl: "https://github.com/tadiwakabs/raystone-apts",
    },
    {
        id: 5,
        title: "84 Sea Lodge",
        description: "Developed a website for a foreign lodge using HTML, CSS, and Javascript " +
            "to enhance their online presence.",
        image: "projects/sealodge/logo.svg",
        tags: ["HTML", "CSS", "Javascript"],
        demoUrl: "https://www.84sealodge.com/",
        githubUrl: "https://github.com/tadiwakabs/84-sea-lodge",
    },
    {
        id: 6,
        title: "Heart Disease Analysis",
        description: "Explored a heart disease dataset to study the relationships between patient " +
            "attributes and the likelihood of heart attacks.",
        image: "projects/heart/heart.png",
        tags: ["Python", "NumPy", "Pandas"],
        demoUrl: "#",
        githubUrl: "#",
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain transition-transform duration-500
                                               group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex flex-wrap gap-2 mb-4 border-t pt-2 border-border">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary
                                                 text-secondary-foreground hover:border-gray-700/60 hover:text-primary
                                                 dark:hover:border-gray-100/60 transition-colors duration-300 "
                                        >{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 items-center justify-center w-full">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary
                                                       transition-colors duration-300 mx-5"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary
                                                       transition-colors duration-300 mx-5"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <span>and of course,
                        <a
                            href="https://github.com/tadiwakabs/new-portfolio"
                            className="text-primary pl-1.5"
                            target="_blank"
                        >
                            this website
                        </a>!
                    </span>
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto my-6 gap-2"
                        href="https://www.github.com/tadiwakabs"
                        target="_blank"
                    >
                        Check out my GitHub <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};