<script setup>
import Hero from '../components/hero/Hero.vue'
import ContactArea from '../components/contact/ContactArea.vue'
import { ref } from 'vue'

const imgs = ref(window.img)
</script>

<template>
    <Hero :img-url="imgs[1].url" heading="Kontakt os"></Hero>
    <ContactArea></ContactArea>
</template>
