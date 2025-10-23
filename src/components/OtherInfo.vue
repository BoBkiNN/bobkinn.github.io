<template>
  <div class="flex flex-col mb-5">
    <div class="flex gap-3">
      <span>{{ i18n.use("total_code_time") }}</span>
      <a class="codetime" href="https://wakatime.com/@05ad92d2-18a4-4f80-8305-17a666c54f2d" target="_blank"><img
          src="https://wakatime.com/badge/user/05ad92d2-18a4-4f80-8305-17a666c54f2d.svg"
          alt="Total time coded since Feb 20 2023" /></a>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col">
        <span>{{ i18n.use("tools") }}</span>
        <span class="text-sm text-gray-400 relative -top-2">{{ i18n.use("tools.hint") }}</span>
      </div>

      <div class="flex gap-2">
        <ToolIcon icon="devicon:python" name="Python" description="Using it for small scripts and projects" />
        <ToolIcon icon="devicon:kotlin" name="Kotlin" />
        <ToolIcon icon="devicon:java" name="Java" />
        <ToolIcon icon="devicon:html5" name="HTML" />
        <ToolIcon icon="devicon:css3" name="CSS" />
        <ToolIcon icon="devicon:vuejs" name="Vue" description="This page is written using it!" />
        <ToolIcon icon="devicon:typescript" name="TypeScript" />
        <ToolIcon icon="devicon:android" name="Android" />
        <ToolIcon icon="devicon:jetpackcompose" name="Jetpack Compose" />

        <ToolIcon icon="material-icon-theme:minecraft-fabric" name="FabricMC" />
        <ToolIcon icon="devicon:vscode" name="VS Code"
          description="My code editor for everything (except JVM languages)" />
        <ToolIcon icon="devicon:intellij" name="IntelliJ IDEA" />
        <ToolIcon icon="devicon:androidstudio" name="Android Studio" />
        <ToolIcon icon="simple-icons:github" name="GitHub" />
        <ToolIcon icon="devicon:git" name="Git" />

        <ToolIcon icon="devicon:ubuntu" name="Ubuntu" description="I often manage Ubuntu VPS" />
        <ToolIcon icon="devicon:debian" name="Debian" description="My home server uses OMV which is based on Debian" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { i18n } from '@/i18n';
import ToolIcon from './ToolIcon.vue';
</script>

<style scoped>
.codetime {
  background-color: unset !important;
  padding: 0;
}
</style>
