<script setup>
import AccordionRender from './AccordionRender.vue'
import { ref } from 'vue'

const questions = ref(window.questions)
</script>

<template>
    <AccordionRender :questions="questions"></AccordionRender>
</template>