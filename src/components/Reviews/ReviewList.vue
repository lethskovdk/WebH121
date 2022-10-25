<script setup>
import { defineProps } from 'vue'

const props = defineProps({ reviews: Array })
</script>

<template>
    <li v-for="(review, key) in reviews" :key="key" class="review">
        <div class="review__row">
            <div class="by-area">
                <img :src="review.image" :alt="'Billede til review fra '+review.name">
                <div class="by-area__by">
                    <p class="font-bold mb-0">{{review.name}}</p>
                    <p>{{review.byline}}</p>
                </div>
            </div>
            <div class="content">
                <p>{{review.description}}</p>
            </div>
        </div>
        <p class="block sm:hidden text-center">{{review.description}}</p>
        <div class="review__by-line">
            <p class="font-bold mb-0">{{review.name}}</p>
            <p>{{review.byline}}</p>
        </div>
    </li>
</template>