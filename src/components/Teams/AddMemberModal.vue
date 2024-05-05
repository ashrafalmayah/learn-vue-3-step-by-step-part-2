<script setup>
import { useTeamStore } from '@/stores/TeamStore'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

let showModal = ref(false)
let team = useTeamStore()
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="!team.spotsRemaining"
    @click="showModal = true"
  >
    Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>

  <Teleport to="body">
    <Modal @close="showModal = false" :show="showModal">
      <template #header>Add a Member</template>
      <form action="#" class="flex gap-4">
        <input
          type="text"
          placeholder="Email Address..."
          class="px-2 flex-1 ring-gray-400 rounded-sm ring-1"
        />
        <button>Add</button>
      </form>
    </Modal>
  </Teleport>
</template>
