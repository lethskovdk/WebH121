<script setup>
import ReviewList from './ReviewList.vue'
import { ref } from 'vue'

const reviews = ref(window.reviews)
</script>

<template>
    <ul class="reviews">
        <ReviewList :reviews="reviews"></ReviewList>
    </ul>
</template>
