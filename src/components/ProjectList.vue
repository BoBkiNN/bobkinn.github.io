<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import config from '@/config';

// defineProps<{
//   projects: Project[]
// }>()
const projects = config.projects
projects.push({
  name: "Test",
  links: [{
    icons: ["assets/icons/github.svg"],
    text: "Some github",
    url: "https://example.com"
  }],
  descriptionId: "Test Project. Some long loneg asdsadasd descr sdkfsdfsBFDLsljdf dfhsadds\nmeowm meow  eo",
  expandLinks: true,
  icon: "assets/icons/github.svg"
})
</script>

<template>
  <div>
    <span class="title">Мои проекты</span>
    <div class="flex gap-5">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2rem;
}
</style>
