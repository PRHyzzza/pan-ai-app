<script setup lang="ts">
// import { ref, watch } from "vue";
import message from "./components/message/message";
import container from "./components/container/Container.vue";
// import { invoke } from "@tauri-apps/api/core";
// import { generate } from "./api/ollama";
// import useStreamTxt from "./hooks/useStreamTxt";

// const greetMsg = ref();
// const name = ref("");

// const { getText, result } = useStreamTxt()

// const greet = async () => {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   const response = await generate(name.value)
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   getText(response)
// }

// watch(() => result.value, () => {
//   greetMsg.value = result.value
// })
</script>

<template>
  <container />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
