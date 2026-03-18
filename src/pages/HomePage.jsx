import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useTasks } from '../hooks/useTasks';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';
import TaskFormModal from '../components/TaskFormModal';
import ProgressHeader from '../components/ProgressHeader';
import './HomePage.css';

export default function HomePage() {
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
  const completedCount = todayTasks.filter((t) => t.completed).length;
  const totalCount = todayTasks.length;

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleNewTask = () => {
    setEditingTask(null);
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
      <Sidebar onNewTask={handleNewTask} />

      <main className="home__main">
        <div className="home__content">
          <ProgressHeader
            completedCount={completedCount}
            totalCount={totalCount}
            dateText={todayFormatted}
          />

          <section className="home__today">
            <h2 className="home__section-title">Hoje</h2>

            <div className="home__tasks">
              {todayTasks.length === 0 ? (
                <div className="home__empty">
                  <p>Nenhuma tarefa para hoje ainda</p>
                  <p className="home__empty-hint">
                    Clique em <span className="home__accent">Nova tarefa</span> na
                    sidebar para começar agora.
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
