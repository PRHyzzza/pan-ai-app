<template>
    <transition-group name="message" tag="div" class="message-container">
        <div v-for="item in messages" :key="item.id" :class="['message-item', `message-${item.type}`]">
            <span class="message-content">{{ item.content }}</span>
            <span class="message-close" @click="messages.splice(messages.indexOf(item), 1)">×</span>
        </div>
    </transition-group>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([])

const addMessage = (message) => {
    messages.value.push(message)
    setTimeout(() => {
        const index = messages.value.findIndex(m => m.id === message.id)
        if (index !== -1) {
            messages.value.splice(index, 1)
        }
    }, message.duration)
}

defineExpose({
    addMessage
})
</script>

<style scoped>
.message-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
}

.message-item {
    min-width: 240px;
    padding: 14px 16px;
    margin-bottom: 12px;
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    background: #fff;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    justify-content: space-between;
}

.message-close {
    cursor: pointer;
    font-size: 20px;
    color: #909399;
}

.message-close:hover {
    color: #606266;
}

.message-success {
    border-left: 6px solid #67c23a;
}

.message-error {
    border-left: 6px solid#f56c6c;
}

.message-warning {
    border-left: 6px solid #e6a23c;
}

.message-info {
    border-left: 6px solid #909399;
}

.message-enter-from,
.message-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.message-leave-active {
    position: absolute;
}
</style>
