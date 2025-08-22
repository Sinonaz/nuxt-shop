<script setup lang="ts">
  const { product } = defineProps<{ product: ProductInterface }>()
</script>

<template>
  <article class="product">
    <FavBtn class="product__fav" />
    <span v-if="product.discount" class="product__discount">-{{ product.discount }}%</span>
    <NuxtLink class="product__wrapper" :to="`/catalog/${product.id}`">
      <NuxtImg class="product__img" :src="product.images[0]" width="300" heigth="300" />

      <span class="product__title">{{ product.name }}</span>
      <span class="product__price">$ {{ product.price }}</span>
    </NuxtLink>
  </article>
</template>

<style scoped lang="less">
  .product {
    position: relative;
  }

  .product__fav {
    position: absolute;
    z-index: 1;
    top: 20px;
    right: 20px;
  }

  .product__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: inherit;
    text-decoration: none;
  }

  .product__title {
    margin-top: 8px;
    font-weight: 400;
    font-size: 20px;
  }

  .product__price {
    font-weight: 500;
    font-size: 20px;
    color: var(--color-accent);
  }

  .product__img {
    border-radius: 8px;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }

  .product__discount {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    background: var(--color-accent);
    color: white;
  }
</style>
