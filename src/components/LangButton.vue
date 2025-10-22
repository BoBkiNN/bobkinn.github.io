<script setup lang="ts">
import { Dropdown } from 'floating-vue'
import 'floating-vue/dist/style.css'

import { i18n } from '@/i18n'
import { useLangStore } from '@/stores/langStore'

const store = useLangStore()

// Extract available languages dynamically from i18n data
const availableLangs = i18n.languages
</script>

<template>
  <Dropdown class="size-min" theme="lang-dropdown" placement="bottom" :triggers="['hover']" :distance="6" :popperTriggers="['hover']">
    <!-- Button -->
    <span class="material-icons text-white p-1 rounded-md bg-[#373737] cursor-pointer shadow-2xl">
      translate
    </span>


    <!-- Dropdown Menu -->
    <template #popper>
      <div class="bg-[#1e1e1e] text-white rounded-md overflow-hidden min-w-[140px]">
        <div v-for="lang in availableLangs" :key="lang"
          class="px-3 py-2 hover:bg-[#373737] cursor-pointer flex justify-between gap-1" @click="store.lang = lang">
          <span>{{ lang }}</span>
          <span class="opacity-80">{{ i18n.getExact('lang.original_name', lang) }}</span>
        </div>
      </div>
    </template>
  </Dropdown>
</template>


