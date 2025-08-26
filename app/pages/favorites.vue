<script setup lang="ts">
  import { useFavoritesStore } from '~/stores/favorites.store'

  const {
    public: { apiUrl: API_URL }
  } = useRuntimeConfig()

  const favoritesStore = useFavoritesStore()

  const products = ref<ProductInterface[]>()

  watchEffect(async () => {
    const data = await Promise.all(
      favoritesStore.favoriteIds.map((id) => $fetch<{ product: ProductInterface }>(API_URL + `/products/${id}`))
    )
    products.value = data.map((el) => el.product)
  })
</script>

<template>
  <div class="favorites">
    <h1 class="favorites__title">Избранное</h1>

    <div class="favorites__list">
      <ProductCard v-for="product in products" :key="product.id" :product />
    </div>
  </div>
</template>

<style scoped lang="less">
  .favorites__title {
    margin: 0 0 40px;
    font-weight: 500;
    font-size: 33px;
  }

  .favorites__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 70px 24px;
    width: 100%;
  }
</style>
