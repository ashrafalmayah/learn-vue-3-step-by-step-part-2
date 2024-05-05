<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <Transition
    enter-from-class="scale-125 opacity-0"
    enter-to-class="scale-100 opacity-100"
    enter-active-class="transision duration-300"
    leave-active-class="transision duration-100"
    leave-from-class="scale-100 opacity-100"
    leave-to-class="scale-125 opacity-0"
  >
    <div
      v-if="show"
      @click.self="$emit('close')"
      class="fixed inset-0 bg-black bg-opacity-60 text-black grid place-items-center"
    >
      <div v-show="show" class="bg-white rounded-xl py-4 p-8 max-w-96 w-[80vw]">
        <header v-if="$slots.header" class="font-bold text-xl mb-4">
          <slot name="header" />
        </header>
        <div>
          <slot>Default Content</slot>
        </div>
        <footer class="mt-4 pt-2 border-t-2 flex justify-end">
          <slot name="footer">
            <button
              @click="$emit('close')"
              class="bg-gray-600 text-sm hover:bg-gray-700 text-white rounded-2xl py-1 px-6"
            >
              Close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>
