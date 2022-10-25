<script setup>
import heroComponent from '../components/Hero/Hero.vue'
import BecomeMember from '../components/Member/BecomeMember.vue'
import AccordionList from '../components/QA/AccordionList.vue';
</script>

<template>
    <heroComponent img-url="src/assets/headers/subscribers.jpg" background-color="bg-pink">
        <h1 class="text-white">Spørg om<br/>sundhed</h1>
        <p class="text-white">Herunder har vi samlet spørgsmål og svar om sundhed.</p>
        <p class="text-white mb-0">Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion.</p>
    </heroComponent>
    <section class="py-16">
        <div container>
            <AccordionList></AccordionList>
        </div>
    </section>
    <BecomeMember></BecomeMember>
</template>
