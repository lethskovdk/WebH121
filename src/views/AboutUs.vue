<script setup>
import AboutArea from '../components/about-page/AboutArea.vue'
import Hero from '../components/hero/Hero.vue'
import { ref } from 'vue'

const imgs = ref(window.img)

</script>

<template>
    <Hero :img-url="imgs[0].url" heading="Om os"></Hero>
    <AboutArea></AboutArea>
</template>