<script setup lang="ts">
import Aside from "~/components/Aside.vue";
import Portfolio from "~/components/Info/Portfolio.vue";
import Sidebar from "~/components/Sidebar.vue";

useSeoMeta({
  title: "Custom Page Title",
  description: "SEO description for this page.",
});
</script>

<template>
  <div class="flex md:flex-row flex-col my-8">
    <Aside />
    <div class="main w-full md:w-3/4 px-8">
      <Slider />
      <ServicesList />
      <Portfolio />
    </div>
    <Sidebar />
  </div>
</template>

<style>
body {
  background-color: #ffb400;
}

.main {
  background-color: #f1f0f6;
  @media screen and (max-width: 768px) {
    background-color: white;
  }
}
</style>
