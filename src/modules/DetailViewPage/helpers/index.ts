// Searching for a number in a string
export function extractFirstNumberFromString(
	inputString: string
): number | null {
	const regex = /\d+/
	const match = inputString.match(regex)
	if (match) {
		return Number(match[0])
	} else {
		return null
	}
}
