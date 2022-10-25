<script setup>
import { defineProps } from 'vue'

const props = defineProps({heading: String, imgUrl: String})

</script>
<!-- :style="{'background-image': `url(${aboImg.url})`}" -->
<template>
    <section class="hero" :style="{'background-image': `url(${imgUrl})`}">
        <div class="hero__overlay"></div>
        <h1 class="z-10">{{heading}}</h1>
    </section>
</template>

<style>
</style>
