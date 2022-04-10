<script setup lang="ts">
import axios from 'axios'
import { useThemesStore } from '~/stores/themes'

const themes = useThemesStore()

themes.fetchAll()
const router = useRouter()

const image = ref(undefined)
const { t } = useI18n()

const submitForm = () => {
  const imageData = new FormData()
  imageData.append('image', image.value.files)
  axios.post('https://dev-admin-api.myspec.io/v2/investments/themes/0059', imageData, {
    header: {
      'Content-Type': 'multipart/form-data',
      'x-api-key': 'oc2mwqbNnl9T2tR9BZumEaL443ChvyWfXu3CkNDe',
    },
  })
}
const test = 'test'
</script>

<template>
  <div>
    테마주 관리 목록
    <Searchbar />
    <div v-if="!themes.loaded">
      <table>
        <ThemeItem
          :id="1"
          :alias="test"
          :type="test"
          :name="test"
          :image="test"
        />
      </table>
    </div>
    <div v-else>
      Loading....
    </div>

    {{ test }}

    <form enctype="multipart/form-data" @submit.prevent="submitForm">
      <input id="file" ref="image" type="file">
      <input id="text" type="text">
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
