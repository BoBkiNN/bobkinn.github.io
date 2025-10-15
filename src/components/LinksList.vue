<script setup lang="ts">
import config from '@/config'
import LinkItemView from '@/components/LinkItemView.vue'
import ButtonItem from './ButtonItem.vue';
const emit = defineEmits(["itemClick"])

function isEmpty(obj: Record<string, unknown>) {
  return Object.keys(obj).length === 0
}

</script>

<template>
  <div id="links" class="rounded-xl overflow-hidden">
    <LinkItemView v-for="(item, key) in config.links" :key="key" :item="item" />
    <ButtonItem :v-if="!isEmpty(config.gameUids)" text="Mihoyo Games UIds" @click="emit('itemClick', 'uids')"></ButtonItem>
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
