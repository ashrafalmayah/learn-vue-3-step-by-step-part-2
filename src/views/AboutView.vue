<script setup>
import { useFlash } from '@/composables/useFlash'

let { flash } = useFlash()
</script>
<template>
  <button @click="flash('About', 'This is the about page', 'info')">About</button>
</template>
