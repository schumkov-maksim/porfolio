<script setup lang="ts">
import Aside from "~/components/Aside.vue";
</script>

<template>
  <div class="m-4 bg-white shadow-md test">
    <div class="flex md:flex-row flex-col my-8">
      <Aside />
      <div class="main w-full md:w-3/4 px-8">
        <Slider />
        <slot />
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<style lang="css">
.test {
  border-radius: 25px;
}
</style>
