import {ExternalLink, ArrowRight, Github} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Mongi Guest House",
        description: "A hotel booking + rewards mobile application developed using Flutter and Dart.",
        image: "/projects/mongilogo.png",
        tags: ["Flutter", "Dart", "Firebase"],
        demoUrl: "https://apps.apple.com/us/app/mongi-guest-house/id6749555775",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Interactive Artist Website",
        description: "Developed a responsive website using HTML, CSS and Javascript to showcase an artist, featuring" +
            " sections for upcoming tours and discography.",
        image: "/projects/sample2.webp",
        tags: ["HTML", "CSS", "Javascript"],
        demoUrl: "#",
        githubUrl: "https://github.com/tadiwakabs/billie-fan-page",
    },
    {
        id: 3,
        title: "Heart Disease Analysis",
        description: "Explored and analyzed a heart disease dataset to understand the relationships between patient " +
            "attributes and the likelihood of heart attacks.",
        image: "/projects/sample1.webp",
        tags: ["Python", "NumPy", "Pandas"],
        demoUrl: "#",
        githubUrl: "#",
    }
    // Add 3 more later, then link to GitHub (all projects)
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects: {/* Add description */}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500
                                               group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
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
                            href="https://github.com/tadiwakabs/"
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