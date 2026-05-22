import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    const features = [
        {
            title: "Role-Based Access",
            description: "Enforce strict security guidelines with dedicated Admin, Manager, and Contributor clearances tailored to your team hierarchy.",
            icon: (
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            title: "Task Tracking",
            description: "Monitor milestones, delegate action items, and organize priorities with visual badges, real-time filters, and complete state indicators.",
            icon: (
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        },
        {
            title: "Admin Analytics",
            description: "Unlock structural oversight with aggregated statistics mapping active workloads, throughput performance, and db records.",
            icon: (
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            )
        },
        {
            title: "Activity Monitoring",
            description: "Log audit-ready traces for every user interaction, database mutation, and clearance adjustment inside a live dashboard drawer.",
            icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Secure Authentication",
            description: "Shield sensitive enterprise operations with json web tokens (JWT), industry-standard cryptography, and cryptographically verified sessions.",
            icon: (
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    const stats = [
        { value: "99.99%", label: "System Uptime" },
        { value: "25k+", label: "Tasks Logged" },
        { value: "< 50ms", label: "Server Latency" },
        { value: "250+", label: "Teams Scaled" }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-28">
                {/* Background decorative glows */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    {/* Hero Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Introducing TaskFlow v2.0</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                            <span className="text-white">
                                Manage Tasks Smarter with{" "}
                            </span>

                            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                TaskFlow
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 font-medium leading-relaxed">
                            A fully secure, role-based workflow manager designed to empower teams. Track priorities, manage user clearances, and oversee live statistics on a dashboard built for velocity.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                to="/login"
                                className="w-full mt-4 sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/15 hover:shadow-cyan-400/25 hover:-translate-y-0.5 transition-all duration-300 text-center"
                            >
                                Get Started Free
                            </Link>
                            <a
                                href="#features"
                                className="w-full mt-4 sm:w-auto px-8 py-4 bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-200 text-center"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Hero Graphic (Sleek CSS Dashboard Mockup) */}
                    <div className="flex-1 w-full max-w-md lg:max-w-none">
                        <div className="relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
                            {/* Glassmorphic task lists mockup */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80"></span>
                                    <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80"></span>
                                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80"></span>
                                </div>
                                <span className="text-xs font-semibold text-slate-500 tracking-wider">WORKSPACE MONITOR</span>
                            </div>

                            <div className="space-y-3.5">
                                <div className="bg-slate-950/60 border border-slate-800/50 p-4 rounded-xl flex items-center justify-between hover:border-cyan-500/30 transition-all">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Admin Authorization</span>
                                        <span className="text-sm font-bold text-white">Review platform metrics & activities</span>
                                    </div>
                                    <span className="bg-cyan-500/15 text-cyan-400 border border-cyan-400/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Admin</span>
                                </div>

                                <div className="bg-slate-950/60 border border-slate-800/50 p-4 rounded-xl flex items-center justify-between hover:border-indigo-500/30 transition-all">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Manager Clearance</span>
                                        <span className="text-sm font-bold text-white">Delegate pipeline sprint milestones</span>
                                    </div>
                                    <span className="bg-indigo-500/15 text-indigo-400 border border-indigo-400/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Manager</span>
                                </div>

                                <div className="bg-slate-950/60 border border-slate-800/50 p-4 rounded-xl flex items-center justify-between hover:border-purple-500/30 transition-all">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">Contributor Access</span>
                                        <span className="text-sm font-bold text-white">Complete focus active items</span>
                                    </div>
                                    <span className="bg-purple-500/15 text-purple-400 border border-purple-400/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Member</span>
                                </div>
                            </div>

                            <div className="mt-5 pt-4 border-t border-slate-800/60 flex justify-between items-center text-xs text-slate-500 font-semibold">
                                <span>DB: Active Connections</span>
                                <span className="flex items-center gap-1.5 text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                    Live Synchronized
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Row */}
            <section className="border-y border-slate-900 bg-slate-950/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center md:text-left flex flex-col justify-center">
                                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">{stat.value}</span>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 md:py-28 relative scroll-mt-10">
                <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Enterprise Core Features</h2>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Engineered for high-performing roles
                        </h3>
                        <p className="text-slate-400 mt-4 font-medium">
                            Explore robust features loaded with modern database optimizations, cryptographic protections, and clean visual displays.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {features.map((feat, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-900/30 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5 shadow-lg group"
                            >
                                <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all shadow-inner">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{feat.title}</h4>
                                    <p className="text-sm text-slate-400 mt-2 leading-relaxed font-medium">
                                        {feat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-24 bg-slate-950/60 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">WHY TASKFLOW</h2>
                            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                                Streamline Team Delivery With Confidence
                            </h3>
                            <p className="text-slate-400 mb-8 font-medium leading-relaxed">
                                Traditional task managers are bloated and complex. TaskFlow eliminates unnecessary operational overhead by introducing a streamlined role matrix model, securing items under specialized authorization locks, and serving them at sub-millisecond rates.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 mt-0.5">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Ultra-Modern UI Aesthetics</h4>
                                        <p className="text-xs text-slate-400 mt-1">Stunning dark design system inspired by top productivity SaaS tools.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-indigo-400 mt-0.5">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Full Mobile Responsiveness</h4>
                                        <p className="text-xs text-slate-400 mt-1">Access dashboard metrics, logs, and workspace tasks from any handheld screen size.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 mt-0.5">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">Lightweight Core Database Footprint</h4>
                                        <p className="text-xs text-slate-400 mt-1">Engineered on high performance MongoDB schemas for efficient queries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive UI Mockups */}
                        <div className="flex-1 w-full grid grid-cols-2 gap-4">
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-2xl flex flex-col justify-between h-40">
                                <span className="text-xs font-semibold text-slate-500">USER AUDITS</span>
                                <div className="h-2 bg-slate-950 rounded-full w-full overflow-hidden">
                                    <div className="h-full bg-cyan-400 rounded-full w-4/5"></div>
                                </div>
                                <span className="text-2xl font-black text-white">Active Logs</span>
                            </div>
                            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-2xl flex flex-col justify-between h-40">
                                <span className="text-xs font-semibold text-slate-500">API REQUESTS</span>
                                <span className="text-2xl font-black text-indigo-400">99.9% Success</span>
                                <span className="text-xs text-slate-400 font-medium">SSL Encrypted</span>
                            </div>
                            <div className="col-span-2 bg-slate-900/30 border border-slate-900 p-6 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                                        <span className="text-emerald-400 font-bold text-xs">✓</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-400 font-bold">TASK PIPELINE STATUS</span>
                                        <span className="text-sm font-bold text-white">All server services running perfectly</span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-full">Operational</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium CTA Panel */}
            <section className="py-20 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-indigo-500/5 pointer-events-none"></div>
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                        Ready to revolutionize your task tracking?
                    </h3>
                    <p className="text-center">
                        Create your free TaskFlow account and start delegating priorities, monitoring database audit logs, and completing projects with premium role clarity.
                    </p>
                    <Link
                        to="/login"
                        className="inline-flex mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-cyan-500/10 hover:shadow-cyan-400/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Get Started Instantly
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

export default Home;
