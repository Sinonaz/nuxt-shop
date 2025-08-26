import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore(
  'favorites',
  () => {
    const favoriteIds = ref<number[]>([])

    function addToFavorite(id: number): void {
      if (!favoriteIds.value.includes(id)) {
        favoriteIds.value.push(id)
      }
    }

    function toggleFavorites(id: number): void {
      if (!favoriteIds.value.includes(id)) {
        favoriteIds.value.push(id)

        return
      }

      favoriteIds.value = favoriteIds.value.filter((item) => item !== id)
    }

    function isFavorite(id: number): boolean {
      return favoriteIds.value.includes(id)
    }

    return { favoriteIds, addToFavorite, toggleFavorites, isFavorite }
  },
  { persist: true }
)
