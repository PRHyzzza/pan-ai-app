import { ref } from "vue"
import { parseJson } from "../utils";

// 声明类型
type doneJson = { 'created_at': string, response: string, done: boolean, model: string }

export default () => {
    // 流式返回数据
    const result = ref<string>("")
    // 创建一个TextDecoder实例
    const textDecoder = new TextDecoder();

    /**
     * 流式返回数据
     * @param response
     */
    const getText = async (response: Response) => {

        result.value = ""
        // 创建一个可读流
        const reader = response.body?.getReader();
        while (true) {
            const { done, value } = await reader?.read() as { done: boolean, value: Uint8Array };
            if (done) {
                console.log("Stream ended");
                break;
            }
            const aiJson: doneJson | null = parseJson(textDecoder.decode(value, { stream: true }));
            result.value += aiJson?.response;
            console.log(aiJson?.response);
        }
    }

    return { getText, result }
}