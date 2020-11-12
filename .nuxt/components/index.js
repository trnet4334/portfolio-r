export { default as Logo } from '../../components/Logo.vue'
export { default as ProductCards } from '../../components/ProductCards/ProductCards.vue'
export { default as ProductCard } from '../../components/ProductCards/productCard/ProductCard.vue'
export { default as Footer } from '../../components/footer/Footer.vue'
export { default as Header } from '../../components/header/Header.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyProductCards = import('../../components/ProductCards/ProductCards.vue' /* webpackChunkName: "components/ProductCards/ProductCards" */).then(c => c.default || c)
export const LazyProductCard = import('../../components/ProductCards/productCard/ProductCard.vue' /* webpackChunkName: "components/ProductCards/productCard/ProductCard" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer/Footer.vue' /* webpackChunkName: "components/footer/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header/Header.vue' /* webpackChunkName: "components/header/Header" */).then(c => c.default || c)
