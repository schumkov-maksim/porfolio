<script setup>
import { useStore } from "../../store/store";
const store = useStore();
</script>

<template>
  <div class="w-full mt-[20px] px-4">
    <div class="flex justify-between mb-2" v-for="(value, key) in store.info">
      <div class="text-l">
        <span class="font-semibold capitalize">{{ key }}:</span>
      </div>
      <div class="font-medium">{{ value }}</div>
    </div>
  </div>
  <div class="w-100 h-[1px] bg-stone-200/50 mt-5"></div>
</template>

<style scoped></style>
