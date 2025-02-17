export function parseJson<T>(str: string): T | null {
  try {
    const result = JSON.parse(str);
    return result as T; // 断言返回值为指定类型 T
  } catch (error) {
    console.error("解析 JSON 失败:", error);
    return null; // 如果解析失败，返回 null 或抛出自定义错误
  }
}