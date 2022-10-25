<script setup>
import Cart from './Cart/MiniCart.vue'
import { ref } from 'vue'

const showMenu = ref(false)
const toggleNav = () => (showMenu.value = !showMenu.value)

</script>

<template>
  <header class="header">
    <div container>
      <nav class="header__nav">
        <!-- Logo -->
        <RouterLink to="/" class="header__logo">
          <img class="header__img" src="src/assets/logo/smuknu_logo.png" alt="Smuk Nu logo">
        </RouterLink>

        <!-- Cart -->
        <Cart></Cart>

        <!-- Mobile menu toggler -->
        <div @click="toggleNav" class="mobileToggle">
          <button type="button" class="mobileToggle__toggle">
            <svg viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>

        <!-- navigation -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="navigation">
          <li class="navigation__link">
            <RouterLink class="mr-7" to="/">Forside</RouterLink>
          </li>
          <li class="navigation__link">
            <RouterLink class="mr-7" to="/Products">Vores produkter</RouterLink>
          </li>
          <li class="navigation__link">
            <RouterLink class="mr-7" to="/QA">Spørg om sundhed</RouterLink>
          </li>
          <li class="navigation__link">
            <RouterLink class="" to="/Member">Bliv medlem</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
