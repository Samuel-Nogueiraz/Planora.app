import './ProgressHeader.css';

export default function ProgressHeader({ completedCount, totalCount, dateText }) {
  const total = totalCount ?? 0;
  const completed = completedCount ?? 0;
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <section className="progress-header">
      <div className="progress-header__top">
        <div className="progress-header__greeting">
          <h1 className="progress-header__title">
            <span className="progress-header__greeting-line1">Olá, Visitante</span>
            <span className="progress-header__line-saudation">
              Seja bem-vindo!
            </span>
          </h1>
          <p className="progress-header__subtitle">{dateText}</p>
        </div>

        <div className="progress-header__progress-text">
          {completed} de {total} tarefas
        </div>
      </div>

      <div className="progress-header__bar" aria-hidden="true">
        <div className="progress-header__fill" style={{ width: `${percentage}%` }} />
      </div>
    </section>
  );
}

