/**
 * Foco visual na semana visível: hoje (primário), vizinhos na grade (secundário).
 * Domingo: só domingo + segunda com secundário.
 * Sábado: só sábado (sem sexta como vizinho).
 *
 * @param {number} dayIndexInWeek 0 = domingo … 6 = sábado
 * @param {number} todayIndexInWeek índice do dia de hoje na semana exibida, ou -1 se não houver
 * @returns {'primary' | 'secondary' | null}
 */
export function computeDayFocusLevel(dayIndexInWeek, todayIndexInWeek) {
  if (todayIndexInWeek < 0) return null;
  if (todayIndexInWeek === 6) {
    return dayIndexInWeek === 6 ? 'primary' : null;
  }
  if (todayIndexInWeek === 0) {
    if (dayIndexInWeek === 0) return 'primary';
    if (dayIndexInWeek === 1) return 'secondary';
    return null;
  }
  if (dayIndexInWeek === todayIndexInWeek) return 'primary';
  if (
    dayIndexInWeek === todayIndexInWeek - 1 ||
    dayIndexInWeek === todayIndexInWeek + 1
  ) {
    return 'secondary';
  }
  return null;
}
