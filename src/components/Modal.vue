<script setup>
import { defineProps } from 'vue'
import ModalForm from './Forms/ModalForm.vue'

const props = defineProps({show: Boolean})
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal__overlay">
            <div class="modal__wrapper">
                <div class="modal__content">
                    <button class="float-right text-white" @click="$emit('close')">X</button>
                    <ModalForm></ModalForm>
                </div>
            </div>
        </div>
    </Transition>
</template>