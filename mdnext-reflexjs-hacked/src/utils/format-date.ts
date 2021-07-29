export function formatDate(input: string): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-UK', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
