export function newlineToBr(text: string): string {
  return text.replace(/\n/g, '<br />');
}
