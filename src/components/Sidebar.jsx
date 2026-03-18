import { useNavigate, useLocation } from 'react-router-dom';
import { Plus, CalendarDays, LayoutGrid, Tag } from 'lucide-react';
import './Sidebar.css';
import logoSrc from '../images/Planora-logo.png';

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
        <button
          type="button"
          className="sidebar__brand-button"
          aria-label="Ir para a página inicial"
          onClick={() => navigate('/')}
        >
          <img src={logoSrc} className="sidebar__logo" alt="Planora" />
        </button>
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
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <footer className="sidebar__footer">
        <div className="sidebar__user-box">
          <div className="sidebar__avatar" aria-hidden="true" />
          <div className="sidebar__user-info">
            <div className="sidebar__user-name">Samuel</div>
            <a
              className="sidebar__edit-profile"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Editar perfil
            </a>
          </div>
        </div>
      </footer>
    </aside>
  );
}
