<script setup lang="ts">
import AvatarDisplay from '@/components/AvatarDisplay.vue';
import GamesUidsModal from '@/components/GamesUidsModal.vue';
import IconTooltip from '@/components/IconTooltip.vue';
import LangButton from '@/components/LangButton.vue';
import LinksList from '@/components/LinksList.vue';
import OtherInfo from '@/components/OtherInfo.vue';
import ParticlesBackground from '@/components/ParticlesBackground.vue';
import ProjectList from '@/components/ProjectList.vue';
import { useModalHost } from '@/composables/useModalHost';
import config from '@/config';
import { i18n } from '@/i18n';
import { formatBirthday } from '@/models'

const { openModal } = useModalHost()

function showGames() {
  openModal(GamesUidsModal, { gameUids: config.gameUids })
}

function handleListItemClick(id: string) {
  if (id == "uids") {
    showGames()
  }
}

const bdayText = formatBirthday(config.birthday)

</script>

<template>
  <ParticlesBackground />
  <div class="flex flex-col justify-center min-h-screen gap-10 py-10">
    <div class="flex justify-between gap-10">
      <!-- Аватар не сжимается -->
      <div class="flex-shrink-0">
        <AvatarDisplay />
      </div>

      <!-- Текст занимает оставшееся место -->
      <div class="max-w-1/3">
        <div id="username" class="relative inline-flex flex-col leading-none">
          <div class="flex items-start gap-2 leading-none">
            <span class="align-baseline">BoBkiNN</span>
            <IconTooltip :tooltip="config.altNames.join('<br>')" icon="notes" class="name-icon" />
          </div>
          <span class="text-sm text-gray-400 relative -top-2">
            <span v-tooltip="{
              content: i18n.use('birthday.hint'),
              triggers: ['hover', 'focus'],
              placement: 'right-start',
              popperTriggers: ['hover']
            }">🍰 {{ bdayText }}</span>
            <br />
            <span v-tooltip="{
              content: i18n.use('timezone.hint'),
              triggers: ['hover', 'focus'],
              placement: 'right-start',
              popperTriggers: ['hover']
            }">🕓 {{ config.myTimezone }}</span>
          </span>
        </div>

        <div id=" description">
          <span v-html="i18n.useLarge('about').value">
          </span>
          <!-- Long long long long text sdfdsfdsfbsdf dsfdsfdsf sdf sdfdsf dsfdsfdsf
            sdfsdfdsf ds fs df ds fdsf ds f dsf ds f dsf sdf ds fs df sdf sd f dsf<br>
            sdfdsfdsjfndksjbflbasdfbaesbflbsdfds ds f SDFjkhKLSDFh 🎲🎲🎰🎲🎰🎰
            🕹🕹🕹🎮🎮 -->
        </div>
      </div>
      <div class="max-w-md p-0">
        <span id="links-list-title">{{ i18n.use('my_links') }}</span>
        <LinksList @item-click="handleListItemClick" />
      </div>
    </div>
    <OtherInfo />
    <ProjectList />
  </div>
  <slot name="footer" />
  <div class="absolute top-3 right-3">
    <LangButton />
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
  /* top: 0.4em; */
  /* shift the icon slightly above the text baseline */
  font-size: 1.5rem;
  /* smaller than name */
  cursor: pointer;
}

</style>
