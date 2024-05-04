<script setup>
import TabbableTextarea from '@/components/tabbableTextarea.vue'
import { ref } from 'vue'

let textareaValue = ref('Hi there')
</script>

<template>
  <main> 
    <TabbableTextarea v-model="textareaValue" style="width: 100%; height: 300px" />
  </main>
</template>
