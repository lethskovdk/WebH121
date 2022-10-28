<script setup>
import AccordionRender from './AccordionRender.vue'
import { ref } from 'vue'

const questions = ref(window.questions)
</script>

<template>
    <ul class="accordion">
            <AccordionRender v-for="(question, key) in questions" :key="key" :question="question"></AccordionRender>
    </ul>
</template>