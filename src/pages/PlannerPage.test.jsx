import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { TaskProvider } from '../hooks/useTasks';
import PlannerPage from './PlannerPage';

function renderPlanner() {
  return render(
    <TaskProvider>
      <MemoryRouter>
        <PlannerPage />
      </MemoryRouter>
    </TaskProvider>
  );
}

describe('PlannerPage', () => {
  let scrollIntoViewSpy;

  beforeEach(() => {
    if (!Element.prototype.scrollIntoView) {
      Element.prototype.scrollIntoView = vi.fn();
    }
    scrollIntoViewSpy = vi.spyOn(Element.prototype, 'scrollIntoView');
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('chama scrollIntoView na coluna de hoje quando a semana atual inclui hoje', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    const fixed = new Date('2025-03-19T15:00:00'); // quarta
    vi.setSystemTime(fixed);

    renderPlanner();

    await waitFor(() => {
      expect(scrollIntoViewSpy).toHaveBeenCalled();
    });

    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });

    expect(screen.getByText('HOJE')).toBeInTheDocument();
  });

  it('não chama scrollIntoView quando a semana exibida não contém hoje', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2025-03-19T12:00:00'));

    renderPlanner();

    await waitFor(() => {
      expect(scrollIntoViewSpy).toHaveBeenCalled();
    });

    scrollIntoViewSpy.mockClear();

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Próxima semana' }));

    expect(scrollIntoViewSpy).not.toHaveBeenCalled();
  });
});
