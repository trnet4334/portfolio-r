<template>
  <div class="container">
    <Header/>
    <c-box class="bg-box"/>
    <no-ssr>
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
        :moveSpeed="2.5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </no-ssr>
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
        class="slogan"
        width="40%"
      >
        <c-heading fontSize="4rem" color="#ff0000" fontWeight="900" fontFamily="'Grandstander', cursive">Hi</c-heading>
        <c-text fontSize="3.2rem" lineHeight="3.4rem" fontWeight="900" fontFamily="'Grandstander', cursive">
          <span style="color: #ff0000;">I'm</span> a <span style="color: #0000ff;">creative</span> <span style="color: #ff0000;">Frontend</span> developer.
        </c-text>
      </c-box>
    </c-flex>
    <Footer/>
  </div>
</template>

<script lang="js">
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
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
  //background: url("~assets/images/background-2.jpg");
  //background-size: cover;
}
.slogan {
  padding-left: 40px;
}
.bg-box {
  z-index: 2;
  width: 40vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #a9a9a9;
  opacity: .1;
}
</style>
