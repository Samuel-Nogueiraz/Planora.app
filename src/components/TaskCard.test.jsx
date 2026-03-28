import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import TaskCard from './TaskCard';

const baseTask = {
  id: 42,
  title: 'Revisar relatório mensal',
  subtitle: 'Agendar reunião com equipe',
  startTime: '08:00',
  endTime: '09:00',
  category: 'trabalho',
  completed: false,
};

describe('TaskCard', () => {
  it('renderiza a categoria, o horário e não mostra pill pendente', () => {
    render(<TaskCard task={baseTask} onToggleComplete={vi.fn()} onEdit={vi.fn()} />);

    expect(screen.getByText('Trabalho')).toBeInTheDocument();
    expect(screen.getByText('Revisar relatório mensal')).toBeInTheDocument();
    expect(screen.getByText('Agendar reunião com equipe')).toBeInTheDocument();
    expect(screen.getByText('08:00 — 09:00')).toBeInTheDocument();
    expect(screen.queryByText('Pendente')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Categoria: Trabalho')).toBeInTheDocument();
  });

  it('mostra pill "Concluído" quando tarefa está completa', () => {
    const completedTask = { ...baseTask, completed: true };
    render(<TaskCard task={completedTask} onToggleComplete={vi.fn()} onEdit={vi.fn()} />);

    expect(screen.getByText('Concluído')).toBeInTheDocument();
  });

  it('faz toggle sem disparar a edição do card', () => {
    const onToggleComplete = vi.fn();
    const onEdit = vi.fn();

    render(
      <TaskCard
        task={baseTask}
        onToggleComplete={onToggleComplete}
        onEdit={onEdit}
      />
    );

    fireEvent.click(screen.getByLabelText('Marcar tarefa como concluída'));

    expect(onToggleComplete).toHaveBeenCalledWith(42);
    expect(onEdit).not.toHaveBeenCalled();
  });
});
