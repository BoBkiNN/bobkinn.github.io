<template>
  <div class="relative inline-block rounded-full overflow-hidden cursor-pointer select-none">
    <img :src="currentAvatar" alt="Avatar"
      class="w-full h-full max-w-96 max-h-96 lg:w-96 lg:h-96 object-cover transition-transform duration-200 ease-in-out hover:scale-101"
      @click="onClick" />

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm font-semibold
       text-white/50 bg-black/50 px-2 my-0.5 rounded-md hover:text-white transition duration-200 cursor-default">
      {{ currentIndex + 1 }}/{{ total }}
    </div>

    <div class="absolute top-0 left-0 w-3/12 h-full" @click.stop="store.prev"></div>
    <div class="absolute top-0 right-0 w-3/12 h-full" @click.stop="store.next"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AvatarModal from '@/components/AvatarModal.vue';
import { useModalHost } from '@/composables/useModalHost';
import { useAvatarStore } from '@/stores/avatarStore';

const { openModal } = useModalHost();
const store = useAvatarStore();

function showAvatar() {
  openModal(AvatarModal);
}

function onClick(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  const x = e.clientX - rect.left;
  const zoneWidth = rect.width / 3;

  if (x < zoneWidth) store.prev();
  else if (x > rect.width - zoneWidth) store.next();
  else showAvatar();
}

const currentAvatar = computed(() => store.current);
const currentIndex = computed(() => store.index);
const total = computed(() => store.total);
</script>


<style scoped>
/* Чтобы клики по зонам не мешали hover-анимации */
div[role="click-zone"] {
  background: transparent;
}
</style>
