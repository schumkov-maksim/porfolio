<script setup lang="ts">
import Aside from "~/components/Aside.vue";
</script>

<template>
  <div class="m-4 p-4 bg-white shadow-md aside">
    <slot />
  </div>
</template>

<style>
body {
  background-color: #ffb400;
}
</style>
