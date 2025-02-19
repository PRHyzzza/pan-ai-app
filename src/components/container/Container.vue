<template>
    <div class="container">
        <aside :class="['sidebar', { 'collapsed': isCollapsed }]">
            <div class="toggle-btn" @click="toggleSidebar">
                <span v-if="!isCollapsed">◀</span>
                <span v-else>▶</span>
            </div>

            <div class="menu-items">
                <div v-for="item in menuItems" :key="item.icon" class="menu-item">
                    <i :class="['icon', item.icon]"></i>
                    <span v-show="!isCollapsed" class="text">{{ item.text }}</span>
                </div>
            </div>
        </aside>

        <main :class="['main-content']">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isCollapsed = ref(false);
const menuItems = [
    { icon: 'fas fa-home', text: '首页' },
    { icon: 'fas fa-user', text: '个人中心' },
    { icon: 'fas fa-cog', text: '设置' },
    { icon: 'fas fa-envelope', text: '消息' }
];

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.container {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 200px;
    /* 浅肤色  */
    background: #fffef9;
    transition: all 0.3s ease;
    position: relative;
}

.sidebar.collapsed {
    width: 50px;
}

.toggle-btn {
    color: #2c3e50;
    padding: 15px;
    cursor: pointer;
    text-align: right;
}

.menu-items {
    padding: 10px;
}

.menu-item {
    color: #2c3e50;
    padding: 12px 15px;
    /* 调整左右padding */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* 默认左对齐 */
    border-radius: 4px;
    transition: all 0.3s;
    cursor: pointer;
}

.sidebar.collapsed .menu-item {
    justify-content: center;
    /* 收缩时居中 */
    padding: 12px 0;
    /* 去除左右padding */
}

.icon {
    font-size: 1.2rem;
    width: 24px;
    /* 固定图标容器宽度 */
    display: flex;
    justify-content: center;
    /* 图标自身居中 */
}

.text {
    margin-left: 12px;
    white-space: nowrap;
    opacity: 1;
    transition: opacity 0.3s;
}

.sidebar.collapsed .text {
    opacity: 0;
    pointer-events: none;
}

.main-content {
    flex: 1;
    padding: 20px;
    background: #FFF;
    transition: margin-left 0.3s ease;
}

/* 字体图标示例（需要实际引入字体图标库） */
.fa-home:before {
    content: "🏠";
}

.fa-user:before {
    content: "👤";
}

.fa-cog:before {
    content: "⚙️";
}

.fa-envelope:before {
    content: "✉️";
}
</style>