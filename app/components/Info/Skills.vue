<script setup>
import { useStore } from "../../store/store";
const store = useStore();
</script>

<template>
  <p class="text-start">Skills</p>
  <div class="flex items-center justify-center flex-wrap gap-4 mt-4 pb-6 px-4">
    <Icon v-for="item in store.skills" :name="item.url" size="35" />
  </div>
</template>
