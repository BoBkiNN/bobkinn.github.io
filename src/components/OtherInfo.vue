<template>
  <div class="flex flex-col mb-5">
    <div class="flex gap-3 items-center">
      <span>{{ i18n.use("total_code_time") }}</span>
      <a class="codetime" href="https://wakatime.com/@05ad92d2-18a4-4f80-8305-17a666c54f2d" target="_blank"><img
          src="https://wakatime.com/badge/user/05ad92d2-18a4-4f80-8305-17a666c54f2d.svg"
          alt="Total time coded since Feb 20 2023" /></a>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col">
        <span>{{ i18n.use("tools") }}</span>
        <span class="text-sm text-gray-400 relative -top-2">{{ i18n.use(isDesktop ? "tools.hint" : "tools.hint.mobile") }}</span>
      </div>

      <div class="flex gap-2 flex-wrap lg:flex-nowrap">
        <ToolIcon icon="devicon:python" name="Python" description="$tool.python.desc" />
        <ToolIcon icon="devicon:kotlin" name="Kotlin" />
        <ToolIcon icon="devicon:java" name="Java" />
        <ToolIcon icon="devicon:html5" name="HTML" />
        <ToolIcon icon="devicon:css3" name="CSS" />
        <ToolIcon icon="devicon:vuejs" name="Vue" description="$tool.vue.desc" />
        <ToolIcon icon="devicon:typescript" name="TypeScript" />
        <ToolIcon icon="devicon:android" name="Android" description="$tool.android.desc"/>
        <ToolIcon icon="devicon:jetpackcompose" name="Jetpack Compose"/>

        <ToolIcon icon="material-icon-theme:minecraft-fabric" name="FabricMC" description="$tool.fabric.desc"/>
        <ToolIcon icon="devicon:vscode" name="VS Code" description="$tool.vscode.desc" />
        <ToolIcon icon="devicon:intellij" name="IntelliJ IDEA" />
        <ToolIcon icon="devicon:androidstudio" name="Android Studio" />
        <ToolIcon icon="simple-icons:github" name="GitHub" />
        <ToolIcon icon="devicon:git" name="Git" />

        <ToolIcon icon="devicon:linux" name="Linux" description="$tool.linux.desc" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { i18n } from '@/i18n';
import ToolIcon from './ToolIcon.vue';
import { isDesktop } from '@/utils';
</script>

<style scoped>
.codetime {
  background-color: unset !important;
  padding: 0;
}
</style>
