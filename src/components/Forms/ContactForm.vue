<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref(null)
const doneMessage = ref(null)
const loading = ref(false)


const handleSubmit = (e) => {
  loading.value = true
  e.preventDefault()
  const data = new FormData(form.value)
  const output = {}
  for (const pair of data.entries()) {
    output[pair[0]] = pair[1]
  }

  axios.post('https://gastropub.webexam-mcdm.dk/api/contacts', output).then(res => {
    console.log(output)
    if (res.status == 201) doneMessage.value = res.data
    else console.error(res.message)

    loading.value = false
  })
}
</script>

<template>
  <form v-if="!doneMessage" ref="form" v-on:submit="handleSubmit">
    <input type="text" name="name" placeholder="Navn *" required><br><br>
    <input type="tel" name="phone" placeholder="Telefon *" required pattern="^\d+$"><br><br>
    <textarea name="message" placeholder="Besked *" required /><br><br>
    <input type="submit" value="Submit">
  </form>
  <div v-if="loading">Loading...</div>
  <div v-if="doneMessage">{{doneMessage.message}}</div>
</template>
