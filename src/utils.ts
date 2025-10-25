import { ref } from 'vue'

export const isDesktop = ref(window.innerWidth >= 1024)

const updateWidth = () => {
  isDesktop.value = window.innerWidth >= 1024
}

window.addEventListener('resize', updateWidth)
