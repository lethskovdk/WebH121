<script setup>
import { ref } from 'vue'
const texts = ref(window.txt)
</script>

<template>
    <footer class="footer">
        <div class="container mx-auto">
            <div class="footer__row">
                <div class="footer__col">
                    <h3>Information</h3>
                    <p>En gastropub er en hybrid pub, bar og restaurant, der er kendt for servering af alkoholiske drikkevarer og mad.</p>
                </div>
                <div class="footer__col">
                    <h3>Kontakt</h3>
                    <p>{{texts[9].description}}</p>
                    <p>{{texts[10].description}}</p>
                </div>
                <div class="footer__col">
                    <h3>Social Media</h3>
                    <div class="flex justify-between">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
