import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-background px-6">
            <div className="relative max-w-xl text-center">
                {/* Glow background */}
                <div
                    className="absolute inset-0 -z-10 blur-3xl opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle at center, rgba(167,139,250,0.35), transparent 70%)",
                    }}
                />

                {/* 404 */}
                <h1 className="text-[96px] leading-none font-bold text-primary text-glow mb-4">
                    404
                </h1>

                <h2 className="h2 mb-3">
                    Page not found
                </h2>

                <p className="body-1 text-muted-foreground mb-8">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="cosmic-button flex items-center justify-center gap-2"
                    >
                        <Home className="h-4 w-4" />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 rounded-full border border-border
                       hover:bg-muted transition-colors
                       flex items-center justify-center gap-2 cursor-pointer hover:border-primary "
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                    </button>
                </div>
            </div>
        </section>
    );
}
