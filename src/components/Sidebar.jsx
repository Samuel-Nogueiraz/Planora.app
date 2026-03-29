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
  const isPlannerActive = location.pathname.startsWith('/planner');

  return (
    <>
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
            type="button"
            disabled={!item.path}
            className={`sidebar__link ${
              item.path && location.pathname === item.path
                ? 'sidebar__link--active'
                : ''
            }`}
            onClick={() => item.path && navigate(item.path)}
          >
            <item.icon size={18} />
            <span>
              {item.path ? item.label : `${item.label} (em breve)`}
            </span>
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

    <nav className="bottom-nav" aria-label="Navegação principal">
      <button
        type="button"
        className={`bottom-nav__item ${
          location.pathname === '/' ? 'bottom-nav__item--active' : ''
        }`}
        aria-current={location.pathname === '/' ? 'page' : undefined}
        onClick={() => navigate('/')}
      >
        <LayoutGrid size={22} aria-hidden />
        <span>Hoje</span>
      </button>
      <button
        type="button"
        className="bottom-nav__fab"
        aria-label="Nova tarefa"
        onClick={onNewTask}
      >
        <Plus size={26} strokeWidth={2.25} aria-hidden />
      </button>
      <button
        type="button"
        className={`bottom-nav__item ${isPlannerActive ? 'bottom-nav__item--active' : ''}`}
        aria-current={isPlannerActive ? 'page' : undefined}
        onClick={() => navigate('/planner')}
      >
        <CalendarDays size={22} aria-hidden />
        <span>Agenda</span>
      </button>
    </nav>
    </>
  );
}
