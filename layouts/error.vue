<template>
  <div class="container">
    <client-only>
      <vue-particles
        color="#a9a9a9"
        :particleOpacity="0.5"
        :particlesNumber="140"
        shapeType="circle"
        :particleSize="3"
        linesColor="#373030"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.3"
        :linesDistance="130"
        :moveSpeed="2.8"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </client-only>
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
      >
        Page Not Found
      </c-heading>
      <c-text
        fontSize="1.6rem"
        fontWeight="700"
        fontFamily="'Mulish', sans-serif"
        lineHeight="2.2rem"
        textAlign="center"
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
