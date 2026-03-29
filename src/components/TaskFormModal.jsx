import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Modal from './Modal';
import './TaskFormModal.css';

const CATEGORIES = [
  { value: 'estudo', label: 'Estudo' },
  { value: 'academia', label: 'Academia' },
  { value: 'trabalho', label: 'Trabalho' },
  { value: 'pessoal', label: 'Pessoal' },
];

const FREQUENCIES = [
  { value: 'single', label: 'Apenas este dia' },
  { value: 'weekdays_all', label: 'Todos os dias da semana' },
  { value: 'month_all', label: 'Todos os dias do mês' },
  { value: 'weekdays_only', label: 'Apenas dias úteis' },
];

const PRIORITIES = [
  { value: 'baixa', label: 'Baixa' },
  { value: 'media', label: 'Média' },
  { value: 'alta', label: 'Alta' },
];

const EMPTY_FORM = {
  date: format(new Date(), 'yyyy-MM-dd'),
  frequency: 'single',
  title: '',
  category: 'estudo',
  subtitle: '',
  description: '',
  startTime: '08:00',
  endTime: '09:00',
  priority: 'media',
};

export default function TaskFormModal({
  isOpen,
  onClose,
  task,
  onSave,
  onDelete,
}) {
  const isEditing = !!task;
  const [formData, setFormData] = useState(EMPTY_FORM);
  const submitLabel = isEditing ? 'Salvar alterações' : 'Criar tarefa';

  useEffect(() => {
    if (task) {
      setFormData({
        date: task.date,
        frequency: task.frequency || 'single',
        title: task.title,
        category: task.category,
        subtitle: task.subtitle || '',
        description: task.description || '',
        startTime: task.startTime,
        endTime: task.endTime,
        priority: task.priority,
      });
    } else {
      setFormData({ ...EMPTY_FORM, date: format(new Date(), 'yyyy-MM-dd') });
    }
  }, [task, isOpen]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onSave(formData);
    onClose();
  };

  const handleDelete = () => {
    if (task) {
      onDelete(task.id);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? 'Editar tarefa' : 'Criar nova tarefa'}
    >
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="task-form__grid task-form__grid--meta">
          <div className="task-form__field">
            <label className="task-form__label">Dia</label>
            <input
              type="date"
              className="task-form__input"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
            />
          </div>

          <div className="task-form__field">
            <label className="task-form__label">Frequência</label>
            <select
              className="task-form__select"
              value={formData.frequency}
              onChange={(e) => handleChange('frequency', e.target.value)}
            >
              {FREQUENCIES.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="task-form__field task-form__field--title">
          <label className="task-form__label">
            Título da tarefa <span className="task-form__required">*</span>
          </label>
          <input
            type="text"
            className="task-form__input"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Ex: Treino matinal"
            required
          />
        </div>

        <div className="task-form__field">
          <label className="task-form__label">Subtítulo</label>
          <input
            type="text"
            className="task-form__input"
            value={formData.subtitle}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            placeholder="Ex: Treino superior"
          />
        </div>

        <div className="task-form__field">
          <label className="task-form__label">Descrição</label>
          <textarea
            className="task-form__textarea"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Detalhes da tarefa..."
            rows={3}
          />
        </div>

        <div className="task-form__category-time-row">
          <fieldset className="task-form__field task-form__fieldset">
            <legend className="task-form__label">Categorias</legend>
            <div className="task-form__chip-group" role="radiogroup" aria-label="Categorias">
              {CATEGORIES.map((category) => (
                <label
                  key={category.value}
                  className={`task-form__chip ${
                    formData.category === category.value ? 'task-form__chip--selected' : ''
                  } task-form__chip--${category.value}`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={category.value}
                    checked={formData.category === category.value}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="task-form__chip-input"
                  />
                  <span className="task-form__chip-label">{category.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="task-form__field">
            <label className="task-form__label">Horário</label>
            <div className="task-form__time-group">
              <div className="task-form__time-field">
                <span className="task-form__time-label">Início</span>
                <input
                  type="time"
                  className="task-form__input"
                  value={formData.startTime}
                  onChange={(e) => handleChange('startTime', e.target.value)}
                  required
                />
              </div>
              <div className="task-form__time-field">
                <span className="task-form__time-label">Fim</span>
                <input
                  type="time"
                  className="task-form__input"
                  value={formData.endTime}
                  onChange={(e) => handleChange('endTime', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <fieldset className="task-form__field task-form__fieldset">
          <legend className="task-form__label">Prioridade</legend>
          <div className="task-form__chip-group" role="radiogroup" aria-label="Prioridade">
            {PRIORITIES.map((priority) => (
              <label
                key={priority.value}
                className={`task-form__chip ${
                  formData.priority === priority.value ? 'task-form__chip--selected' : ''
                } task-form__chip--priority-${priority.value}`}
              >
                <input
                  type="radio"
                  name="priority"
                  value={priority.value}
                  checked={formData.priority === priority.value}
                  onChange={(e) => handleChange('priority', e.target.value)}
                  className="task-form__chip-input"
                />
                <span className="task-form__chip-label">{priority.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="task-form__actions">
          <div className="task-form__actions-left">
            {isEditing && (
              <button
                type="button"
                className="task-form__btn task-form__btn--danger"
                onClick={handleDelete}
              >
                Excluir tarefa
              </button>
            )}
          </div>
          <div className="task-form__actions-right">
            <button
              type="submit"
              className="task-form__btn task-form__btn--primary"
            >
              {submitLabel}
            </button>
            {!isEditing && (
              <button
                type="button"
                className="task-form__btn task-form__btn--ghost"
                onClick={onClose}
              >
                Descartar
              </button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
