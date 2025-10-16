<script setup lang="ts">
import AvatarDisplay from '@/components/AvatarDisplay.vue';
import GamesUidsModal from '@/components/GamesUidsModal.vue';
import IconTooltip from '@/components/IconTooltip.vue';
import LinksList from '@/components/LinksList.vue';
import ParticlesBackground from '@/components/ParticlesBackground.vue';
import { useModalHost } from '@/composables/useModalHost';
import config from '@/config';

const { openModal } = useModalHost()

function showGames() {
  openModal(GamesUidsModal, { gameUids: config.gameUids })
}

function handleListItemClick(id: string) {
  if (id == "uids") {
    showGames()
  }
}

</script>

<template>
  <ParticlesBackground />
  <div class="flex justify-center min-h-screen gap-10 py-10">
    <!-- Аватар не сжимается -->
    <div class="flex-shrink-0">
      <AvatarDisplay />
    </div>

    <!-- Текст занимает оставшееся место -->
    <div class="max-w-1/3">
      <div id="username" class="relative flex items-start gap-2">
        <span>BoBkiNN</span>
        <IconTooltip :tooltip="config.altNames.join('<br>')" icon="notes" class="name-icon" />
      </div>

      <div id="description">
        <span>
          Long long long long text sdfdsfdsfbsdf dsfdsfdsf sdf sdfdsf dsfdsfdsf
          sdfsdfdsf ds fs df ds fdsf ds f dsf ds f dsf sdf ds fs df sdf sd f dsf<br>
          sdfdsfdsjfndksjbflbasdfbaesbflbsdfds ds f SDFjkhKLSDFh 🎲🎲🎰🎲🎰🎰
          🕹🕹🕹🎮🎮
        </span>
      </div>
    </div>
    <div class="max-w-md p-0">
      <span id="links-list-title">Мои ссылки</span>
      <LinksList @item-click="handleListItemClick" />
    </div>
  </div>

</template>

<style scoped>

#links-list-title {
  color: var(--color-accent);
    font-size: 3rem;
}

#username {
  color: var(--color-accent);
  font-size: 3rem;
  position: relative;
  display: flex;
  align-items: flex-start;
  /* align by top edge */
  gap: 0.25rem;
}

.name-icon {
  position: relative;
  top: 0.4em;
  /* shift the icon slightly above the text baseline */
  font-size: 1.5rem;
  /* smaller than name */
  cursor: pointer;
}

</style>
