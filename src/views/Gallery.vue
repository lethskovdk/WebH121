<script setup>
import Hero from "./../components/hero/Hero.vue"
import { ref } from 'vue'

const imgs = ref(window.img)
</script>

<template>
    <Hero :img-url="imgs[13].url" heading="Galleri"></Hero>
</template>
