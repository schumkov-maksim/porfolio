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
  <ServicesList />
  <Portfolio />
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
