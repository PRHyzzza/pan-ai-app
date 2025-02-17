

const model = "deepseek-r1:8b"

const BASE_URL = "http://localhost:11434/api"

export const generate = (prompt: string) => {
    return fetch(`${BASE_URL}/generate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model,
            prompt,
            stream: true,
        }),
    })
}