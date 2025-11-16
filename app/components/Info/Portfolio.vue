<script setup>
import { useStore } from "../../store/store";
const store = useStore();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-5">
    <div v-for="item in store.portfolio" :key="item.id" class="relative item">
      <NuxtLink :to="item.url" target="_blank">
        <h3 class="text-lg font-bold">{{ item.title }}</h3>
        <NuxtImg :src="item.image" />
      </NuxtLink>
      <div class="overlay bg-amber-600/50 w-full px-4 py-2">
        <span class="font-bold">{{ item.description }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  position: relative;
}
.overlay {
  opacity: 0;
  transition: opacity 0.6s ease;
  position: absolute;
  bottom: 0;
  border-radius: inherit;
  color: white;
}
.item:hover .overlay {
  opacity: 1;
}
</style>
