import { ref } from 'vue'
declare const __GIT_HASH__: string

export const gitHash = ref('unknown')

if (import.meta.env.DEV) {
  fetch('/__git_hash')
    .then(r => r.text())
    .then(hash => (gitHash.value = hash))
} else {
  gitHash.value = __GIT_HASH__
}
