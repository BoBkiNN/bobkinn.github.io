<script setup lang="ts">
import { useModalHost } from '@/composables/useModalHost'

const { modalState, closeModal } = useModalHost()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modalState"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      @click.self="closeModal"
    >
      <component
        :is="modalState.component"
        v-bind="modalState.props"
        @close="closeModal"
      />
    </div>
  </Teleport>
</template>

<style scoped>
/* можно немного добавить плавности */
</style>
