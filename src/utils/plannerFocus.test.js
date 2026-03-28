import { describe, it, expect } from 'vitest';
import { computeDayFocusLevel } from './plannerFocus';

describe('computeDayFocusLevel', () => {
  it('retorna null quando a semana exibida não contém hoje', () => {
    expect(computeDayFocusLevel(0, -1)).toBeNull();
    expect(computeDayFocusLevel(3, -1)).toBeNull();
  });

  it('meio da semana: primário em hoje; secundário em vizinhos na grade', () => {
    const today = 3; // quarta
    expect(computeDayFocusLevel(3, today)).toBe('primary');
    expect(computeDayFocusLevel(2, today)).toBe('secondary');
    expect(computeDayFocusLevel(4, today)).toBe('secondary');
    expect(computeDayFocusLevel(0, today)).toBeNull();
    expect(computeDayFocusLevel(1, today)).toBeNull();
    expect(computeDayFocusLevel(5, today)).toBeNull();
    expect(computeDayFocusLevel(6, today)).toBeNull();
  });

  it('domingo: primário em domingo; secundário só em segunda (sem sábado anterior)', () => {
    const today = 0;
    expect(computeDayFocusLevel(0, today)).toBe('primary');
    expect(computeDayFocusLevel(1, today)).toBe('secondary');
    expect(computeDayFocusLevel(6, today)).toBeNull();
    expect(computeDayFocusLevel(2, today)).toBeNull();
  });

  it('sábado: primário só em sábado; sexta não é secundária', () => {
    const today = 6;
    expect(computeDayFocusLevel(6, today)).toBe('primary');
    expect(computeDayFocusLevel(5, today)).toBeNull();
    expect(computeDayFocusLevel(0, today)).toBeNull();
  });

  it('segunda: primário em segunda; domingo e terça secundários', () => {
    const today = 1;
    expect(computeDayFocusLevel(1, today)).toBe('primary');
    expect(computeDayFocusLevel(0, today)).toBe('secondary');
    expect(computeDayFocusLevel(2, today)).toBe('secondary');
    expect(computeDayFocusLevel(3, today)).toBeNull();
  });

  it('sexta: primário em sexta; quinta e sábado secundários', () => {
    const today = 5;
    expect(computeDayFocusLevel(5, today)).toBe('primary');
    expect(computeDayFocusLevel(4, today)).toBe('secondary');
    expect(computeDayFocusLevel(6, today)).toBe('secondary');
    expect(computeDayFocusLevel(3, today)).toBeNull();
  });
});
