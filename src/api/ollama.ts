const model = "deepseek-r1:8b"
const headers = { "Content-Type": "application/json" }
const BASE_URL = "http://localhost:11434/api"
const POST = "POST"

export const generate = (prompt: string) => {
    return fetch(`${BASE_URL}/generate`, {
        method: POST,
        headers,
        body: JSON.stringify({
            model,
            prompt,
            stream: true,
        }),
    })
}
