<template>
  <div class="container">
    <Header/>
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
      width="100vw"
      height="auto"
      justify="center"
      direction="row"
      overflow="scroll"
      backgroundColor="transparent"
      position="absolute"
      top="0"
    >
      <c-box class="grid__container">
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
    <Footer/>
    <c-modal
      :is-open="isOpen"
      :on-close="close"
      :closeOnOverlayClick="true"
      size="xl"
      is-centered
      v-if="currentSelectedProj !== undefined"
    >
      <c-modal-content ref="content">
        <c-modal-header>{{ displayProjectDetail.title }}</c-modal-header>
        <c-modal-close-button/>
        <c-modal-body>
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
              <c-text v-for="(item, index) in displayProjectDetail.description" :key="index">
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
}
.grid__container {
  padding-top: 10vh;
  padding-bottom: 15vh;
  position: relative;
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
</style>
