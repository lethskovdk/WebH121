<script>
import { RouterLink } from 'vue-router'
import Modal from './Modal.vue'
import { defineProps } from 'vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<template>
    <header class="header">
        <nav class="header__nav">
            <div class="container m-auto flex items-center justify-between">
                <div class="header__logo-area">

                </div>

                <header class="header__main-menu-area">
                  <RouterLink class="mr-7" to="/">Home</RouterLink>
                  <div class="dropdown">
                    <button class="mr-7 dropbtn">om os</button>
                    <div class="dropdown-content">
                      <RouterLink to="/AboutUs">Om os</RouterLink>
                      <RouterLink to="/OurTeam">Vores Team</RouterLink>
                    </div>
                  </div>
                  <RouterLink class="mr-7" to="/Menu">Menu</RouterLink>
                  <RouterLink class="mr-7" to="/Gallery">Gallery</RouterLink>
                  <RouterLink class="mr-7" to="/News">Nyheder</RouterLink>
                  <RouterLink class="mr-7" to="/Contact">Kontakt</RouterLink>
                  <button id="show-modal" class="btn" @click="showModal = true">Book bord</button>
                </header>
            </div>
        </nav>
    </header>

    <modal :show="showModal" @close="showModal = false"/>
</template>
