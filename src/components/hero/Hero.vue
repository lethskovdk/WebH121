<script setup>
import { defineProps } from 'vue'

const props = defineProps({imgUrl: String, backgroundColor: String})
</script>

<template>
    <section class="hero" :style="{'background-image': `url(${imgUrl})`}">
        <div container class="hero__box" :class="backgroundColor">
            <slot></slot>
        </div>
    </section>
</template>
