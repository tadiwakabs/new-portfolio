import {Mail, Phone, MapPin, Linkedin, Github, Send} from "lucide-react"
import {cn} from "@/lib/utils.js"
import {useState} from "react";


export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 center"> Contact Information</h3>
                        {/* Email */}
                        <div className="space-y-6 text-left lg:text-center justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium w-80">Email</h4>
                                    <a
                                        href="mailto:tadiwakabayadondo@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        tadiwakabayadondo@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="space-y-6 text-left lg:text-center justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium w-80">Phone</h4>
                                    <a
                                        href="tel:+18326217429"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        (832) 621-7429
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="space-y-6 text-left lg:text-center justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium w-80">Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Houston, TX, United States
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="pb-4 text-lg font-semibold center"> Connect with Me </h4>
                            <div className="flex space-x-8 justify-center mt-2">
                                <a
                                    href="https://www.linkedin.com/in/tadiwakabs"
                                    target="_blank"
                                    className="hover:text-primary transition-colors duration-200"
                                >
                                    <Linkedin size={30}/>
                                </a>
                                <a
                                    href="https://www.github.com/tadiwakabs"
                                    target="_blank"
                                    className="hover:text-primary transition-colors duration-200"
                                >
                                    <Github  size={30}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6 center">Send a message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name"
                                       className="text-sm font-medium mb-2 center"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background
                                               focus:outlined-hidden focus:ring-2 focus: ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email"
                                       className="text-sm font-medium mb-2 center"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background
                                               focus:outlined-hidden focus:ring-2 focus: ring-primary"
                                    placeholder="example@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message"
                                       className="text-sm font-medium mb-2 center"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background
                                               focus:outlined-hidden focus:ring-2 focus: ring-primary resize-y max-h-100 min-h-32"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
