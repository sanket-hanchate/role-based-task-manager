import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/app.js";
import UsersTable from "../components/UsersTable";
import ActivityLogs from "../components/ActivityLogs";

function AdminDashboard() {
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0
  });

  const [users, setUsers] = useState([]);
  const [logs, setLogs] = useState([]);

  // FETCH ANALYTICS
  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get("/admin/analytics", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAnalytics(response.data);
    } catch(error){
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get("/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(response.data);
    } catch(error){
      console.log(error);
    }
  };

  const fetchLogs = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get("/admin/logs", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLogs(response.data);
    } catch(error){
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchUsers();
    } catch(error){
      console.log(error);
    }
  };

  const updateUserStatus = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      const newStatus = currentStatus === "active" ? "inactive" : "active";

      await API.put(
        `/admin/users/${id}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      fetchUsers();
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnalytics();
    fetchUsers();
    fetchLogs();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Changed to w-full and px-4 md:px-8 for full screen stretching */}
      <div className="w-full px-4 md:px-8 py-6 md:py-10">
        
        {/* DASHBOARD HEADER */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-600 uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Live System Infrastructure
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Admin Management Console
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Real-time server synchronization monitoring database volumes and pipeline velocity.
            </p>
          </div>
          
          <button 
            onClick={() => { fetchAnalytics(); fetchUsers(); fetchLogs(); }}
            className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95"
          >
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18" />
            </svg>
            Refresh Data
          </button>
        </div>

        {/* DYNAMIC ANALYTICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* TOTAL USERS */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between min-h-[145px]">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  User Base
                </h2>
                <p className="text-sm font-semibold text-slate-600">Total Registered</p>
              </div>
              <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-4xl font-black text-slate-900 tracking-tight">
                {analytics.totalUsers}
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Live
              </span>
            </div>
          </div>

          {/* TOTAL TASKS */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between min-h-[145px]">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  All Records
                </h2>
                <p className="text-sm font-semibold text-slate-600">Total Tasks Created</p>
              </div>
              <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-4xl font-black text-slate-900 tracking-tight">
                {analytics.totalTasks}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Database
              </span>
            </div>
          </div>

          {/* COMPLETED TASKS */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between min-h-[145px]">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Productivity
                </h2>
                <p className="text-sm font-semibold text-slate-600">Completed Items</p>
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-4xl font-black text-emerald-600 tracking-tight">
                {analytics.completedTasks}
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Success
              </span>
            </div>
          </div>

          {/* PENDING TASKS */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between min-h-[145px]">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  System Load
                </h2>
                <p className="text-sm font-semibold text-slate-600">Pending Backlog</p>
              </div>
              <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-4xl font-black text-amber-500 tracking-tight">
                {analytics.pendingTasks}
              </span>
              <span className="text-[11px] font-semibold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Pending
              </span>
            </div>
          </div>

        </div>

        {/* STACKED CONTENT SECTION */}
        <div className="flex flex-col gap-8 mt-12">
          
          {/* 1. USERS WORKSPACE DIRECTORY */}
          <div className="w-full">
            <UsersTable
              users={users}
              onDelete={deleteUser}
              onStatusUpdate={updateUserStatus}
            />
          </div>

          {/* 2. ACTIVITY LOGS PANEL (Now sits directly below) */}
          <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm p-2 overflow-hidden">
            <ActivityLogs logs={logs} />
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;