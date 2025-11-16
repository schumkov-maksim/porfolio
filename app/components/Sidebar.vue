<script setup lang="ts">
import MenuListe from "./MenuListe.vue";
</script>

<template>
  <div class="sidebar md:block hidden px-5 h-full">
    <MenuListe />
  </div>
</template>

<style>
.sidebar {
  border-radius: 0px 25px 25px 0px;
  background-color: white;
  width: 10%;
  height: 100vh;
}
</style>
