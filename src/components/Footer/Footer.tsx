import { Github } from "lucide-react";

export default function Footer() {
    return <footer className="py-6 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-gray-500 text-[10px] font-mono tracking-wider">© {new Date().getFullYear()} MICO ENGINEER</span>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/okmic" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#06B6D4] transition-colors duration-300">
                        <Github className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
}