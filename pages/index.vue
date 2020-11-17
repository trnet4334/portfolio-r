<template>
  <div class="container">
    <c-box class="mobile-nav">
      <Header/>
      <Footer/>
    </c-box>
    <c-box class="bg-box"/>
    <c-box class="content">
      <c-flex
        :align="['flex-start', 'flex-start', 'center', 'center']"
        justify="flex-start"
        wrap="wrap"
        width="100vw"
        paddingBottom="35px"
        zIndex="4"
        backgroundColor="transparent"
        :position="['relative', 'relative', 'relative', 'absolute']"
        :top="['auto', 'auto', 'auto', '45vh']"
      >
        <c-box
          bg="transparent"
          class="slogan type-animation"
          :width="['100%', '100%', '100%', '52.5%']"
        >
          <c-heading
            :fontSize="['3.2rem', '4.2rem', '5.2rem', '6rem']"
            color="#ef233c"
            fontWeight="900"
            fontFamily="'Grandstander', cursive"
          >
            Hi
          </c-heading>
          <c-text
            :fontSize="['1.6rem', '2.4rem', '2.8rem', '3.1rem']"
            :lineHeight="['2rem', '2.8rem', '3.2rem', '3.5rem']"
            fontWeight="900"
            fontFamily="'Grandstander', cursive"
            color="#ffffff"
          >
            <span style="color: #ef233c;">I'm</span> a
          </c-text>
          <c-text
            :fontSize="['1.6rem', '2.4rem', '2.8rem', '3.1rem']"
            :lineHeight="['2rem', '2.8rem', '3.2rem', '3.5rem']"
            fontWeight="900"
            fontFamily="'Grandstander', cursive"
            color="#ffffff"
          >
            creative <span style="color: #ef233c;">developer</span> .
          </c-text>
        </c-box>
      </c-flex>
      <product-cards/>
    </c-box>
    <c-box
      class="mail"
      zIndex="20"
    >
      <a href="mailto:jyunhao.yu@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" xml:space="preserve">
          <path d="M25.5,10H17v5.5c0,0.276-0.224,0.5-0.5,0.5S16,15.776,16,15.5V10V7h5.5C21.776,7,22,6.776,22,6.5v-3C22,3.224,21.776,3,21.5,3h-6C15.224,3,15,3.224,15,3.5V10H5.5C2.467,10,0,12.467,0,15.5v8C0,24.327,0.673,25,1.5,25h27c0.827,0,1.5-0.673,1.5-1.5v-9C30,12.019,27.981,10,25.5,10z M10,23.5c0,0.275-0.224,0.5-0.5,0.5h-8C1.224,24,1,23.775,1,23.5v-8C1,13.019,3.019,11,5.5,11s4.5,2.019,4.5,4.5V23.5z"/>
        </svg>
      </a>
    </c-box>
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
  padding-left: 50px;
}
.bg-box {
  z-index: 2;
  width: 35vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #a9a9a9;
  opacity: .06;
}
.mail {
  width: 50px;
  height: 50px;
  background-color: #fca311;
  position: fixed;
  bottom: 25px;
  left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  svg {
    width: 32.5px;
    height: 32.5px;
    fill: white;
    &:hover {
      transform: rotate(20deg);
      transition: .35s ease-in-out;
    }
  }
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
@media only screen and (max-width: 62em) {
  .container {
    overflow-y: scroll;
    min-height: 100vh;
    height: auto;
  }
  .bg-box {
    display: none;
  }
  .mobile-nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 100px;
  }
  .content {
    padding-bottom: 12.5vh;
  }
}
@media only screen and (max-width: 48em) {
  .slogan {
    position: relative;
  }
}
</style>
