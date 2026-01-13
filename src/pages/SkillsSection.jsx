import {useState} from "react";
import {cn} from '@/lib/utils.js'


const skills = [
    // Languages
    {name: "C++", level: 70, category: "languages"},
    {name: "Java", level: 65, category: "languages"},
    {name: "Python", level: 75, category: "languages"},
    {name: "SQL", level: 65, category: "languages"},
    {name: "HTML", level: 90, category: "languages"},
    {name: "CSS", level: 90, category: "languages"},
    {name: "Javascript", level: 80, category: "languages"},
    {name: "Dart", level: 70, category: "languages"},

    // Frameworks + Libraries
    {name: "React", level: 80, category: "frameworks/libraries"},
    {name: "Flutter", level: 75, category: "frameworks/libraries"},
    {name: "MySQL", level: 60, category: "frameworks/libraries"},
    {name: "NumPy", level: 70, category: "frameworks/libraries"},
    {name: "Pandas", level: 70, category: "frameworks/libraries"},
    {name: "Sk-Learn", level: 70, category: "frameworks/libraries"},
    {name: "Matplotlib", level: 65, category: "frameworks/libraries"},
    {name: "Seaborn", level: 65, category: "frameworks/libraries"},

    // Developer Tools
    {name: "Visual Studio Code", level: 95, category: "developer tools"},
    {name: "PyCharm", level: 75, category: "developer tools"},
    {name: "CLion", level: 70, category: "developer tools"},
    {name: "IntelliJ IDEA", level: 70, category: "developer tools"},
    {name: "WebStorm", level: 75, category: "developer tools"},
    {name: "Appwrite", level: 80, category: "developer tools"},
    {name: "Firebase", level: 65, category: "developer tools"},
    {name: "Git", level: 75, category: "developer tools"},
    {name: "Tableau", level: 70, category: "developer tools"},
];

const categories = ["all", "languages", "frameworks/libraries", "developer tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 bg-secondary/30 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize " +
                                    "cursor-pointer hover:text-primary",
                                    activeCategory === category ? "bg-primary text-primary-foreground"
                                        : "bg-secondary/70 text-foreground hover:bg-secondary")}
                                onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="relative w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                {/* background/faded bar */}
                                {<div
                                    className="absolute top-0 left-0 h-2 rounded-full bg-primary opacity-20"
                                    style={{ width: "100%" }}
                                />}
                                {/* foreground/actual skill bar */}
                                <div
                                    className="absolute top-0 left-0 h-2 rounded-full bg-primary origin-left
                                               animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            {/* Show Percentages */}
                            {/*<div className="text-right mt-.5">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>*/}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};