import { format } from 'date-fns';
import TaskCard from './TaskCard';
import './DayColumn.css';

const DAY_LABELS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

export default function DayColumn({
  date,
  isToday,
  tasks,
  onToggleComplete,
  onEditTask,
}) {
  const dayLabel = DAY_LABELS[date.getDay()];
  const dayNumber = format(date, 'dd');
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className={`day-column ${isToday ? 'day-column--today' : ''}`}>
      <div className="day-column__header">
        <div className="day-column__label-row">
          <span className="day-column__label">{dayLabel}</span>
          {isToday && <span className="day-column__badge">HOJE</span>}
        </div>
        <span className="day-column__number">{dayNumber}</span>
      </div>

      <div className="day-column__tasks">
        {tasks.length === 0 && (
          <p className="day-column__empty">Sem tarefas</p>
        )}
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEdit={onEditTask}
          />
        ))}
      </div>

      <div className="day-column__progress">
        <span>
          {completedCount} / {tasks.length} concluídas
        </span>
      </div>
    </div>
  );
}
