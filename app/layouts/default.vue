<script setup lang="ts">
import Aside from "~/components/Aside.vue";
</script>

<template>
  <div class="m-4 bg-white shadow-md test">
    Deault Layout
    <slot />
  </div>
</template>

<style lang="css">
.test {
  border-radius: 25px;
}
</style>
