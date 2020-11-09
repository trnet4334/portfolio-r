<template>
  <c-box
    class="cards-container"
  ></c-box>
</template>
<script>
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
    CBox,
    CText,
    CFlex,
    CHeading,
    CStack,
    CImage
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style src="ProductCards.scss" lang="scss" scoped/>
