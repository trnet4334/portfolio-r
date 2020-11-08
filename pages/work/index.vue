<template>
  <div class="container">
    <Header/>
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
      width="100vw"
      height="auto"
      justify="center"
      direction="row"
      overflow="scroll"
      zIndex="4"
      backgroundColor="transparent"
      position="absolute"
      top="0"
    >
      <c-box class="grid__container">
        <c-box class="grid__item-1"/>
        <c-box class="grid__item-2"/>
        <c-box class="grid__item-3"/>
        <c-box class="grid__item-4"/>
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
.grid__container {
  padding-top: 10vh;
  padding-bottom: 15vh;
  width: 75%;
  height: auto;
  display: grid;
  grid-template-columns: 22.5vw 22.5vw 22.5vw;
  grid-template-rows: 22.5vw 22.5vw;
  column-gap: 6px;
  row-gap: 6px;
}
.grid__item-1 {
  grid-area: 1 / 1 / span 1 / span 2;
  background: url("../../assets/images/hotel.png") center no-repeat;
  background-size: cover;
}
.grid__item-2 {
  grid-area: 1 / 3 / span 1 / span 1;
  background: url("../../assets/images/moon.gif") right no-repeat;
  background-size: cover;
}
.grid__item-3 {
  grid-area: 2 / 1 / span 1 / span 1;
  background: url("../../assets/images/man.gif") right no-repeat;
  background-size: cover;
}
.grid__item-4 {
  grid-area: 2 / 2 / span 1 / span 2;
  background: url("../../assets/images/Restaurant.png") center no-repeat;
  background-size: cover;
}
</style>
