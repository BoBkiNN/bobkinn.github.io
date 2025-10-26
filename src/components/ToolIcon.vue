<template>
  <Icon :icon="icon" :width="size" :height="size" v-tooltip="{
    content: tooltipContent,
    theme: 'tooltip',
    triggers: isDesktop ? ['hover'] : ['click'],
    placement: 'auto',
    html: true,
    popperTriggers: ['hover'],
    delay: { show: 100, hide: 100 },
    distance: 6
  }" :color="color" class="focus:outline-none"></Icon>
</template>

<script setup lang="ts">
import { i18n } from '@/i18n';
import { isDesktop } from '@/utils';
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  icon: string
  size?: number
  name?: string
  description?: string
  color?: string
}>(), {
  size: 64
})

const tooltipContent = computed(() => {
  let ret = ""
  if (props.name) {
    ret += props.name
  }
  if (ret && props.description) {
    ret += "<br>"
  }
  if (props.description) {
    ret += "- " + i18n.usePrefixed(props.description).value
  }
  return ret
})


</script>
