<script setup>
import { defineProps } from 'vue'

const props = defineProps({ products: Array })

const buyHandler = (product) => {
  const cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : []

  //Spreadoperator 
  sessionStorage.setItem('cart', JSON.stringify([product, ...cart]))

  const cartUpdate = new CustomEvent('cartUpdated')
  window.dispatchEvent(cartUpdate)
}
</script>

<template>
    <ul class="product-list">
        <li v-for="(product, key) in products" :key="key">
            <div class="product-card">
                <div class="product-card__img-area">
                    <img :src="product.image" :alt="'produkt billede af '+product.title">
                    <div v-if="product.discountInPercent" class="discout">
                        <p class="discout__heading">SPAR</p>
                        <p class="discout__procentage">{{product.discountInPercent}}%</p>
                    </div>
                </div>
                <div class="product-card__content">
                    <h3>{{product.title}}</h3>
                    <div row class="justify-between mt-auto">
                        <p class="font-bold mb-1">{{product.price}} kr.</p>
                        <button class="btn-dark" v-on:click="() => {buyHandler(product)}">Køb</button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>