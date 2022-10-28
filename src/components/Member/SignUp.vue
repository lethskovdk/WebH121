<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref(null)
const doneMessage = ref(null)
const loading = ref(false)
let name = ''

const handleSubmit = (e) => {
  name = e.name
  loading.value = true
  e.preventDefault()
  const data = new FormData(form.value)
  const output = {}
  for (const pair of data.entries()) {
    output[pair[0]] = pair[1]
  }

  axios.post('https://smuknu.webmcdm.dk/subscribe', output).then(res => {
    console.log(output)
    if (res.status === 201) doneMessage.value = res.data
    else console.error(res.message)

    loading.value = false
  })
}
</script>

<template>
    <section class="signUp">
        <div container v-if="!doneMessage">
            <form ref="form" v-on:submit="handleSubmit">
                <label>Navn</label><br/>
                <input type="text" name="name" placeholder="Navn *" required><br><br>
                <label>Email</label><br/>
                <input type="email" name="email" placeholder="Email *" required pattern="^([\w-\]+\.+[\w-\]s)+@([\w-]+\.)+[\w-]{2,4}$"><br><br>
                <label>Ris og/eller ros</label><br/>
                <textarea name="message" placeholder="Besked *" required /><br><br>
                <input type="submit" value="Submit" class="btn-pink w-full">
            </form>
        </div>
        <div container v-if="doneMessage">
            <div class="thankMessage">
                <h1>TAK!</h1>
                <h1 class="bg-pink">{{name}}</h1>
                <img src="../../assets/subscribers.jpg" alt="Takke billede">
                <p class="font-bold">Vi er enormt glade for at få dig<br/>som meldem</p>
                <p>Kig i din inbox vi har sendt<br/>en lille velkomenst gave!</p>
            </div>
        </div>
    </section>
</template>
