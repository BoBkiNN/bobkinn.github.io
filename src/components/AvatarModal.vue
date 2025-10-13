<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
    @click.self="$emit('close')"
  >
    <div class="flex flex-col items-center">
      <img
        :src="props.src"
        alt="Avatar full view"
        class="max-h-[80vh] max-w-[90vw] object-contain"
      />

      <button
        @click="downloadImage"
        class="mt-4 flex items-center gap-2 text-white text-lg hover:opacity-80 cursor-pointer"
      >
        <span class="material-icons">download</span>
        Скачать
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
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
