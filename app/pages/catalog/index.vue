<script setup lang="ts">
  const {
    public: { apiUrl }
  } = useRuntimeConfig()

  const defaultSelectOption = { label: 'Категория', value: '' }

  const selectValue = ref<string>('')
  const { data: categoriesData } = await useFetch<{ categories: CategoryInterface[] }>(
    apiUrl + '/categories'
  )
  const { data: productsData } = await useFetch<{ products: ProductInterface[] }>(
    apiUrl + '/products',
    {
      query: {
        limit: 20,
        offset: 0
      }
    }
  )

  const selectItems = computed(() => {
    return categoriesData.value
      ? categoriesData.value.categories
          .map(({ id, name }) => Object.assign({}, { label: name, value: id.toString() }))
          .concat([defaultSelectOption])
      : [defaultSelectOption]
  })
</script>

<template>
  <div class="catalog">
    <h1 class="catalog__title">Каталог товаров</h1>
    <div class="catalog__wrapper">
      <div class="catalog__filter">
        <AppSelect v-model="selectValue" :items="selectItems" name="category" />
      </div>

      <div class="catalog__list-wrap">
        <div class="catalog__list">
          <ProductCard v-for="product in productsData?.products" :key="product.id" :product />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .catalog {
    padding: 100px 0;
  }

  .catalog__wrapper {
    display: flex;
    gap: 35px;
  }

  .catalog__title {
    margin: 0 0 33px;
    font-weight: 500;
    font-size: 33px;
  }

  .catalog__filter {
    max-width: 260px;
    width: 100%;
  }

  .catalog__list-wrap {
    width: 100%;
  }

  .catalog__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 70px 24px;
    width: 100%;
  }
</style>
