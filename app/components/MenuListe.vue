<script setup>
import { useStore } from "../store/store";
const store = useStore();
</script>

<template>
  <div class="grid gap-4 menu justify-center items-center mt-4">
    <div
      v-for="item in store.menu"
      class="menu-item bg-amber-400 w-[45px] h-[45px] rounded-full flex items-center justify-center"
      :key="item.id"
    >
      <NuxtLink :to="item.url">
        <Icon :name="item.img" size="30" />
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.menu-item {
  background-color: #f1f0f6;
  transition: all 0.5s ease;
}
.menu-item:hover {
  background-color: #ffb400;
}
</style>
