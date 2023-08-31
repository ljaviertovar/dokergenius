export const getInnerText = (text: string, startText: string, endText: string): string => {
	const startIndex = text.indexOf(startText) + startText.length
	const text2 = text.substring(startIndex)
	const endIndex = text2.indexOf(endText)

	if (startIndex === -1 || endIndex === -1) return text

	return text2.substring(0, endIndex).trim()
}

export const getDockerfileText = (text: string, startText: string, endText: string): string => {
	const start = text.indexOf(startText)
	console.log(start, "---")
	let dockerfile = ""
	dockerfile = text.substring(start + startText.length)
	console.log(dockerfile, "--")
	const end = dockerfile.indexOf(endText)
	return dockerfile.substring(0, end)
}
