<script setup>
defineProps({ modelValue: String })
let emit = defineEmits(['update:modelValue'])

function onTabPress(e) {
  let textarea = e.target

  let start = textarea.selectionStart
  let end = textarea.selectionEnd

  textarea.value = textarea.value.substr(0, start) + '\t' + textarea.value.substr(end)

  textarea.selectionStart = textarea.selectionEnd = start + 1
}
</script>

<template>
  <textarea
    v-text="modelValue"
    @keyup="emit('update:modelValue', $event.target.value)"
    @keydown.tab.prevent="onTabPress"
  />
</template>
