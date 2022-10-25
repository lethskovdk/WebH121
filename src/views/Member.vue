<script setup>
import heroComponent from '../components/Hero/Hero.vue'
import signUp from '../components/Member/SignUp.vue'

</script>

<template>
    <heroComponent img-url="src/assets/headers/subscribers.jpg" background-color="bg-lightPink">
        <h1 class="text-pink">Bliv<br/>Medlem</h1>
        <p class="text-black">Opret dig som medlem og få flere fordele og nyheder I det øjeblik vi har dem.</p>
        <p class="text-black">Send gerne ris eller ros med når du melder dig ind, vi er altid parate til dialog.</p>
    </heroComponent>
    <signUp></signUp>
</template>