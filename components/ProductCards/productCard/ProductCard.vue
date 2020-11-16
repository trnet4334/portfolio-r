<template>
  <c-box class="card">
    <c-link :href="proj.demo" is-external>
      <c-flex
        class="image-box"
        align="center"
        justify="center"
      >
        <c-image
          class="image"
          :src="require(`@/assets/images/${proj.url}.gif`)"
        />
      </c-flex>
    </c-link>
    <c-flex
      direction="row"
      align="center"
      justify="center"
    >
      <c-link :href="proj.demo" is-external>
        <c-text
          :fontSize="['1.2rem', '1.4rem', '1.6rem', '1.8rem']"
          fontWeight="800"
          fontFamily="'Mulish', sans-serif"
          lineHeight="3rem"
          color="#ffffff"
        >
          {{ proj.title }}
        </c-text>
      </c-link>
    </c-flex>
  </c-box>
</template>
<script>
import {
  CBox,
  CFlex,
  CText,
  CImage,
  CLink
} from '@chakra-ui/vue'

export default {
  name: 'ProductCard',
  components: {
    CBox,
    CText,
    CFlex,
    CImage,
    CLink
  },
  props: {
    proj: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style src="./ProductCard.scss" lang="scss" scoped/>
