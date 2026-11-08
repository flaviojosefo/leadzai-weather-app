export function formatTime (timestamp: number, timezone: number): string {
  const date = new Date((timestamp + timezone) * 1000);
  return date.toISOString().slice(11, 16);
}