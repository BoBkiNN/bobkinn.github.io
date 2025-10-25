<script setup lang="ts">
import { i18n } from "@/i18n";
import { type Project } from "@/models";
defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    class="flex flex-col gap-2 min-h-7 min-w-30 basis-2/7 grow p-3 rounded-2xl
    shadow bg-[#36363626] backdrop-blur-xs hover:shadow-xl transition hover:scale-[1.01]">
    <div class="flex gap-2 items-start">
      <img v-if="project.icon" :src="project.icon" class="w-15 rounded-2xl" />
      <div class="flex gap-2 flex-col">
        <h2 class="text-white">{{ i18n.usePrefixed(project.name) }}</h2>
        <p class="text-white whitespace-pre-line">
          {{ i18n.useLarge(project.descriptionId).value }}
        </p>
        <!-- TODO use description id for i18n -->
      </div>
    </div>
    <template v-if="project.expandLinks">
      <a v-for="link in project.links" :key="link.url" :href="link.url" class="flex flex-row gap-2 rounded-sm">
        <img v-for="icon in link.icons || []" :key="icon" :src="icon" class="w-5 h-5" />
        <span>{{ link.text }}</span>
      </a>
    </template>
    <div v-else class="flex gap-1">
      <a v-for="link in project.links" :key="link.url" :href="link.url" class="rounded-sm">
        <img v-for="icon in link.icons || []" :key="icon" :src="icon" class="w-5 h-5" />
      </a>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
}
</style>
