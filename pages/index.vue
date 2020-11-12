<template>
  <div class="container">
    <Header/>
    <c-box class="bg-box"/>
    <product-cards/>
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
    <c-flex
      align="center"
      justify="flex-start"
      wrap="wrap"
      width="100vw"
      height="100vh"
      zIndex="4"
      backgroundColor="transparent"
      position="absolute"
      top="0"
    >
      <c-box
        bg="transparent"
        class="slogan type-animation"
        width="40%"
      >
        <c-heading
          fontSize="6rem"
          color="#ef233c"
          fontWeight="900"
          fontFamily="'Grandstander', cursive"
        >
          Hi
        </c-heading>
        <c-text
          fontSize="3.4rem"
          lineHeight="4rem"
          fontWeight="900"
          fontFamily="'Grandstander', cursive"
        >
          <span style="color: #ef233c;">I'm</span> a
        </c-text>
        <c-text
          fontSize="3.4rem"
          lineHeight="4rem"
          fontWeight="900"
          fontFamily="'Grandstander', cursive"
        >
          creative <span style="color: #ef233c;">developer</span> .
        </c-text>
      </c-box>
    </c-flex>
    <Footer/>
  </div>
</template>

<script lang="js">
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import ProductCards from "@/components/ProductCards/ProductCards";
import {
  CBox,
  CFlex,
  CText,
  CHeading
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ProductCards,
    CBox,
    CText,
    CFlex,
    CHeading
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
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.slogan {
  padding-left: 40px;
}
.bg-box {
  z-index: 2;
  width: 30vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #a9a9a9;
  opacity: .1;
}
.type-animation {
  p, h2 {
    overflow: hidden;
    white-space: nowrap;
  }
  h2:first-of-type {
    width: 0;
    animation: type 1s steps(40, end);
    animation-fill-mode: forwards;
  }
  p:nth-of-type(1) {
    width: 0;
    animation: type 2s steps(40, end);
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }
  p:nth-of-type(2) {
    width: 0;
    animation: type 4s steps(40, end);
    animation-fill-mode: forwards;
    animation-delay: 3s;
  }
}

@keyframes type {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
