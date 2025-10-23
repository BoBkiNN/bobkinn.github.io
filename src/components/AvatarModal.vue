<template>
  <div class="text-white rounded-xl p-4 shadow-xl relative">
    <!-- reactive image -->
    <img :src="store.current" alt="Avatar full view" class="max-h-[80vh] max-w-[90vw] object-contain select-none" />

    <button @click="downloadImage"
      class="mt-4 flex items-center gap-2 text-white text-lg hover:opacity-80 cursor-pointer">
      <span class="material-icons">download</span>
      {{ i18n.use('download') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { i18n } from '@/i18n';
import { useAvatarStore } from '@/stores/avatarStore';

const store = useAvatarStore();

// handle keyboard navigation
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') store.prev();
  else if (e.key === 'ArrowRight') store.next();
}

onMounted(() => window.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown));

// download handler
function downloadImage() {
  const link = document.createElement('a');
  link.href = store.current;
  link.download = store.name;
  link.click();
}
</script>
