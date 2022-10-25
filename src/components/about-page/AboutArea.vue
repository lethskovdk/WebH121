<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const firstImage = ref(null)
const secondImage = ref(null)
const txt = ref(null)

const textContent = ''

onMounted(() => {
  axios.get('https://gastropub.webexam-mcdm.dk/api/images/1').then((res) => {
    if (res.data && res.data[0]) {
      firstImage.value = res.data[0]
    }
  })

  axios.get('https://gastropub.webexam-mcdm.dk/api/images/3').then((res) => {
    if (res.data && res.data[0]) {
      secondImage.value = res.data[0]
    }
  })

  axios.get('https://gastropub.webexam-mcdm.dk/api/texts').then((res) => {
    if (res.data && res.data[0]) {
      txt.value = res.data[0]
    }
  })
})
</script>
<!-- :style="{'background-image': `url(${image.url})`}" -->
<template>
    <section class="bg-[#2e2925]">
        <div class="container mx-auto py-14">
            <div class="grid grid-cols-3 gap-4">
                <div v-if="txt != null" class="col-span-2 text-[#ccc4bc] text-lg">
                    <p>{{txt.description}}</p>
                </div>
                <div v-if="firstImage != null && secondImage != null">
                    <img :src="firstImage.url" alt="{{firstImage}}" class="pb-[50px]">
                    <img :src="secondImage.url" alt="{{firstImage}}">
                </div>
            </div>
        </div>
    </section>
</template>
