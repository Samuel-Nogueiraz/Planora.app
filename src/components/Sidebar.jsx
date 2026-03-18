import { useNavigate, useLocation } from 'react-router-dom';
import { Plus, CalendarDays, LayoutGrid, Tag } from 'lucide-react';
import './Sidebar.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Hoje', icon: LayoutGrid, path: '/' },
  { id: 'planner', label: 'Agenda', icon: CalendarDays, path: '/planner' },
  { id: 'categories', label: 'Categorias', icon: Tag, path: null },
];

export default function Sidebar({ onNewTask }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <h1 className="sidebar__logo">Planora</h1>
      </div>

      <button className="sidebar__new-task" onClick={onNewTask}>
        <Plus size={18} />
        <span>Nova tarefa</span>
      </button>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`sidebar__link ${
              location.pathname === item.path ? 'sidebar__link--active' : ''
            }`}
            onClick={() => item.path && navigate(item.path)}
            disabled={!item.path}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
