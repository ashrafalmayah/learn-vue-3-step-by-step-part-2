<script setup>
import { useCounterStore } from '@/stores/CounterStore'

let counter = useCounterStore()
</script>
<template>
  <div>
    <h1>This is a contact page</h1>
    <p>We are accessing counter across different pages ({{ counter.count }})</p>
  </div>
</template>
