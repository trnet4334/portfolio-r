<template>
  <div class="container">
    <c-box class="mobile-nav">
      <Header/>
      <Footer/>
    </c-box>
    <c-flex
      width="100vw"
      :height="['auto', 'auto', '100vh', '100vh']"
      justify="center"
      align="center"
      direction="row"
      backgroundColor="transparent"
      :position="['relative', 'relative', 'relative', 'absolute']"
      paddingTop="0"
      paddingBottom="5vh"
    >
      <c-box
        class="grid__container"
        :height="['165vw', '135vw', '100%', '100%']"
        :overflowY="['unset', 'unset', 'unset', 'scroll']"
      >
        <c-box class="grid__item-1" @click="open('vue-hotel')">
          <span class="more-detail">
            <c-text
              fontSize="1.6rem"
              fontWeight="800"
              fontFamily="'Mulish', sans-serif"
              color="rgba(255, 255, 255, 0.5)"
            >
              Click for more detail
            </c-text>
          </span>
          <div class="middle"/>
        </c-box>
        <c-box class="grid__item-2"/>
        <c-box class="grid__item-3"/>
        <c-box class="grid__item-4" @click="open('burger-page')">
          <span class="more-detail">
            <c-text
              fontSize="1.6rem"
              fontWeight="800"
              fontFamily="'Mulish', sans-serif"
              color="rgba(255, 255, 255, 0.5)"
            >
              Click for more detail
            </c-text>
          </span>
          <div class="middle"/>
        </c-box>
      </c-box>
    </c-flex>
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
    <c-modal
      :is-open="isOpen"
      :on-close="close"
      :closeOnOverlayClick="true"
      is-centered
      size="xl"
      v-if="currentSelectedProj !== undefined"
      scrollBehavior="outside"
    >
      <c-modal-content ref="content">
        <c-modal-header
          :paddingTop="['25px', '16px', '16px', '16px']"
          fontFamily="'Mulish', sans-serif"
        >
          {{ displayProjectDetail.title }}
        </c-modal-header>
        <c-modal-body
          fontFamily="'Mulish', sans-serif"
        >
          <c-stack :spacing="5">
            <c-stack :spacing="3" align-items="start" is-inline>
              <c-link :href="`${displayProjectDetail.demo}`" is-external>
                <c-icon name="chevron-right" mx="3px"/>Demo
              </c-link>
              <c-link :href="`${displayProjectDetail.github}`" is-external>
                <c-icon name="chevron-right" mx="3px"/>Github
              </c-link>
            </c-stack>
            <c-stack :spacing="2">
              <c-text
                fontFamily="'Mulish', sans-serif"
                v-for="(item, index) in displayProjectDetail.description" :key="index"
              >
                {{ item }}
              </c-text>
            </c-stack>
            <c-stack
              :spacing="2"
              align-items="start"
              direction="row"
              :shouldWrapChildren=true
              style="flex-wrap: wrap; line-height: 35px;"
            >
              <c-tag
                v-for="(item, index) in displayProjectDetail.tags"
                :key="index"
                size="sm"
                variantColor="cyan"
              >
                <c-tag-label>{{ item }}</c-tag-label>
              </c-tag>
            </c-stack>
          </c-stack>
        </c-modal-body>
        <c-modal-footer>
          <c-button @click="close">Done</c-button>
        </c-modal-footer>
      </c-modal-content>
      <c-modal-overlay/>
    </c-modal>
  </div>
</template>

<script lang="js">
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import proj from "assets/data/project";
import {
  CBox,
  CFlex,
  CText,
  CStack,
  CHeading,
  CModal,
  CModalOverlay,
  CModalContent,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CButton,
  CTag,
  CLink,
  CTagLabel,
  CIcon
} from '@chakra-ui/vue'

