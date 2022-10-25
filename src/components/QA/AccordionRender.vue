<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({ questions: Array })
</script>

<template>
    <ul class="accordion">
        <li v-for="(question, key) in questions" :key="key">
            <details>
                <summary>{{question.question}}</summary>
                {{question.answer}}
            </details>
        </li>
    </ul>
</template>