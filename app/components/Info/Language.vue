<script setup>
import { useStore } from "../../store/store";
const store = useStore();
</script>

<template>
  <div class="w-full mt-[20px] px-4">
    <p class="mb-[10px] text-bold">Sprachen</p>
    <div class="mb-2" v-for="(value, key) in store.language">
      <div class="flex justify-between">
        <div class="text-l">
          <span>{{ key }}:</span>
        </div>
        <div class="">{{ value }}%</div>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4">
        <div
          class="bg-amber-600/50 h-4 rounded-full"
          :style="`width: ${value}%`"
        ></div>
      </div>
    </div>
  </div>

  <div class="w-100 h-[1px] bg-stone-200/50 mt-5"></div>
</template>

<style scoped></style>
