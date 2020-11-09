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
        :moveSpeed="2.8"
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
        class="slogan type-animation"
        width="40%"
      >
        <c-heading
          fontSize="6rem"
          color="#ff0000"
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
          <span style="color: #ff0000;">I'm</span> a
        </c-text>
        <c-text
          fontSize="3.4rem"
          lineHeight="4rem"
          fontWeight="900"
          fontFamily="'Grandstander', cursive"
        >
          creative <span style="color: #ff0000;">developer</span> .
        </c-text>
      </c-box>
    </c-flex>
    <c-box
      position="absolute"
      top="35%"
      left="45%"
      zIndex="4"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <c-box
        height="120px"
        class="slide-fade"
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 30 30" class="icon" xml:space="preserve">
          <path d="M5.5,11.5C5.2,11.5,5,11.3,5,11V1c0-0.3,0.2-0.5,0.5-0.5S6,0.7,6,1v10C6,11.3,5.8,11.5,5.5,11.5z"/>
          <path d="M5.5,11.5c-0.1,0-0.3,0-0.4-0.1l-2-2c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l1.6,1.6l1.6-1.6c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-2,2C5.7,11.5,5.6,11.5,5.5,11.5z"/>
          <path d="M5,18.8c0,0.2,0.1,0.4,0.2,0.5l9.3,8.9c0.9,0.8,2.1,1.3,3.4,1.3H21c3.3,0,6-2.6,6-5.8v-6.9c0-0.8-0.7-1.4-1.5-1.4c-0.8,0-1.6,0.5-1.6,1.3V17c0,0.3-0.2,0.5-0.5,0.5S23,17.3,23,17v-1.5c0-0.8-0.7-1.5-1.5-1.5S20,14.7,20,15.5V17c0,0.3-0.2,0.5-0.5,0.5S19,17.3,19,17V7c0-0.8-0.7-1.5-1.5-1.5c-1,0-1.4,1-1.5,1.4V17c0,0.3-0.2,0.5-0.5,0.5S15,17.3,15,17V8.1c0-0.7-0.7-1.6-1.5-1.6C12.7,6.5,12,7.2,12,8v12c0,0.2-0.1,0.4-0.3,0.4c-0.2,0.1-0.4,0.1-0.5-0.1l-3-2.4c-0.4-0.3-0.8-0.4-1.3-0.4c-0.6,0-1.2,0.2-1.6,0.6C5.1,18.4,5,18.6,5,18.8z"/>
        </svg>
      </c-box>
      <c-text
        fontSize="1.5rem"
        fontWeight="600"
        fontFamily="'Mulish', sans-serif"
      >
        Scroll to discover
      </c-text>
    </c-box>
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
.icon {
  fill: black;
  width: 70px;
  height: 70px;
}
.slide-fade {
  animation: fade 2s infinite;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
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

@keyframes fade {
  0% {
    opacity: 1;
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
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
