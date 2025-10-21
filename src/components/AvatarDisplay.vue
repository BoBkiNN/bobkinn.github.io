<template>
  <div>
    <img
      :src="avatarUrl"
      alt="Avatar"
      class="max-w-96 max-h-96 rounded-full object-cover cursor-pointer shadow-md hover:scale-101 transition-transform"
      @click="showAvatar()"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import config from '@/config';
import AvatarModal from '@/components/AvatarModal.vue';
import { useModalHost } from '@/composables/useModalHost';

const { openModal } = useModalHost()

function showAvatar() {
  openModal(AvatarModal, {
    src: avatarUrl.value,
    downloadName: avatarName
  })
}

const avatarName = config.mainAvatar;

// импортируем все картинки из папки avatars (Vite сам создаст мапу)
const avatars = import.meta.glob('@/assets/avatars/*', { eager: true, query: '?url', import: 'default' });

const avatarUrl = computed(() => {
  for (const path in avatars) {
    if (path.includes(avatarName)) return avatars[path] as string;
  }
  return '';
});
</script>
