<script setup lang="ts">
import { get } from 'axios'
import { useUserStore } from '~/stores/user'
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()

const test = 'test'
</script>

<template>
  <div>
    테마주 관리 목록
    <Searchbar />
    {{ test }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
