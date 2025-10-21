<script setup lang="ts">
import config from '@/config';
import { gitHash } from '@/stores/gitHash'
import { computed } from 'vue';

const commitLink = computed(() => {
  return new URL("commit/"+gitHash.value, config.thisRepositoryLink).toString()
})

</script>

<template>
  <div class="flex justify-end">
    <a :href="commitLink" class="a-secondary" target="_blank">Commit: {{ gitHash.slice(0, 7) }}</a>
  </div>
</template>

<style scoped>
a {
  color: #ffffff8b;
}
</style>

