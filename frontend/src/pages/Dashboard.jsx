import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/app.js";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  // FETCH TASKS
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTasks(response.data);
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // CREATE TASK
  const createTask = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await API.post("/tasks", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setFormData({
        title: "",
        description: ""
      });
      fetchTasks();
    } catch(error){
      console.log(error);
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchTasks();
    } catch(error){
      console.log(error);
    }
  };

  // UPDATE STATUS
  const updateStatus = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await API.put(`/tasks/${id}`, {
        status: "completed"
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchTasks();
    } catch(error){
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      <main className="w-full px-4 md:px-8 py-6 md:py-10">
        {/* DASHBOARD HEADER HEADER */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Workspace Overview
            </h1>
            <p className="text-slate-500 mt-1">
              Manage your priorities, monitor statuses, and complete items efficiently.
            </p>
          </div>
          <div className="bg-white border border-slate-200 px-5 py-3 rounded-2xl flex items-center gap-4 shadow-sm">
            <span className="text-sm font-medium text-slate-500">Total Tasks:</span>
            <span className="text-2xl font-bold text-slate-900">{tasks.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* CREATE TASK FORM CARD */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Add New Task
            </h2>

            <form onSubmit={createTask} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="What needs to be done?"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-slate-200 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400 text-sm"
                  required
                />
              </div>

              <div>
                <textarea
                  name="description"
                  placeholder="Add details or context here..."
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-slate-200 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400 text-sm resize-none"
                />
              </div>

              <button
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm transition-all active:scale-[0.98] text-sm"
              >
                Create Task
              </button>
            </form>
          </div>

          {/* TASKS VIEW GRID */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              Active Focus Tasks
            </h2>
            
            {tasks.length === 0 ? (
              <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center">
                <p className="text-slate-400 font-medium">No tasks found</p>
                <p className="text-sm text-slate-400 mt-1">Fill out the creation box to populate your workspace board.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tasks.map((task) => (
                  <TaskCard
                    key={task._id}
                    task={task}
                    onDelete={deleteTask}
                    onStatusUpdate={updateStatus}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;