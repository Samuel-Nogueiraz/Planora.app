import { useState, useMemo, useRef, useLayoutEffect } from 'react';
import {
  startOfWeek,
  endOfWeek,
  addWeeks,
  subWeeks,
  eachDayOfInterval,
  format,
  isToday as checkIsToday,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTasks } from '../hooks/useTasks';
import Sidebar from '../components/Sidebar';
import DayColumn from '../components/DayColumn';
import WeeklyProgress from '../components/WeeklyProgress';
import TaskFormModal from '../components/TaskFormModal';
import { computeDayFocusLevel } from '../utils/plannerFocus';
import './PlannerPage.css';

export default function PlannerPage() {
  const { toggleTask, addTask, updateTask, deleteTask, getTasksByDate } =
    useTasks();
  const [weekStart, setWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 0 })
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const weekEnd = endOfWeek(weekStart, { weekStartsOn: 0 });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const weekLabel = useMemo(() => {
    const start = format(weekStart, 'dd', { locale: ptBR });
    const end = format(weekEnd, 'dd', { locale: ptBR });
    const month = format(weekEnd, 'MMMM', { locale: ptBR });
    return `${start}–${end} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
  }, [weekStart, weekEnd]);

  const weekTasks = useMemo(() => {
    const all = [];
    weekDays.forEach((day) => {
      const dateStr = format(day, 'yyyy-MM-dd');
      all.push(...getTasksByDate(dateStr));
    });
    return all;
  }, [weekDays, getTasksByDate]);

  const weekCompleted = weekTasks.filter((t) => t.completed).length;

  const todayIndexInWeek = useMemo(
    () => weekDays.findIndex((d) => checkIsToday(d)),
    [weekDays]
  );

  const todayColumnRef = useRef(null);

  useLayoutEffect(() => {
    if (todayIndexInWeek < 0) return;
    const node = todayColumnRef.current;
    if (!node) return;
    const run = () => {
      node.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    };
    const id = requestAnimationFrame(run);
    return () => cancelAnimationFrame(id);
  }, [weekStart, todayIndexInWeek]);

  const goToPrevWeek = () => setWeekStart((prev) => subWeeks(prev, 1));
  const goToNextWeek = () => setWeekStart((prev) => addWeeks(prev, 1));

  const handleNewTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleSave = (formData) => {
    if (editingTask) {
      updateTask(editingTask.id, formData);
    } else {
      addTask(formData);
    }
    setEditingTask(null);
  };

  const handleDelete = (id) => {
    deleteTask(id);
    setEditingTask(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div className="planner">
      <Sidebar onNewTask={handleNewTask} />

      <main className="planner__main">
        <div className="planner__content">
          <header className="planner__header-card">
            <p className="planner__eyebrow">Agenda semanal</p>
            <div className="planner__header-row">
              <button
                type="button"
                className="planner__nav-btn"
                aria-label="Semana anterior"
                onClick={goToPrevWeek}
              >
                <ChevronLeft size={20} />
              </button>
              <h2 className="planner__week-label">{weekLabel}</h2>
              <button
                type="button"
                className="planner__nav-btn"
                aria-label="Próxima semana"
                onClick={goToNextWeek}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </header>

          <section className="planner__grid-shell">
            <div className="planner__grid">
              {weekDays.map((day, dayIndex) => {
                const dateStr = format(day, 'yyyy-MM-dd');
                const dayTasks = getTasksByDate(dateStr);
                const focusLevel = computeDayFocusLevel(
                  dayIndex,
                  todayIndexInWeek
                );
                const isFocusAnchor =
                  focusLevel === 'primary' && todayIndexInWeek >= 0;
                return (
                  <DayColumn
                    key={dateStr}
                    ref={isFocusAnchor ? todayColumnRef : undefined}
                    date={day}
                    isToday={checkIsToday(day)}
                    focusLevel={focusLevel}
                    tasks={dayTasks}
                    onToggleComplete={toggleTask}
                    onEditTask={handleEditTask}
                  />
                );
              })}
            </div>
          </section>

          <WeeklyProgress completed={weekCompleted} total={weekTasks.length} />
        </div>
      </main>

      <TaskFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        task={editingTask}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </div>
  );
}