export default {
  name: 'Work',
  components: {
    Header,
    Footer,
    CBox,
    CText,
    CStack,
    CFlex,
    CHeading,
    CModal,
    CModalOverlay,
    CModalContent,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CButton,
    CTag,
    CLink,
    CTagLabel,
    CIcon
  },
  data () {
    return {
      isOpen: false,
      currentSelectedProj: undefined
    }
  },
  computed: {
    displayProjectDetail () {
      return this.currentSelectedProj
    }
  },
  methods: {
    open (id) {
      this.currentSelectedProj = proj.find(
        element => {
          return element.id === id
        }
      )
      this.isOpen = true
    },
    close () {
      this.currentSelectedProj = undefined
      this.isOpen = false
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
}
.grid__container {
  position: relative;
  width: 75%;
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
  grid-template-rows: 25vw 25vw;
  column-gap: 6px;
  row-gap: 6px;
  padding-top: 5vw;
  padding-bottom: 10vw;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.grid__item-1 {
  grid-area: 1 / 1 / span 1 / span 2;
  background: url("../../assets/images/hotel.png") center no-repeat;
  background-size: cover;
  position: relative;
  &:hover {
    cursor: pointer;
  }
}
.grid__item-2 {
  grid-area: 1 / 3 / span 1 / span 1;
  background: url("../../assets/images/moon.gif") right no-repeat;
  background-size: cover;
  position: relative;
}
.grid__item-3 {
  grid-area: 2 / 1 / span 1 / span 1;
  background: url("../../assets/images/man.gif") right no-repeat;
  background-size: cover;
  position: relative;
}
.grid__item-4 {
  grid-area: 2 / 2 / span 1 / span 2;
  background: url("../../assets/images/Restaurant.png") center no-repeat;
  background-size: cover;
  position: relative;
  &:hover {
    cursor: pointer;
  }
}
.middle {
  width: 100%;
  background-color: #14213d;
  opacity: 0;
  position: absolute;
  top: 0;
  height: 100%;
  transition: opacity .4s;
}
.grid__item-1:hover .middle, .grid__item-4:hover .middle {
  opacity: .9;
}
.more-detail {
  position: absolute;
  display: block;
  width: 100%;
  bottom: 0;
  margin: 0 auto;
  text-align: center;
  left: 0;
  right: 0;
  z-index: 1;
  visibility: hidden;
  transition: .5s ease-out;
}
.grid__item-1:hover .more-detail, .grid__item-4:hover .more-detail {
  bottom: 40%;
  visibility: visible;
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

@media only screen and (max-width: 30em) {
  .grid__container {
    grid-template-columns: 75vw;
    grid-template-rows: 75vw 75vw;
  }
  .grid__item-1 {
    grid-area: 1 / 1 / span 1 / span 1;
    background: url("../../assets/images/hotel.gif") center no-repeat;
    opacity: .7;
  }
  .grid__item-2 {
    display: none;
  }
  .grid__item-3 {
    display: none;
  }
  .grid__item-4 {
    grid-area: 2 / 1 / span 1 / span 1;
    background: url("../../assets/images/burger.gif") center no-repeat;
    opacity: .7;
  }
}
@media only screen and (min-width: 30em) and (max-width: 47em) {
  .grid__container {
    width: 60%;
    grid-template-columns: 60vw;
    grid-template-rows: 60vw 60vw;
  }
  .grid__item-1 {
    grid-area: 1 / 1 / span 1 / span 1;
    background: url("../../assets/images/hotel.gif") center no-repeat;
    opacity: .7;
  }
  .grid__item-2 {
    display: none;
  }
  .grid__item-3 {
    display: none;
  }
  .grid__item-4 {
    grid-area: 2 / 1 / span 1 / span 1;
    background: url("../../assets/images/burger.gif") center no-repeat;
    opacity: .7;
  }
}
@media only screen and (min-width: 48em) and (max-width: 62em) {
  .grid__container {
    padding: 0;
    width: 84%;
    grid-template-columns: 28vw 28vw 28vw;
    grid-template-rows: 28vw 28vw;
  }
}
@media only screen and (min-width: 62em) {
  .grid__container {
    padding: 15vh 0;
  }
}
@media only screen and (max-width: 62em) {
  .mobile-nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 100px;
  }
}
/* iPad and iPad Pro 9.7": Portrait */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : portrait)
and (-webkit-min-device-pixel-ratio: 2) {
  .grid__container {
    padding: 7.5vh 0;
    width: 76%;
    grid-template-columns: 38vw 38vw;
    grid-template-rows: 38vw 38vw 38vw;
  }
  .grid__item-1 {
    grid-area: 1 / 1 / span 1 / span 2;
  }
  .grid__item-2 {
    grid-area: 2 / 1 / span 1 / span 1;
  }
  .grid__item-3 {
    grid-area: 2 / 2 / span 1 / span 1;
  }
  .grid__item-4 {
    grid-area: 3 / 1 / span 1 / span 2;
  }
}
</style>
