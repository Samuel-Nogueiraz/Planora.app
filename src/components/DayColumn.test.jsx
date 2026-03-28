import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DayColumn from './DayColumn';

const baseDate = new Date('2025-03-19T12:00:00'); // quarta

describe('DayColumn', () => {
  it('aplica classes de foco primário e secundário', () => {
    const { rerender, container } = render(
      <DayColumn
        date={baseDate}
        isToday={false}
        focusLevel="primary"
        tasks={[]}
        onToggleComplete={() => {}}
        onEditTask={() => {}}
      />
    );

    const root = container.firstChild;
    expect(root).toHaveClass('day-column--focus-primary');
    expect(root).not.toHaveClass('day-column--focus-secondary');

    rerender(
      <DayColumn
        date={baseDate}
        isToday={false}
        focusLevel="secondary"
        tasks={[]}
        onToggleComplete={() => {}}
        onEditTask={() => {}}
      />
    );
    expect(root).toHaveClass('day-column--focus-secondary');
    expect(root).not.toHaveClass('day-column--focus-primary');
  });

  it('combina HOJE com classes de foco', () => {
    const { container } = render(
      <DayColumn
        date={baseDate}
        isToday
        focusLevel="primary"
        tasks={[]}
        onToggleComplete={() => {}}
        onEditTask={() => {}}
      />
    );

    expect(container.firstChild).toHaveClass('day-column--today');
    expect(container.firstChild).toHaveClass('day-column--focus-primary');
    expect(screen.getByText('HOJE')).toBeInTheDocument();
  });
});
