<script setup lang="ts">
import SozialItem from "./SozialItem.vue";

const icons = [
  {
    name: "bxl:facebook",

    url: "https://www.facebook.com/",
  },
  {
    name: "bxl:instagram",

    url: "https://www.facebook.com/",
  },
  {
    name: "bxl:twitter",

    url: "https://www.facebook.com/",
  },
  {
    name: "bxl:tiktok",

    url: "https://www.facebook.com/",
  },
];
</script>

<template>
  <div class="">
    <div class="px-[40px] mt-8 flex gap-4">
      <SozialItem v-for="item in icons" :name="item.name" :url="item.url" />
    </div>
    <div class="w-100 h-[1px] bg-stone-200/50 mt-5"></div>
  </div>
</template>
