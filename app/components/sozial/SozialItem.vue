<script setup lang="ts">
const props = defineProps<{
  name: string;
  url: string;
}>();
</script>

<template>
  <NuxtLink :to="props.url">
    <div
      class="rounded-full w-[30px] h-[30px] round flex items-center justify-center"
    >
      <Icon :name="props.name" size="20" />
    </div>
  </NuxtLink>
</template>

<style lasng="css" scoped>
.round {
  background: #ffb400;
}
</style>
