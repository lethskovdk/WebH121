<script setup>
import { ref, onMounted } from "vue"
import axios from 'axios'
import MenuItem from './MenuItem.vue'

const menu = ref({})
const loading = ref(true)
const catMap = ["Supper", "Salater", "Hovedretter"]

onMounted(() => {
  axios.get('https://gastropub.webexam-mcdm.dk/api/menus').then((res) => {
    const menus = res.data
    const output = {}
    let curIndex = 0

    catMap.forEach((item) => {
      output[item] = [];

      for (let i = 0; i < 4; i++) {
        output[item].push(menus[curIndex + i])
      }
      curIndex = curIndex + 4
    })

    menu.value = output
    loading.value = false
  })
})
</script>

<template>
  <section class="menu">
    <div class="container m-auto">
      <div class="menu__split">
        <div class="menu__img-area">
        </div>
        <article class="menu__area" v-if="!loading">
          <div class="py-8" v-for="(cat, key) in catMap" :key="key">
            <h2>{{cat}}</h2>
            <ul>
              <li v-for="(dish, key) in menu[cat]" :key="key">
                <MenuItem :name="dish.name" :ingredients="dish.ingredients" :price="dish.price"></MenuItem>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
  <div v-if="loading">Loading...</div>
</template>
