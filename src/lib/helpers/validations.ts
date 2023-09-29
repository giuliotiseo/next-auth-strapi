export function isInvalidDate(date: Date): boolean {
  return date.toString() === 'Invalid Date';
}

export function validateEmail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}