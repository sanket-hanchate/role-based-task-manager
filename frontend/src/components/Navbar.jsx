import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const isAuthenticated = !!token && !!user;

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsOpen(false);
        navigate("/");
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navLinkClass = (path) => {
        return `relative py-1.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive(path)
                ? "text-cyan-400 bg-slate-800/50 border border-slate-700/30"
                : "text-slate-300 hover:text-white hover:bg-slate-800/30 border border-transparent"
        }`;
    };

    const getDashboardPath = () => {
        if (!isAuthenticated) return "/login";
        return user?.role === "admin" ? "/admin" : "/dashboard";
    };

    return (
        <header className="bg-slate-950/90 border-b border-slate-900 sticky top-0 z-50 backdrop-blur-lg bg-opacity-95 shadow-xl">
            <div className="w-full px-4 md:px-8 py-3.5 flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95">
                    <div className="w-9 h-9 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/20 transition-all">
                        <span className="text-slate-950 font-black text-xl leading-none">✓</span>
                    </div>
                    <span className="text-2xl font-black tracking-tight text-white">
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-200 to-white bg-clip-text text-transparent group-hover:brightness-110 transition-all">Task</span>
                        <span className="text-white group-hover:text-slate-200 transition-colors">Flow</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-2">
                    <Link to="/" className={navLinkClass("/")}>
                        Home
                    </Link>
                    <Link to="/about" className={navLinkClass("/about")}>
                        About
                    </Link>
                    {isAuthenticated && (
                        <Link 
                            to={getDashboardPath()} 
                            className={navLinkClass(getDashboardPath())}
                        >
                            {user?.role === "admin" ? "Admin Console" : "Workspace"}
                        </Link>
                    )}
                </nav>

                {/* Desktop Auth Controls */}
                <div className="hidden md:flex items-center gap-4">
                    {isAuthenticated ? (
                        <>
                            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800/80 px-3.5 py-1.5 rounded-full shadow-inner">
                                <div className="w-6 h-6 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center text-[11px] font-bold text-white uppercase shadow-sm">
                                    {user?.name?.charAt(0) || "U"}
                                </div>
                                <span className="text-xs font-semibold text-slate-300 tracking-wide">
                                    {user?.name}
                                </span>
                            </div>
                            <button
                                onClick={logout}
                                className="text-sm font-semibold text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-900/30 bg-slate-900/40 hover:bg-rose-950/10 px-4 py-2 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 transition-all duration-200"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/login"
                                className="relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:shadow-cyan-400/20 active:scale-95"
                            >
                                <span className="relative z-10 text-white font-bold">Get Started</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Toggle (Hamburger) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all active:scale-95 cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-900 bg-slate-950 px-4 py-5 space-y-4 animate-fadeIn">
                    <div className="flex flex-col gap-2.5">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className={`block py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                                isActive("/")
                                    ? "bg-slate-900 text-cyan-400 border-l-4 border-cyan-400"
                                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className={`block py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                                isActive("/about")
                                    ? "bg-slate-900 text-cyan-400 border-l-4 border-cyan-400"
                                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                            }`}
                        >
                            About
                        </Link>
                        {isAuthenticated && (
                            <Link
                                to={getDashboardPath()}
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                                    isActive(getDashboardPath())
                                        ? "bg-slate-900 text-cyan-400 border-l-4 border-cyan-400"
                                        : "text-slate-300 hover:text-white hover:bg-slate-900"
                                }`}
                            >
                                {user?.role === "admin" ? "Admin Console" : "Workspace Dashboard"}
                            </Link>
                        )}
                    </div>

                    <div className="pt-4 border-t border-slate-900">
                        {isAuthenticated ? (
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 px-4 py-2">
                                    <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center text-xs font-bold text-white uppercase">
                                        {user?.name?.charAt(0) || "U"}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-white">{user?.name}</span>
                                        <span className="text-xs text-slate-500 uppercase font-semibold tracking-wider">{user?.role}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={logout}
                                    className="w-full text-center py-3 rounded-xl text-sm font-bold text-rose-400 hover:bg-rose-950/10 border border-slate-900 hover:border-rose-950/30 transition-all cursor-pointer"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2.5">
                                <Link
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full text-center py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl text-sm font-bold text-white shadow-lg shadow-cyan-500/10 transition-all"
                                >
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;