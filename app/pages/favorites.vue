<script setup lang="ts">
  useSeoMeta({
    title: 'Favorite',
    description: 'Favorite description'
  })

  const API_URL = useAPI()

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
