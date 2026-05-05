export function formatRemainingTime(seconds) {
  if (typeof seconds !== 'number' || seconds < 0) {
    return '00:00';
  }
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function isTimeCritical(remainingSeconds, totalDurationSeconds = 1800) {
  if (remainingSeconds <= 0) return true;
  // Critical when less than 10% remaining or under 2 minutes
  return remainingSeconds <= Math.min(120, totalDurationSeconds * 0.1);
}
