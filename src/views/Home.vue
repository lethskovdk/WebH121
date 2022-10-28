<script setup>
import heroComponent from '../components/Hero/Hero.vue'
import becomeMember from '../components/Member/BecomeMember.vue'
import selectedProducts from '../components/Products/SelectedProducts.vue'
import ShowReviews from '../components/Reviews/ShowReviews.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <Header></Header>
    <main>
        <heroComponent img-url="../assets/front.jpg" background-color="bg-lightPink">
            <h1 class="text-black">Skønhed<br/>for alle</h1>
            <p class="text-black">Alt hvad du behøver.. <br/>SMUK NU</p>
            <a href="#products">
                <button class="btn-pink w-full">Se udvalgte produkter</button>
            </a>
        </heroComponent>
        <section class="py-16">
            <div container>
                <h1 class="text-center">udvagt <span class="text-pink">skønhed</span></h1>
                <selectedProducts class="pt-20 " :ids="[1213213211, 4335542819, 2332233444, 4566543883]"></selectedProducts>
            </div>
        </section>

        <section class="py-16">
            <div class="mx-auto w-full md:w-2/3 lg:w-3/4 px-3 sm:px-7">
                <h1 class="text-center"><span class="text-pink">Skønheder</span> Udtaler</h1>
                <ShowReviews class="pt-20"></ShowReviews>
            </div>
        </section>
        <becomeMember></becomeMember>
    </main>
    <Footer></Footer>
</template>
