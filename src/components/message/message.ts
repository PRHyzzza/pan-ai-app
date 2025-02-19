// message.js
import { ComponentPublicInstance, createApp } from 'vue'
import MessageComponent from './Message.vue'

type MessageComponentType = InstanceType<typeof MessageComponent>

let instance: ComponentPublicInstance<MessageComponentType> | null = null
let messageId = 0

type MessageOptions = {
  content: string
  duration?: number
  type?: 'success' | 'error' | 'warning' | 'info'
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
  success(content: string, duration?: number) {
    this.show({ content, type: 'success', duration })
  },
  error(content: string, duration?: number) {
    this.show({ content, type: 'error', duration })
  },
  warning(content: string, duration?: number) {
    this.show({ content, type: 'warning', duration })
  },
  info(content: string, duration?: number) {
    this.show({ content, type: 'info', duration })
  },
  show(options: MessageOptions) {
    const instance = createInstance()
    messageId++

    instance.addMessage({
      id: messageId,
      duration: options.duration || 3000,
      content: options.content,
      type: options.type || 'info',
    })
  }
}

export default message
