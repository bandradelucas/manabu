export function randomUnsignedInteger(length: number): string {
  return Array(length)
    .fill(2)
    .reduce((previousValue) => `${previousValue}${Math.random().toString().slice(2, 3)}`, '');
}