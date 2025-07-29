<script setup lang="ts">
import SozialItem from "./sozial/SozialItem.vue";
</script>

<template>
  <div class="aside pt-[50px] flex flex-col items-center">
    <Avatar />
    <SozialItem />
  </div>
</template>

<style>
.aside {
  border-radius: 25px 0 0 25px;
  background-color: white;
  width: 25%;
  height: 100vh;
}
</style>
