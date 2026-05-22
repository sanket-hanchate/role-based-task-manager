function UsersTable({ users, onDelete, onStatusUpdate }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm mt-10 overflow-hidden">
      {/* TABLE HEADER PANEL */}
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            User Workspace Directory
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage system access permission tiers, system privileges, and registration health states.
          </p>
        </div>
        <div className="bg-slate-100 px-3 py-1 rounded-lg text-xs font-semibold text-slate-600">
          {users.length} Users Total
        </div>
      </div>

      {/* CORE TABLE VIEW COMPONENT */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm text-slate-700">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200/60 text-xs font-bold uppercase tracking-wider text-slate-500">
              <th className="p-4 pl-6">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4 pr-6 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {users.map((user) => {
              const isAdmin = user.role?.toLowerCase() === "admin";
              const isActive = user.status?.toLowerCase() === "active";

              return (
                <tr 
                  key={user._id} 
                  className="hover:bg-slate-50/70 transition-colors group"
                >
                  {/* USER NAME CARD DATA */}
                  <td className="p-4 pl-6 font-semibold text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 uppercase">
                        {user.name?.charAt(0) || "?"}
                      </div>
                      <span>{user.name}</span>
                    </div>
                  </td>

                  {/* USER EMAIL */}
                  <td className="p-4 text-slate-500 font-mono text-xs">
                    {user.email}
                  </td>

                  {/* DYNAMIC ROLE BADGE */}
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${
                      isAdmin 
                        ? "bg-indigo-50 text-indigo-700 border border-indigo-100" 
                        : "bg-slate-100 text-slate-700"
                    }`}>
                      {user.role}
                    </span>
                  </td>

                  {/* DYNAMIC STATUS BADGE */}
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      isActive 
                        ? "bg-emerald-50 text-emerald-700" 
                        : "bg-amber-50 text-amber-700"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-500" : "bg-amber-500"}`} />
                      {user.status}
                    </span>
                  </td>

                  {/* ROW MODIFICATION ACTIONS */}
                  <td className="p-4 pr-6">
                    <div className="flex items-center justify-end gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onStatusUpdate(user._id, user.status)}
                        className="text-xs bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium px-3 py-1.5 rounded-xl shadow-sm transition-all active:scale-95"
                      >
                        Toggle Status
                      </button>
                      <button
                        onClick={() => onDelete(user._id)}
                        className="text-xs bg-white hover:bg-red-50 text-slate-400 hover:text-red-600 border border-slate-200 hover:border-red-200 px-3 py-1.5 rounded-xl transition-all active:scale-95"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* EMPTY MATRIX FALLBACK NOTICE CONTAINER */}
      {users.length === 0 && (
        <div className="p-12 text-center text-slate-400 font-medium">
          No registered records matching inside deployment nodes.
        </div>
      )}
    </div>
  );
}

export default UsersTable;