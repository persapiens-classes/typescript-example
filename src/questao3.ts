
export function ordenarDecrescente(array: string[]): string[] {
	return array.sort((a, b) => b.localeCompare(a));
}
