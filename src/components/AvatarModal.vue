<template>
  <div class=" text-white rounded-xl p-4 shadow-xl relative">
    <img :src="props.src" alt="Avatar full view" class="max-h-[80vh] max-w-[90vw] object-contain" />

    <button @click="downloadImage"
      class="mt-4 flex items-center gap-2 text-white text-lg hover:opacity-80 cursor-pointer">
      <span class="material-icons">download</span>
      {{ i18n.use("download") }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { i18n } from '@/i18n';

const props = defineProps<{
  src: string;
  downloadName: string;
}>();

const downloadImage = () => {
  const link = document.createElement('a');
  link.href = props.src;
  link.download = props.downloadName;
  link.click();
};
</script>

