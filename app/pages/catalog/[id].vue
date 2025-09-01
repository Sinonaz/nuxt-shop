<script setup lang="ts">
  const API_URL = useAPI()
  const route = useRoute()
  const id = ref(route.params.id)

  const { data } = await useFetch<{ product: ProductInterface }>(API_URL + '/products/' + id.value)

  useSeoMeta({
    title: `Buy - ${data.value?.product.name}`,
    description: data.value?.product.short_description
  })
</script>

<template>
  <div>{{ data?.product.name }}</div>
</template>

<style scoped lang="less"></style>
