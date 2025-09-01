import useAPI from '~/composables/useAPI'
import type { ProductInterface } from '~/interfaces/product.interface'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(async () => {
  const API_URL = useAPI()
  const { products } = await $fetch<{ products: ProductInterface[] }>(API_URL + '/products', {
    query: {
      limit: 1000,
      offset: 0
    }
  })

  return products.map((product) => ({
    loc: '/catalog/' + product.id,
    changefreq: 'daily',
    priority: 0.7
  })) satisfies SitemapUrlInput[]
})
