import { Check, Clock } from 'lucide-react';
import './TaskCard.css';

const CATEGORY_COLORS = {
  estudo: 'var(--cat-estudo)',
  academia: 'var(--cat-academia)',
  trabalho: 'var(--cat-trabalho)',
  pessoal: 'var(--cat-pessoal)',
};

const CATEGORY_LABELS = {
  estudo: 'Estudo',
  academia: 'Academia',
  trabalho: 'Trabalho',
  pessoal: 'Pessoal',
};

export default function TaskCard({ task, onToggleComplete, onEdit }) {
  const categoryColor = CATEGORY_COLORS[task.category] ?? 'var(--cat-estudo)';
  const categoryLabel = CATEGORY_LABELS[task.category] ?? 'Estudo';
  const isCompleted = !!task.completed;
  const statusColorVar = isCompleted
    ? 'var(--status-completed)'
    : 'var(--status-pending)';
  const statusBgVar = isCompleted
    ? 'var(--status-completed-bg)'
    : 'var(--status-pending-bg)';

  return (
    <div
      className={`task-card ${isCompleted ? 'task-card--completed' : ''}`}
      style={{
        '--category-color': categoryColor,
        '--status-color': statusColorVar,
        '--status-bg': statusBgVar,
      }}
      onClick={() => onEdit?.(task)}
    >
      <div
        className="task-card__category-rail"
        role="img"
        aria-label={`Categoria: ${categoryLabel}`}
      >
        <div className="task-card__category-bar" />
      </div>

      <div className="task-card__body">
        <div className="task-card__header">
          <div className="task-card__titles">
            <span className="task-card__eyebrow">{categoryLabel}</span>
            <h3 className="task-card__title">{task.title}</h3>
            {task.subtitle && (
              <p className="task-card__subtitle">{task.subtitle}</p>
            )}
          </div>

          <button
            className={`task-card__toggle ${
              isCompleted ? 'task-card__toggle--done' : ''
            }`}
            aria-label={
              isCompleted ? 'Marcar tarefa como pendente' : 'Marcar tarefa como concluída'
            }
            onClick={(e) => {
              e.stopPropagation();
              onToggleComplete?.(task.id);
            }}
          >
            {isCompleted ? <Check size={16} /> : <div className="task-card__circle" />}
          </button>
        </div>

        <div className="task-card__meta">
          <div className="task-card__time">
            <Clock size={12} />
            <span>
              {task.startTime} — {task.endTime}
            </span>
          </div>
          {isCompleted && (
            <span className="task-card__status">Concluído</span>
          )}
        </div>
      </div>
    </div>
  );
}
