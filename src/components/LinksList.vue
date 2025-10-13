<script setup lang="ts">
import config from '@/config'
import LinkItemView from '@/components/LinkItemView.vue'

</script>

<template>
  <div id="links" class="rounded-xl overflow-hidden">
    <LinkItemView
      v-for="(item, key) in config.links"
      :key="key"
      :item="item"
    />
  </div>
</template>

<style scoped>
#links {
  color: var(--color-accent);
  border: 2px solid rgb(66, 66, 66);

}
#links > * + * {
  border-top: 2px solid rgb(66, 66, 66);
}
</style>
