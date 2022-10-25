<script setup>
import { defineProps } from "vue"

const props = defineProps({name: String, ingredients: String, price: String})
</script>

<template>
  <div class="dish">
    <div class="dish__info">
      <h3>{{name}}</h3>
      <p>{{ingredients}}</p>
    </div>
    <p class="price">{{price}}</p>
  </div>
</template>
