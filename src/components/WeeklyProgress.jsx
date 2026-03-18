import './WeeklyProgress.css';

export default function WeeklyProgress({ completed, total }) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="weekly-progress">
      <div className="weekly-progress__info">
        <span className="weekly-progress__label">Progresso da semana</span>
        <span className="weekly-progress__count">
          {completed} / {total} tarefas concluídas
        </span>
      </div>
      <div className="weekly-progress__bar">
        <div
          className="weekly-progress__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
