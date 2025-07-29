<script setup lang="ts">
import Aside from "~/components/Aside.vue";
import Sidebar from "~/components/Sidebar.vue";

useSeoMeta({
  title: "Custom Page Title",
  description: "SEO description for this page.",
});
</script>

<template>
  <div class="flex md:flex-row flex-col my-8">
    <Aside />
    <div class="main w-full"></div>
    <Sidebar />
  </div>
</template>

<style>
.main {
  background-color: #f1f0f6;
}
</style>
