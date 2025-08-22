<script setup lang="ts">
  const {
    public: { apiUrl }
  } = useRuntimeConfig()

  const defaultSelectOption = { label: 'Категория', value: '' }

  const selectValue = ref<string>('')
  const { data } = await useFetch<{ categories: CategoryInterface[] }>(apiUrl + '/categories')

  const selectItems = computed(() => {
    return data.value
      ? data.value.categories
          .map(({ id, name }) => Object.assign({}, { label: name, value: id.toString() }))
          .concat([defaultSelectOption])
      : [defaultSelectOption]
  })

  const product: ProductInterface = {
    id: 1,
    name: 'Lira Earrings',
    price: 20,
    short_description: 'Элегантные золотистые серьги-кольца',
    long_description:
      'Отлично подойдут к любому гардеробу. Чистое золото высокой пробы, которое не оставит вас равнодушными к качеству изделия.',
    discount: 0,
    images: [
      '/images/jewelry/lira1.jpg',
      '/images/jewelry/lira2.jpg',
      '/images/jewelry/lira3.jpg',
      '/images/jewelry/lira4.jpg'
    ],
    category_id: 1
  }
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
          <ProductCard :product />
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
</style>
