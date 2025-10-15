<script setup lang="ts">
import { useModalHost } from '@/composables/useModalHost'

const { modalState, closeModal } = useModalHost()
</script>

<template>
  <template>
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="modalState" class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" @click="closeModal" />
      </Transition>

      <Transition name="scale-fade">
        <div v-if="modalState" class="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div class="inline-block pointer-events-auto" style="transform-origin: center;">
            <component :is="modalState.component" v-bind="modalState.props" @close="closeModal" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>

</template>

<style scoped>
/* Анимация затемнения */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Анимация масштаба модалки */
.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: all 0.25s ease;
}

.scale-fade-enter-from,
.scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.scale-fade-enter-to,
.scale-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
