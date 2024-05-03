<script setup>
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food', 'pizza')
let age = useStorage('age')
let obj = useStorage('obj', { one: 'thing' })

setTimeout(() => {
  obj.value.one = 'another thing'
}, 5000);
</script>

<template>
  <main>
    <p>What is you favorate food? <input type="text" v-model="food" /></p>
    <p>How old are you? <input type="text" v-model="age" /></p>
  </main>
</template>
