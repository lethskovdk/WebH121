<script setup>
import MobileNavigation from './MobileNavigation.vue';
import { ref } from 'vue'

const showMenu = ref(false)
const toggleNav = () => (showMenu.value = !showMenu.value)
</script>

<template>
    <div @click="toggleNav" class="mobileToggle">
        <button type="button" class="mobileToggle__toggle">
            <svg viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
            </svg>
        </button>
    </div>

    <MobileNavigation :class="showMenu ? 'open' : 'closed'" ></MobileNavigation>
</template>