<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import Modal from '@/components/Modal.vue'
import { useTeamStore } from '@/stores/TeamStore'
import { ref } from 'vue'

let team = useTeamStore()

let showModal = ref(false)

team.fill()

setTimeout(() => {
  team.grow(25)
}, 3000)
</script>

<template>
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

  <Modal @close="showModal = false" :show="showModal">
    <template #header>Add a Member</template>
    <form action="#" class="flex gap-4">
      <input type="text" placeholder="Email Address..." class="px-2 flex-1 ring-gray-400 rounded-sm ring-1" />
      <button>Add</button>
    </form>
  </Modal>
</template>
