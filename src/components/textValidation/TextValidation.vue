<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const texts = ref([])
const filter = ref('')

onMounted(() => {
  axios.get('https://gastropub.webexam-mcdm.dk/api/texts').then((res) => {
    texts.value = res.data
  })
})

</script>

<template>
    <h1>Alle vores tekster findes her</h1>
    <input type="text" v-model="filter"/>

    <p v-for="text, key in texts.filter((txt) => {return txt.description.includes(filter)})" class="p-4 bg-gray-300 mb-5" >
        {{text.description}}
    </p>
</template>
