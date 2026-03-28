import { useId } from 'react';
import './ProgressHeader.css';

export default function ProgressHeader({
  completedCount,
  totalCount,
  dateText,
  greetingLine1 = 'Olá, Visitante',
  greetingLine2 = 'Seja bem-vindo!',
}) {
  const statsId = useId();
  const total = totalCount ?? 0;
  const completed = completedCount ?? 0;
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  const progressValue = Math.round(percentage);

  return (
    <section className="progress-header">
      <div className="progress-header__top">
        <div className="progress-header__greeting">
          <h1 className="progress-header__title">
            <span className="progress-header__greeting-line1">{greetingLine1}</span>
            <span className="progress-header__greeting-line2">{greetingLine2}</span>
          </h1>
          <p className="progress-header__subtitle">{dateText}</p>
        </div>

        <div id={statsId} className="progress-header__progress-text">
          {completed} de {total} tarefas diárias
        </div>
      </div>

      <div
        className="progress-header__bar"
        role="progressbar"
        aria-valuenow={progressValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby={statsId}
      >
        <div className="progress-header__fill" style={{ width: `${percentage}%` }} aria-hidden />
      </div>
    </section>
  );
}

