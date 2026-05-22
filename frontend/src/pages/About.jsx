import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function About() {
    const techStack = [
        {
            name: "React",
            description: "High-performance framework driving reactive, fluid UI rendering.",
            accent: "from-cyan-400 to-blue-500",
            iconColor: "text-cyan-400"
        },
        {
            name: "Node.js",
            description: "Event-driven asynchronous server environments built on Chrome V8 engine.",
            accent: "from-emerald-400 to-green-500",
            iconColor: "text-emerald-400"
        },
        {
            name: "Express.js",
            description: "Minimalist server web framework serving clean restful API routes.",
            accent: "from-slate-400 to-slate-600",
            iconColor: "text-slate-300"
        },
        {
            name: "MongoDB",
            description: "Highly scalable, schema-free JSON-document database storage.",
            accent: "from-green-400 to-emerald-500",
            iconColor: "text-green-400"
        },
        {
            name: "JWT (JSON Web Tokens)",
            description: "Cryptographically signed credentials holding secure session authority.",
            accent: "from-purple-400 to-pink-500",
            iconColor: "text-pink-400"
        },
        {
            name: "Tailwind CSS",
            description: "Rapid design system utilizing modern utility-first stylesheet layouts.",
            accent: "from-sky-400 to-indigo-500",
            iconColor: "text-sky-400"
        }
    ];

    const team = [
        {
            name: "Alexander Cole",
            role: "Principal UI Architect",
            initial: "A",
            bio: "Leads frontend engineering, implementing high-fidelity glassmorphism structures.",
            gradient: "from-cyan-500 to-indigo-600"
        },
        {
            name: "Elena Rostova",
            role: "Security & API Lead",
            initial: "E",
            bio: "Architects JWT secure state handshakes and database permission locks.",
            gradient: "from-indigo-600 to-purple-600"
        },
        {
            name: "Sanket Hanchate",
            role: "Lead Product Developer",
            initial: "S",
            bio: "Drives product strategy, pipeline velocity, and full-stack integrations.",
            gradient: "from-purple-600 to-pink-500"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-6">
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">ABOUT THE PLATFORM</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        <span className="text-white">
                            Building the Future of{" "}
                        </span>

                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Task Flow Operations
                        </span>
                    </h1>
                    <p className="text-center">
                        TaskFlow was born out of a desire to build simple, robust, and highly secure role-centric workspace frameworks. We align operational tasks with strict team permissions to elevate corporate throughput.
                    </p>
                </div>
            </section>

            {/* Mission & Vision cards */}
            <section className="pb-20 md:pb-28">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-900/30 border border-slate-900 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-xl relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                            <div>
                                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">COMMITMENT</span>
                                <h3 className="text-2xl font-extrabold text-white tracking-tight mt-3 mb-4">Our Core Mission</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">
                                    Empower dynamic, high-performing corporate teams to collaborate safely without administrative friction. By enforcing cryptographic permission locks and clean workspace boards, we keep pipelines running smoothly.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                                <span>Learn our methodology</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-900 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:border-slate-800 transition-all shadow-xl relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/10 transition-colors"></div>
                            <div>
                                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">OUTLOOK</span>
                                <h3 className="text-2xl font-extrabold text-white tracking-tight mt-3 mb-4">Our Shared Vision</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">
                                    Become the gold standard secure management blueprint for modern digital-first operations, empowering agile teams to scale their database throughput with zero permission breaches.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-purple-400 transition-colors">
                                <span>Explore future products</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Technology Stack */}
            <section className="py-20 md:py-28 border-y border-slate-900 bg-slate-950/60">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">INFRASTRUCTURE</h2>
                        <h3 className="text-3xl font-extrabold text-white tracking-tight mb-3">Built with high-end modern tech</h3>
                        <p className="text-slate-400 mt-3 font-medium">
                            A highly optimized full-stack JavaScript environment guarantees reliable database transactions, microsecond auth handling, and rich modular UI states.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {techStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl flex flex-col justify-between group hover:border-slate-800 transition-all duration-300"
                            >
                                <div>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-tr ${tech.accent} shadow-md`}></div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{tech.name}</h4>
                                    </div>
                                    <p className="text-sm text-slate-400 mt-4 leading-relaxed font-medium">
                                        {tech.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder/Team Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">CONTRIBUTORS</h2>
                        <h3 className="text-3xl font-extrabold text-white tracking-tight">Meet our specialized designers</h3>
                        <p className="text-slate-400 mt-3 font-medium">
                            Meet the core software developers responsible for TaskFlow’s performance, layouts, and encryption gates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-900/30 border border-slate-900 p-8 rounded-3xl flex flex-col items-center text-center hover:border-slate-800 hover:bg-slate-900/50 transition-all duration-300 group"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-tr ${member.gradient} rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg mb-6 group-hover:scale-105 transition-all duration-300`}>
                                    {member.initial}
                                </div>
                                <h4 className="text-lg font-bold text-white">{member.name}</h4>
                                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mt-1 mb-4">{member.role}</span>
                                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Call To Action */}
            <section className="py-16 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                        Want to learn more about our architectural security?
                    </h3>
                    <p className="text-center">
                        Create a mock manager or contributor profile and test platform permissions instantly.
                    </p>
                    <Link
                        to="/login"
                        className="inline-flex mt-4 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-lg transition-all duration-200"
                    >
                        Try TaskFlow Live
                    </Link>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 py-12">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-lg flex items-center justify-center">
                            <span className="text-slate-950 font-black text-base">✓</span>
                        </div>
                        <span className="text-lg font-black tracking-tight text-white">
                            <span className="bg-gradient-to-r from-cyan-400 via-indigo-200 to-white bg-clip-text text-transparent">Task</span>
                            <span>Flow</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-slate-500 font-semibold">
                        <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-slate-300 transition-colors">About Us</Link>
                        <Link to="/login" className="hover:text-slate-300 transition-colors">Login</Link>
                    </div>

                    <span className="text-xs text-slate-600 font-medium">
                        © {new Date().getFullYear()} TaskFlow Inc. All rights reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default About;
