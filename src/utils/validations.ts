const KEYWORDS = [
	"write",
	"validate",
	"create",
	"generate",
	"docker",
	"dockerfile",
	"file",
	"script",
	"system",
	"db",
	"database",
	"api",
	"rest",
	"container",
	"containers",
	"image",
	"dockerize",
	"application",
	"app",
	"project",
	"write a dockerfile",
	"create a dockerfile",
	"generate a dockerfile",
	"escribe",
	"valida",
	"crea",
	"genera",
	"archivo",
	"sistema",
	"base de datos",
	"contenedor",
	"contenedores",
	"imagen",
	"applicacion",
	"proyecto",
	"escribe un dockerfile",
	"crea un dockerfile",
	"genera un dockerfile",
]

export const validateInputPrompt = (prompt: string): boolean => {
	const words = prompt.match(/\w+/g)?.map(p => p.toLocaleLowerCase())
	if (words?.length) {
		const uniqueWords = [...new Set(words)]
		const count = uniqueWords.filter(word => KEYWORDS.includes(word)).length

		const regex = /(write|validate|create|generate|escribe|valida|crea|genera)\s+(un|a\s+)?dockerfile/i

		if (count >= 3 || regex.test(prompt)) return true
		return false
	}
	return false
}
