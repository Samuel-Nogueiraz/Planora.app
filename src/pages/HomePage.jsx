import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { useTasks } from '../hooks/useTasks';
import TaskCard from '../components/TaskCard';
import TaskFormModal from '../components/TaskFormModal';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();
  const { getTasksByDate, toggleTask, addTask, updateTask, deleteTask } =
    useTasks();
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const today = new Date();
  const todayStr = format(today, 'yyyy-MM-dd');
  const todayFormatted = format(today, "EEEE, dd 'de' MMMM", {
    locale: ptBR,
  });
  const todayTasks = getTasksByDate(todayStr);

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
    <div className="home">
      <div className="home__container">
        <header className="home__header">
          <h1 className="home__greeting">Olá, Samuel</h1>
          <p className="home__subtitle">Seja bem-vindo novamente</p>
        </header>

        <section className="home__today">
          <div className="home__date">
            <CalendarDays size={18} />
            <span>Hoje — {todayFormatted}</span>
          </div>

          <div className="home__tasks">
            {todayTasks.length === 0 ? (
              <div className="home__empty">
                <p>Nenhuma tarefa para hoje</p>
                <p className="home__empty-hint">
                  Abra a agenda para criar novas tarefas
                </p>
              </div>
            ) : (
              todayTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggleComplete={toggleTask}
                  onEdit={handleEditTask}
                />
              ))
            )}
          </div>
        </section>

        <button className="home__cta" onClick={() => navigate('/planner')}>
          <span>Abrir agenda completa</span>
          <ArrowRight size={18} />
        </button>
      </div>

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
