<script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'

  const defaultSelectOption = { label: 'Категория', value: '' }

  const API_URL = useAPI()
  const router = useRouter()
  const route = useRoute()
  const updateQueryParams = useDebounceFn((categoryId, search) => {
    router.replace({ query: { category_id: categoryId, search } })
  }, 500)

  const categoryId = ref<string>(route.query.category_id?.toString() ?? '')
  const search = ref<string>(route.query.search?.toString() ?? '')
  const query = computed(() => {
    return {
      limit: route.query.limit ?? 20,
      offset: route.query.offset ?? 0,
      category_id: route.query.category_id || undefined,
      search: route.query.search || undefined
    }
  })
  const selectItems = computed(() => {
    return categoriesData.value
      ? categoriesData.value.categories
          .map(({ id, name }) => Object.assign({}, { label: name, value: id.toString() }))
          .concat([defaultSelectOption])
      : [defaultSelectOption]
  })

  const { data: categoriesData } = await useFetch<{ categories: CategoryInterface[] }>(API_URL + '/categories')
  const { data: productsData } = await useFetch<{ products: ProductInterface[] }>(API_URL + '/products', {
    key: 'products',
    query
  })

  watch([categoryId, search], ([categoryValue, searchValue]) => updateQueryParams(categoryValue, searchValue))
</script>

<template>
  <div class="catalog">
    <h1 class="catalog__title">Каталог товаров</h1>
    <div class="catalog__wrapper">
      <div class="catalog__filter">
        <div class="catalog__search">
          <AppField v-model="search" />
          <Icon name="mdi:magnify" size="22px" />
        </div>

        <AppSelect v-model="categoryId" :items="selectItems" name="category" />
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
  .catalog__search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
    border-bottom: 1px solid var(--color-gray);
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
