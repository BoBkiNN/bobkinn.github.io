<script setup lang="ts">
import { i18n } from '@/i18n';
import ProjectCard from './ProjectCard.vue';
import config from '@/config';

const projects = config.projects
</script>

<template>
  <div>
    <span class="title">{{ i18n.use('my_projects') }}</span>
    <div class="flex gap-5 flex-wrap flex-col lg:flex-row">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
      <div v-if="projects.length < 3" class="flex items-center text-white/50">
        {{ i18n.use("more_projects") }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2rem;
}
</style>
