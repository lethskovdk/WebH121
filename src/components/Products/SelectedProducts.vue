 <script setup>
import ProductList from './ProductList.vue'
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({ ids: Array })
const products = ref(window.products)
</script>

<template>
    <ProductList :products="products.filter((product) => {return ids.includes(product.id)})"></ProductList>
</template>
