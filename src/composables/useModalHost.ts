// src/composables/useModalHost.ts
import { markRaw, ref, shallowRef, type Component } from 'vue'

interface ModalOptions {
  component: Component
  props?: Record<string, unknown>
}

const modalState = shallowRef<ModalOptions | null>(null)

export function useModalHost() {
  function openModal(component: Component, props?: Record<string, unknown>) {
    modalState.value = {
      component: markRaw(component),
      props: props
     }
  }

  function closeModal() {
    modalState.value = null
  }

  return {
    modalState,
    openModal,
    closeModal
  }
}
