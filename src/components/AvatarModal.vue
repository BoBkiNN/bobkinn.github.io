<template>
  <!-- затемнение -->
  <transition name="fade">
    <div v-if="visible"
      class="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
      @click.self="$emit('close')"
    >
      <!-- контент -->
      <transition name="zoom">
        <div v-if="visible" class="flex flex-col items-center">
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
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
  src: string;
  downloadName: string;
}>();

const visible = ref(false);

onMounted(() => {
  // небольшой delay чтобы transition корректно отработал
  requestAnimationFrame(() => {
    visible.value = true;
  });
});

const downloadImage = () => {
  const link = document.createElement('a');
  link.href = props.src;
  link.download = props.downloadName;
  link.click();
};
</script>

<style scoped>
/* затемнение */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

/* анимация появления картинки */
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 1.25s ease, opacity 0.25s ease;
}
</style>
