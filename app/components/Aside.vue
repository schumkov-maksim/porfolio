<script setup lang="ts">
import Info from "./Info/Info.vue";
import Language from "./Info/Language.vue";
import SozialList from "./sozial/SozialList.vue";
</script>

<template>
  <div class="aside pt-[50px] flex flex-col items-center w-25">
    <Avatar />
    <SozialList />
    <Info />
    <Language />
  </div>
</template>

<style>
.aside {
  border-radius: 25px 0 0 25px;
  background-color: white;

  height: 100vh;
}
</style>
