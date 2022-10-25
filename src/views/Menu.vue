<script setup>
    import Hero from '../components/hero/Hero.vue'
    import MenuArea from '../components/menu/MenuArea.vue'
    import { ref } from 'vue'

    const imgs = ref(window.img)
</script>

<template>
    <Hero :img-url="imgs[9].url" heading="Menu"></Hero>
    <MenuArea></MenuArea>
</template>
