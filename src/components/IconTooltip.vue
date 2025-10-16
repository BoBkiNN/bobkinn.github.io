<script setup lang="ts">
import 'floating-vue/dist/style.css'
import { vTooltip } from 'floating-vue'

defineProps<{
  tooltip: string
  icon: string
}>()
</script>

<template>
  <span v-tooltip="{
    content: tooltip,
    theme: 'tooltip',
    triggers: ['hover', 'focus'],
    placement: 'right-start',
    html: true,
    popperTriggers: ['hover'],
    delay: { show: 100, hide: 100 },
    distance: 6
  }" class="material-icons text-gray-200 hover:text-gray-400 p-[1px] rounded-md cursor-pointer select-none">
    {{ icon }}
  </span>
</template>

<style scoped>
/* Optional: small visual tweak for better UX */
.material-icons {
  transition: color 0.15s ease;
}

span {
  background-color: rgb(40, 40, 40);
}
</style>


