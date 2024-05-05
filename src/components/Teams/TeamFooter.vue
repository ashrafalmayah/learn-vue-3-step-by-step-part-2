<script setup>
defineProps({
  team: Object
})
</script>
<template>
  <footer class="mt-12 bg-gray-800 py-4 text-center">
    <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
  </footer>
</template>
