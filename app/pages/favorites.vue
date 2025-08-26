<script setup lang="ts">
  import { useFavoritesStore } from '~/stores/favorites.store'

  const favoritesStore = useFavoritesStore()
</script>

<template>
  <div>
    <h1>favorites</h1>
    {{ favoritesStore.favoriteIds }}
  </div>
</template>

<style scoped lang="less"></style>
