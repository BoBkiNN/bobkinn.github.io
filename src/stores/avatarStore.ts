import { defineStore } from 'pinia'
import config from '@/config'
import { avatarList } from '@/generated/avatars'

const initialIndex = Math.max(
  avatarList.findIndex((p) => p.includes(config.mainAvatar)),
  0
)

export const useAvatarStore = defineStore('avatar', {
  state: () => ({
    list: avatarList,
    index: initialIndex,
    current: avatarList[initialIndex] || "unknown"
  }),
  getters: {
    name(state) {
      const parts = state.current.split('/')
      const file = parts?.[parts.length - 1]
      return file ? file.replace(/\.[^/.]+$/, '') : 'unknown'
    },
    total: (state) => state.list.length,
  },
  actions: {
    updateCurrent() {
      this.current = this.list[this.index] || "unknown"
    },
    next() {
      this.index = (this.index + 1) % this.list.length
      this.updateCurrent()
    },
    prev() {
      this.index = (this.index - 1 + this.list.length) % this.list.length
      this.updateCurrent()
    },
    set(index: number) {
      if (index >= 0 && index < this.list.length) this.index = index
      this.updateCurrent()
    },
  },
})
