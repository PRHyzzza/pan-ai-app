<script setup lang="ts">
type sidebar = {
    menuItems?: { icon: string, text: string }[]
}

withDefaults(defineProps<sidebar>(), {})

const isCollapsed = defineModel()

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
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
</template>

<style scoped>
.sidebar {
    width: 200px;
    /* 浅肤色  */
    background: #fffef9;
    transition: all 0.3s ease;
    position: relative;
    /* 右边的阴影 */
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
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
</style>
