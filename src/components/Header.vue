<script setup>
import Cart from './Cart/MiniCart.vue'
import MainNavigation from './Navigation/MainNavigation.vue'
import MobileToggler from './Navigation/MobileToggler.vue'
</script>

<template>
  <header class="header">
    <div container>
      <nav class="header__nav">
        <!-- Logo -->
        <RouterLink to="/" class="header__logo">
          <img class="header__img" src="../assets/logo/smuknu_logo.png" alt="Smuk Nu logo">
        </RouterLink>

        <!-- Cart -->
        <Cart></Cart>

        <!-- Mobile menu toggler -->
        <MobileToggler></MobileToggler>

        <!-- navigation -->
        <MainNavigation></MainNavigation>
      </nav>
    </div>
  </header>
</template>
