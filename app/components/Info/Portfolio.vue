<script setup>
import { useStore } from "../../store/store";
const store = useStore();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="item in store.portfolio" class="bg-amber-400" :key="item.id">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
