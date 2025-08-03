<script setup>
import { useStore } from "../../store/store_beruf"; 
const {study} = useStore();

</script>

<template>  
<div class="flex md:flex-row flex-col" v-for="item in study" :key="item.id">
    <div class="w-full md:w-1/3  p-4">
        <div class="text-lg font-semibold text-amber-600">{{ item.description }}</div>
        <div class="text-xxl font-semibold">{{ item.date }}</div> 
    </div>
    <div class="p-4 w-full md:w-2/3"> 
        <div class="text-lg font-semibold">{{ item.stelle }}</div>
        <div class="text-xxl">{{item.institution  }}</div>
    </div>
</div>
    </template>