<template>
    <div class="container">
        <Sidebar />
        <main :class="['main-content']">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '../sidebar/Sidebar.vue';

const isCollapsed = ref(false);

</script>

<style scoped>
.container {
    display: flex;
    min-height: 100vh;
}

.main-content {
    flex: 1;
    padding: 20px;
    background: #fff;
    transition: margin-left 0.3s ease;
}
</style>