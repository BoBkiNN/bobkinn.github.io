<script setup lang="ts">
import type { LinkConfig } from '@/config'

defineProps<{
  item: LinkConfig
}>()
</script>

<template>
  <a
    :href="item.url"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center transition-colors duration-200 hover:bg-gray-100 py-3"
  >
    <div class="flex items-center gap-3 px-3">
      <img
        v-for="(icon, i) in item.icons"
        :key="i"
        :src="icon"
        alt="icon"
        class="w-6 h-6 object-contain rounded-sm"
      />
      <span class="">{{ item.text }}</span>
    </div>
  </a>
</template>

<style scoped>
span {
  font-size: 2rem;
}
</style>
