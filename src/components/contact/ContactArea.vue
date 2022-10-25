<script setup>
import axios from 'axios'
import ContactForm from '../Forms/ContactForm.vue'
import { ref } from 'vue'

const texts = ref(window.txt)

</script>

<template>
  <section class="bg-[#2E2925]">
    <div class="container mx-auto grid grid-cols-2 py-16">
      <div class="contactarea">
        <div class="w-2/3 text-white">
          <h3>Kære kunde</h3>
          <p>Du er altid velkommen til at kontakte os For spørgsmål angående Deklarations indhold, allegener, eller økologiske forhold. Andre spørgsmål til Gastropub er også velkomne her.</p>
        </div>
        <ContactForm></ContactForm>
      </div>
      <div class="infoarea text-white">
        <div class="item">
          <h3>{{texts[9].description}}</h3>
        </div>
        <div class="item">
          <h3>{{texts[10].description}}</h3>
        </div>
        <div class="item">
          <h3>{{texts[11].description}}</h3>
          <p>Frokost servering - 12:00 - 15:00</p>
        </div>
      </div>
    </div>
  </section>
</template>
