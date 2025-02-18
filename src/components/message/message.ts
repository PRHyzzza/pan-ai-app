// message.js
import { ComponentPublicInstance, createApp } from 'vue'
import MessageComponent from './Message.vue'

let instance: ComponentPublicInstance | null = null
let messageId = 0

type MessageOptions = {
  content: string
  duration?: number
  type?: 'success' | 'error' | 'warning'
}

const createInstance = () => {
  if (instance) return instance

  const container = document.createElement('div')
  document.body.appendChild(container)

  const app = createApp(MessageComponent)
  instance = app.mount(container)

  return instance
}

const message = {
  success(content: string) {
    this.show({ content, type: 'success' })
  },
  error(content: string) {
    this.show({ content, type: 'error' })
  },
  warning(content: string) {
    this.show({ content, type: 'warning' })
  },
  show(options: MessageOptions) {
    const instance = createInstance()
    messageId++
    // @ts-ignore
    instance.addMessage({
      id: messageId,
      duration: options.duration || 3000,
      content: options.content,
      type: options.type
    })
  }
}

export default message
