import { Check, Clock } from 'lucide-react';
import './TaskCard.css';

const CATEGORY_COLORS = {
  estudo: 'var(--cat-estudo)',
  academia: 'var(--cat-academia)',
  trabalho: 'var(--cat-trabalho)',
  pessoal: 'var(--cat-pessoal)',
};

export default function TaskCard({ task, onToggleComplete, onEdit }) {
  const categoryColor = CATEGORY_COLORS[task.category];

  if (task.completed) {
    return (
      <div
        className="task-card task-card--completed"
        style={{ '--category-color': categoryColor }}
        onClick={() => onEdit?.(task)}
      >
        <div className="task-card__category-bar" />
        <div className="task-card__body task-card__body--done">
          <button
            className="task-card__toggle task-card__toggle--done"
            onClick={(e) => {
              e.stopPropagation();
              onToggleComplete?.(task.id);
            }}
          >
            <Check size={16} />
          </button>
          <span className="task-card__done-title">{task.title}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="task-card"
      style={{ '--category-color': categoryColor }}
      onClick={() => onEdit?.(task)}
    >
      <div className="task-card__category-bar" />
      <div className="task-card__body">
        <div className="task-card__header">
          <h3 className="task-card__title">{task.title}</h3>
          <button
            className="task-card__toggle"
            onClick={(e) => {
              e.stopPropagation();
              onToggleComplete?.(task.id);
            }}
          >
            <div className="task-card__circle" />
          </button>
        </div>
        {task.subtitle && (
          <p className="task-card__subtitle">{task.subtitle}</p>
        )}
        <div className="task-card__meta">
          <div className="task-card__time">
            <Clock size={12} />
            <span>{task.startTime} — {task.endTime}</span>
          </div>
          <span className="task-card__status">Pendente</span>
        </div>
      </div>
    </div>
  );
}
