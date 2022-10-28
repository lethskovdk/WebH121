<script setup>
import { onMounted, ref } from 'vue'

const showCart = ref(false)
const cart = ref([])
const toggleCart = () => (showCart.value = !showCart.value)

const fetchCart = () => {
  if (sessionStorage.getItem('cart')) {
    cart.value = JSON.parse(sessionStorage.getItem('cart'))
  }
}

onMounted(() => {
  fetchCart()

  window.addEventListener('cartUpdated', fetchCart)
})

const removeItem = (product) => {
  let cartArr = JSON.parse(sessionStorage.getItem('cart'))
  cartArr = cartArr.filter((item, key) => {
    console.log(item)
    return key !== product
  })

  sessionStorage.setItem('cart', JSON.stringify(cartArr))
  cart.value = cartArr
  const cartUpdate = new CustomEvent('cartUpdated')
  window.dispatchEvent(cartUpdate)
}
</script>

<template>
    <div @click="toggleCart" class="cartToggle">
        <button type="button" class="cartToggle__toggle" :class="cart.length > 0 ? 'fill-pink' : 'fill-lightGray'">
            <div v-if="cart.length" class="count">
                <p class="mb-0">{{cart.length}}</p>
            </div>

            <svg height="1em" viewBox="0 0 24 24" width="1em">
                <g><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M10,10c0,0.55-0.45,1-1,1s-1-0.45-1-1V8h2V10z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M16,10c0,0.55-0.45,1-1,1 s-1-0.45-1-1V8h2V10z"/></g>
            </svg>
        </button>
    </div>

    <div class="cartDropdown duration-300" :class="showCart ? 'block' : 'hidden'">
      <div container class="cartItems">
        <div v-if="cart.length">
          <ul class="cartItems__window">
            <li v-for="(item, key) in cart" :key="key">
                <div class="cartItem">
                  <div row>
                    <div class="cartItem__img">
                      <img :src="item.image" :alt="'Billede af '+cart.descripton">
                    </div>
                    <div class="cartItem__content">
                      <p class="mb-0">{{item.title}}</p>
                      <div row class="w-full">
                        <button @click="removeItem(key)" class=" mb-0 text-red-500 hover:text-black duration-300">Fjern</button>
                        <p class="ml-auto mb-0 text-right font-bold">{{item.price}} Kr.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </li>
          </ul>
          <div class="cartItems__total">
            <div row>
              <p class="mb-0 w-1/2">Ialt</p>
              <p class="mb-0 w-1/2 font-bold text-right">sum</p>
            </div>
          </div>
        </div>
        <div v-if="!cart.length">
          <h2 class="text-center p-9">indkøbskurv er tom</h2>
        </div>
      </div>
    </div>
</template>