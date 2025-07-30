<script setup lang="ts">
import { useStore } from "../store/store";
const store = useStore();

const containerRef = ref(null);
// const slides = ref(Array.from({ length: 10 }));
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
});
</script>

<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide
        v-for="(slide, idx) in store.sliders"
        :key="idx"
        class="slide"
      >
        <div class="w-full p-8">
          <div class="text-xxl">
            {{ slide.title }}

            <p class="text-xl">{{ slide.description }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 40vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.slide {
  background: white;
}
</style>
