<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  gameUids: Record<string, string>
}>()

const emit = defineEmits(['close'])

function copy(uid: string) {
  navigator.clipboard.writeText(uid)
  // Можно добавить уведомление, например alert или Toast
  alert(`UID ${uid} скопирован!`)
}
</script>

<template>
  <div class="bg-neutral-900 text-white rounded-xl p-4 w-[400px] shadow-xl relative">
    <!-- Крестик закрытия -->
    <button @click="emit('close')" class="absolute top-3 right-3 text-gray-400 hover:text-white transition cursor-pointer"
      title="Закрыть">
      <span class="material-icons">close</span>
    </button>

    <table class="w-full table-fixed border-collapse text-left">
      <thead class="border-b border-gray-700 text-gray-400">
        <tr>
          <th class="py-2 px-1">Игра</th>
          <th class="py-2 px-1">UID</th>
          <th class="py-2 px-1 w-8"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, uid) in props.gameUids" :key="uid" class="hover:bg-neutral-800 transition-colors">
          <td class="py-2 px-1">{{ game }}</td>
          <td class="py-2 px-1 font-mono">{{ uid }}</td>
          <td class="py-2 px-1 text-center">
            <button @click="copy(uid)" class="hover:opacity-80 cursor-pointer flex" title="Скопировать UID">
              <span class="material-icons text-gray-300">content_copy</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
