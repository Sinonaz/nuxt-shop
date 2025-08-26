import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favoriteIds = ref<number[]>([])

  function addToFavorite(id: number): void {
    if (!favoriteIds.value.includes(id)) {
      favoriteIds.value.push(id)
    }
  }

  function removeFromFavorites(id: number): void {
    favoriteIds.value = favoriteIds.value.filter((item) => item !== id)
  }

  return { favoriteIds, addToFavorite, removeFromFavorites }
})
