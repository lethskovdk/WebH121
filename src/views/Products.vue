<script setup>
import heroComponent from '../components/Hero/Hero.vue'
import becomeMember from '../components/Member/BecomeMember.vue'
import allProducts from '../components/Products/AllProducts.vue';
</script>

<template>
    <heroComponent img-url="src/assets/headers/products.jpg" background-color="bg-transBlack">
        <h1 class="text-white">Skønne<br/>produkter</h1>
        <p class="text-white">Herunder finder du alle vores produkter</p>
    </heroComponent>
    <section class="py-16">
        <div container>
            <h1 class="text-center">Alt er <span class="text-pink">Skønhed</span></h1>
            <allProducts class="pt-20"></allProducts>
        </div>
    </section>
    <becomeMember></becomeMember>
</template>
