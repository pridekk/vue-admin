import { defineStore } from 'pinia'
import axios from 'axios'
const themeUri = 'https://dev-admin-api.myspec.io/v2/investments/themes'

export interface Theme {
  code: String
  name: String
  alias: String
  image: String
}
interface ThemeState {
  items: Record<string, Theme>
  ids: number[]
}

export const useThemesStore = defineStore({
  id: 'themes',
  state: (): ThemeState => ({
    items: {},
    ids: [],
  }),
  getters: {
    list(): Theme[] {
      return this.ids.map(i => this.items[i])
    },

    loaded(): boolean {
      return this.ids.length > 0
    },
  },

  actions: {
    async fetchAll() {
      if (this.loaded)
        return

      const res = await axios.get(`${themeUri}`, { headers: { 'x-api-key': 'oc2mwqbNnl9T2tR9BZumEaL443ChvyWfXu3CkNDe' } })
      console.log(res.data.items)
      const data: Theme[] = await res.data.items
      // this.ids = data.map((theme) => {
      //   this.items[theme.id] = theme
      //   return theme.id
      // })
    },
  },
})
