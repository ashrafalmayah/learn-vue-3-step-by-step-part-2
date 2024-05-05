<script setup>
import { useCounterStore } from '@/stores/CounterStore'
let counter = useCounterStore()
</script>
<template>
  <div class="contact">
    <h1>Count is {{ counter.count }}</h1>
    <button class="button" :disabled="! counter.remaining" @click="counter.increament">Increament ( {{ counter.remaining }} remaining)</button>
  </div>
</template>

<style>
.button {
  background: gray;
  color: white;
  border-radius: 5px;
  padding: 0.5em 1em;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
}
</style>
