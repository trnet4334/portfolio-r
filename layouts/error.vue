<template>
  <div class="container">
    <C-flex
      direction="column"
      align="center"
      justify="center"
      position="absolute"
      width="50%"
      top="35%"
      left="25vw"
    >
      <c-heading
        as="h1"
        lineHeight="5rem"
        color="#ffffff"
      >
        Page Not Found
      </c-heading>
      <c-text
        fontSize="1.6rem"
        fontWeight="700"
        fontFamily="'Mulish', sans-serif"
        lineHeight="2.2rem"
        textAlign="center"
        color="#ffffff"
      >
        This could be because of a typo, an out of date link,
        or that the page you requested doesn't exist.
      </c-text>
      <c-button
        size="md"
        variant-color="blue"
        marginTop="30px"
      >
        <NuxtLink to="/">
          <c-text
            fontSize="1.4rem"
            fontWeight="700"
            fontFamily="'Mulish', sans-serif"
            lineHeight="4rem"
          >
            Back to Home
          </c-text>
        </NuxtLink>
      </c-button>
    </C-flex>
  </div>
</template>
<script>
import {
  CText,
  CHeading,
  CFlex,
  CBox,
  CButton
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CBox,
    CHeading,
    CText,
    CFlex,
    CButton
  },
}
</script>
