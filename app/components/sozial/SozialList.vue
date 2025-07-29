<script setup lang="ts">
import SozialItem from "./SozialItem.vue";

import { useStore } from "../../store/store";
const store = useStore();
</script>

<template>
  <div class="">
    <div class="px-[40px] mt-8 flex gap-4">
      <SozialItem
        v-for="item in store.list"
        :name="item.name"
        :url="item.url"
      />
    </div>
    <div class="w-100 h-[1px] bg-stone-200/50 mt-5"></div>
  </div>
</template>
