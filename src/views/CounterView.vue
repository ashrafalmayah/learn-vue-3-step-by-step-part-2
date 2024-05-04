<script setup>
import { counter } from '@/stores/CounterStore'
</script>
<template>
  <div class="contact">
    <h1>Count is {{ counter.count }}</h1>
    <button class="button" @click="counter.increament">Increament</button>
  </div>
</template>

<style>
.button{
  background: gray;
  color: white;
  border-radius: 5px;
  padding: .5em 1em;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
}
</style>
