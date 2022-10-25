 <script setup>
import ProductList from './ProductList.vue'
import { ref } from 'vue'

const products = ref(window.products)
</script>

<template>
        <ProductList :products="products"></ProductList>
</template>
