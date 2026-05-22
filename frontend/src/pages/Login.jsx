import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/app.js";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", formData);
      
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      alert("Login successful");
      
      // ROLE-BASED ROUTING LOGIC
      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
      
    } catch(error) {
      alert(error.response?.data?.message || "An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/50 w-full max-w-md border border-slate-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Please enter your details to sign in
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-800"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-800"
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl shadow-md transition-all active:scale-[0.98] mt-2"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-slate-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-slate-900 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;