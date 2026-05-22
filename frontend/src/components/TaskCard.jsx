// Template recommendation for components/TaskCard.jsx
function TaskCard({ task, onDelete, onStatusUpdate }) {
  const isCompleted = task.status === "completed";

  return (
    <div className={`p-5 rounded-2xl border transition-all shadow-sm flex flex-col justify-between h-full bg-white ${isCompleted ? 'border-emerald-100 bg-emerald-55/10 opacity-75' : 'border-slate-200 hover:shadow-md hover:border-slate-300'}`}>
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className={`font-bold text-slate-900 leading-tight ${isCompleted ? 'line-through text-slate-400' : ''}`}>
            {task.title}
          </h3>
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold tracking-wide uppercase ${isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
            {task.status || 'pending'}
          </span>
        </div>
        <p className="text-slate-500 text-sm mb-4 whitespace-pre-wrap leading-relaxed">
          {task.description}
        </p>
      </div>

      <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 mt-auto">
        {!isCompleted && onStatusUpdate && (
          <button
            onClick={() => onStatusUpdate(task._id)}
            className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg transition-all font-medium"
          >
            Complete
          </button>
        )}
        <button
          onClick={() => onDelete(task._id)}
          className="text-xs border border-slate-200 text-slate-500 hover:text-red-600 hover:border-red-200 px-3 py-1.5 rounded-lg transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
