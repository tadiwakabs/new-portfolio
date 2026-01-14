import {Code, User, ChartNoAxesCombined} from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold max-md:text-center"> Software Engineer </h3>
                        <p className="text-muted-foreground">
                            I am a computer science student at the University of Houston who enjoys building software
                            applications that solve real-world problems and make everyday tasks easier.
                        </p>
                        <p className="text-muted-foreground">
                            My experience spans modern web and mobile technologies which include React, Flutter, and
                            Firebase. I thrive on learning new tools and creating applications that are both functional
                            and visually engaging.
                        </p>

                        <div className="flex gap-4 pt-4 justify-center items-center">
                            <a href="#contact" className="cosmic-button max-sm:text-sm">
                                {" "}
                                Get in Touch
                            </a>
                            <a href="/Tadiwa_Kabayadondo_Resume.pdf" target="_blank"
                               className="px-6 py-2 rounded-full border border-primary text-primary
                                          hover:bg-primary/10 transition-colors duration-300 max-sm:text-sm"
                            >
                                {" "}
                                View Resume
                            </a>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* Skill #1 */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Front End Developer
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Experienced in crafting responsive interfaces using HTML, CSS, JavaScript, and React.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Skill #2 */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        UI / UX Design
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Skilled in designing visually appealing interfaces while ensuring
                                        seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Skill #3 */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ChartNoAxesCombined className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Data Analysis & Problem Solving
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Knowledgeable in analyzing datasets and using statistical and machine learning
                                        techniques to uncover insights.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};