import { useState, useMemo } from 'react';
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
import './PlannerPage.css';

export default function PlannerPage() {
  const { tasks, toggleTask, addTask, updateTask, deleteTask, getTasksByDate } =
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
  }, [weekDays, tasks, getTasksByDate]);

  const weekCompleted = weekTasks.filter((t) => t.completed).length;

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
        <header className="planner__header">
          <button className="planner__nav-btn" onClick={goToPrevWeek}>
            <ChevronLeft size={20} />
          </button>
          <span className="planner__week-label">{weekLabel}</span>
          <button className="planner__nav-btn" onClick={goToNextWeek}>
            <ChevronRight size={20} />
          </button>
        </header>

        <div className="planner__grid">
          {weekDays.map((day) => {
            const dateStr = format(day, 'yyyy-MM-dd');
            const dayTasks = getTasksByDate(dateStr);
            return (
              <DayColumn
                key={dateStr}
                date={day}
                isToday={checkIsToday(day)}
                tasks={dayTasks}
                onToggleComplete={toggleTask}
                onEditTask={handleEditTask}
              />
            );
          })}
        </div>

        <WeeklyProgress completed={weekCompleted} total={weekTasks.length} />
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
