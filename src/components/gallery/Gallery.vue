<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const images = ref([])
const filter = ref('')

onMounted(() => {
  axios.get('https://gastropub.webexam-mcdm.dk/api/images').then((res) => {
    images.value = res.data
  })
})
</script>

<template>
    <h1>GALLERI ER HER!</h1>
    <input type="text" v-model="filter"/>
    <img v-for="image, key in images.filter((img) => {return img.name.includes(filter)})" :src="image.url" :alt="image.name">
</template>
