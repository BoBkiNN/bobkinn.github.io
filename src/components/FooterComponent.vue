<script setup lang="ts">
import { gitHash } from '@/stores/gitHash'
</script>

<template>
  <div class="flex justify-center">
    <span>{{ gitHash.slice(0, 7) }}</span>
  </div>
</template>
