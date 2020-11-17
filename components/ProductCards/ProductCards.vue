<template>
  <c-box class="cards--wrap">
    <c-box
      class="cards--container"
    >
      <product-card
        v-for="item in projects"
        :proj="item"
        :key="item.id"
      ></product-card>
      <NuxtLink to="/work">
        <c-box class="card-last">
          <c-image
            :src="require('@/assets/images/eye.gif')"
            class="image"
          />
          <c-text
            fontSize="1.4rem"
            fontWeight="700"
            lineHeight="3rem"
            fontFamily="'Mulish', sans-serif"
            class="letter"
          >
            View more
          </c-text>
        </c-box>
      </NuxtLink>
    </c-box>
  </c-box>
</template>
<script>
import ProductCard from "@/components/ProductCards/productCard/ProductCard";
import proj from "assets/data/project";
import {
  CBox,
  CFlex,
  CText,
  CHeading,
  CStack,
  CImage
} from '@chakra-ui/vue'

export default {
  name: 'ProductCards',
  components: {
    ProductCard,
    CBox,
    CText,
    CFlex,
    CHeading,
    CStack,
    CImage
  },
  data() {
    return {
      projects: proj
    }
  },
  computed: {},
  methods: {}
}
</script>
<style src="./ProductCards.scss" lang="scss" scoped/>
