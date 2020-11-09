<template>
  <div class="about-container">
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
        :moveSpeed="2.8"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </no-ssr>
    <c-flex
      width="100vw"
      height="100vh"
      align="flex-start"
      justify="flex-start"
      overflow="scroll"
      padding="15vh 0 20vh 15vw"
      direction="column"
      zIndex="4"
      backgroundColor="transparent"
      position="absolute"
      top="0"
    >
      <c-box
        width="50%"
      >
        <c-stack :spacing="8">
          <c-heading
            as="h1"
            fontSize="4.2rem"
            lineHeight="4.5rem"
            fontWeight="700"
            fontFamily="'Grandstander', cursive"
          >
            Hi, I'm Steven Yu. A FrontEnd developer creating awesome and effective visual web application.
          </c-heading>
          <c-text
            fontFamily="'Mulish', sans-serif"
            fontSize="2rem"
            fontWeight="600"
            width="85%"
          >
            Interested in working together?
            Feel free to contact me for any project or collaboration.
          </c-text>
        </c-stack>
      </c-box>
      <c-box
        width="100%"
        margin="30px 0"
      >
        <c-flex
          direction="row"
          align="center"
          justify="flex-start"
        >
          <c-box
            width="55px"
            height="55px"
            backgroundColor="#000000"
            borderRadius="50%"
            margin="0 5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <a href="mailto:jyunhao.yu@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   viewBox="0 0 30 30" xml:space="preserve" class="icon">
                <path d="M15.5,26.3c-0.2,0-0.4-0.1-0.5-0.3l-2.4-7.3l-7.3-2.4C5.2,16.2,5,16,5,15.8c0-0.2,0.1-0.4,0.2-0.5l24-14c0.2-0.1,0.4-0.1,0.5,0C29.9,1.5,30,1.7,30,1.9l-4,21c0,0.1-0.1,0.3-0.2,0.3c-0.1,0.1-0.3,0.1-0.4,0L16.9,20L16,25.9C16,26.1,15.8,26.3,15.5,26.3C15.5,26.3,15.5,26.3,15.5,26.3z M6.7,15.7l6.5,2.2c0.1,0,0.3,0.2,0.3,0.3l1.8,5.5l0.7-4.5c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.1,0.4,0l8.4,3.3l3.7-19.3L6.7,15.7z"/>
                <path d="M16.5,19.8c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-0.3-0.5-0.1-0.7L25,7L13.4,18.6c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7L29.1,1.4c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0.1,0.7l-13,17.5C16.8,19.7,16.7,19.8,16.5,19.8z"/>
                <path d="M15.5,26.3c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-0.3-0.5-0.1-0.7l4-5c0.2-0.2,0.5-0.2,0.7-0.1c0.2,0.2,0.3,0.5,0.1,0.7l-4,5C15.8,26.2,15.6,26.3,15.5,26.3z"/>
                <path d="M1.4,24.7c-0.1,0-0.2,0-0.3-0.1c-0.3-0.3-0.6-0.6-0.9-0.9c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0c0.3,0.3,0.6,0.6,0.9,0.9c0.2,0.2,0.2,0.5,0,0.7C1.7,24.6,1.5,24.7,1.4,24.7z"/>
                <path d="M8.8,28.7C8.8,28.7,8.8,28.7,8.8,28.7c-0.6-0.1-1.2-0.2-1.7-0.4c-0.3-0.1-0.4-0.4-0.3-0.6s0.4-0.4,0.6-0.3c0.5,0.2,1,0.3,1.5,0.3c0.3,0,0.5,0.3,0.4,0.6C9.3,28.5,9.1,28.7,8.8,28.7z M11.2,28.7c-0.2,0-0.5-0.2-0.5-0.4c0-0.3,0.1-0.5,0.4-0.6c0.2,0,0.3-0.1,0.5-0.1c0.3-0.1,0.5,0.1,0.6,0.4c0.1,0.3-0.1,0.5-0.4,0.6C11.7,28.6,11.5,28.6,11.2,28.7C11.3,28.7,11.3,28.7,11.2,28.7z M5.1,27.4c-0.1,0-0.2,0-0.2-0.1c-0.5-0.3-0.9-0.6-1.4-0.9c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c0.4,0.3,0.9,0.6,1.3,0.8c0.2,0.1,0.3,0.4,0.2,0.7C5.4,27.3,5.3,27.4,5.1,27.4z"/>
                <path d="M13.1,28.1c-0.2,0-0.4-0.1-0.5-0.3c-0.1-0.3,0-0.5,0.3-0.7c0.4-0.2,0.7-0.3,1.1-0.5c0.2-0.1,0.5-0.1,0.7,0.2c0.1,0.2,0.1,0.5-0.2,0.7c-0.4,0.2-0.8,0.4-1.2,0.6C13.3,28.1,13.2,28.1,13.1,28.1z"/>
              </svg>
            </a>
          </c-box>
          <c-box
            width="55px"
            height="55px"
            backgroundColor="#000000"
            borderRadius="50%"
            margin="0 5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <a href="https://github.com/trnet4334" rel="noreferrer noopener" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   viewBox="0 0 30 30" xml:space="preserve" class="icon">
                <path d="M18.5,29.8c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.2-0.2-0.2-0.4c0,0,0-2.9,0-4.6c0-1.2-0.2-2.2-0.4-2.8c-0.1-0.1-0.1-0.3,0-0.4s0.2-0.2,0.3-0.3c3.6-0.8,6.1-3.7,6.1-7c0-1.5-0.6-2.9-1.9-4.2C22,9.9,22,9.7,22,9.5c0.5-1,0-2.4-0.7-3.2c-0.7,0.3-1.4,1.1-2,1.7c-0.1,0.2-0.4,0.2-0.6,0.1l-0.3-0.1c-1.1-0.4-2.4-0.9-3.6-0.9s-2.5,0.5-3.6,0.9l-0.3,0.1c-0.2,0.1-0.4,0-0.6-0.1c-0.6-0.7-1.3-1.4-2-1.7C7.9,7.1,7.5,8.5,8,9.5C8,9.7,8,9.9,7.9,10.1C6.7,11.3,6,12.9,6,14.5c0,3.1,2.3,5.8,5.6,6.8c0.2,0.1,0.4,0.3,0.4,0.5v0.5c0,1.5-1,2-1.5,2c0,0,0,0,0,0c-1.2,0-1.9-0.7-2.6-1.4c-0.4-0.4-0.9-0.8-1.5-1.2c0.2,0.2,0.3,0.5,0.5,0.7c0.9,1.3,1.9,2.8,3.5,2.8h1c0.1,0,0.3,0.1,0.4,0.1c0.1,0.1,0.1,0.2,0.1,0.4l0,3.6c0,0.2-0.1,0.3-0.2,0.4s-0.3,0.1-0.4,0.1C4.7,28.1,0,22.1,0,15.2c0-8.3,6.7-15,15-15s15,6.7,15,15c0,6.9-4.7,12.9-11.4,14.6C18.6,29.8,18.6,29.8,18.5,29.8z M18.7,22.1c0.2,0.7,0.3,1.6,0.3,2.7c0,1.2,0,3,0,3.9c5.9-1.8,10-7.2,10-13.4c0-7.7-6.3-14-14-14S1,7.5,1,15.2c0,6.2,4.1,11.7,10,13.4l0-2.4h-0.5c-2.1,0-3.4-1.8-4.3-3.3c-0.6-0.9-1.2-1.7-1.7-1.7C4.2,21.2,4,21,4,20.7s0.2-0.5,0.5-0.5c2.2,0,3.3,1.1,4.2,1.9c0.6,0.6,1.1,1.1,1.8,1.1c0,0,0.5-0.1,0.5-1v-0.1c-3.6-1.2-6-4.2-6-7.6c0-1.7,0.7-3.5,1.9-4.9C6.4,8.1,7.1,6.4,8.1,5.4c0.1-0.1,0.3-0.2,0.5-0.1c1,0.3,1.8,1.1,2.5,1.9c1.2-0.4,2.5-0.9,3.8-0.9s2.7,0.5,3.8,0.9c0.7-0.8,1.6-1.6,2.5-1.9c0.2,0,0.4,0,0.5,0.1c1,1,1.7,2.8,1.2,4.2c1.3,1.4,1.9,3,1.9,4.6C25,17.8,22.4,21,18.7,22.1z"/>
              </svg>
            </a>
          </c-box>
          <c-box
            width="55px"
            height="55px"
            backgroundColor="#000000"
            borderRadius="50%"
            margin="0 5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   viewBox="0 0 30 30" xml:space="preserve" class="icon">
                <path d="M7,30H1c-0.3,0-0.5-0.2-0.5-0.5v-19C0.5,10.2,0.7,10,1,10h6c0.3,0,0.5,0.2,0.5,0.5v19C7.5,29.8,7.3,30,7,30z M1.5,29h5V11h-5V29z"/>
                <path d="M29,30h-6c-0.3,0-0.5-0.2-0.5-0.5V18c0-1.4-0.5-2.4-1.4-2.8c-1-0.4-2.4,0-3.6,1v13.3c0,0.3-0.2,0.5-0.5,0.5h-6c-0.3,0-0.5-0.2-0.5-0.5v-19c0-0.3,0.2-0.5,0.5-0.5h6c0.3,0,0.5,0.2,0.5,0.5v0.4c1.9-1.4,5.5-2.5,8.2-1.5c1.7,0.6,3.8,2.4,3.8,7.1v13C29.5,29.8,29.3,30,29,30z M23.5,29h5V16.5c0-3.3-1.1-5.4-3.2-6.1c-2.8-1.1-6.8,0.7-8,2c-0.1,0.2-0.4,0.2-0.6,0.1s-0.3-0.3-0.3-0.5v-1h-5v18h5V16c0-0.1,0.1-0.3,0.1-0.4c1.4-1.4,3.3-2,4.8-1.4c1.3,0.5,2.1,1.9,2.1,3.7V29z"/>
                <path d="M4,7C2.1,7,0.5,5.4,0.5,3.5S2.1,0,4,0s3.5,1.6,3.5,3.5S5.9,7,4,7z M4,1C2.6,1,1.5,2.1,1.5,3.5S2.6,6,4,6s2.5-1.1,2.5-2.5S5.4,1,4,1z"/>
              </svg>
            </a>
          </c-box>
        </c-flex>
      </c-box>
    </c-flex>
    <c-box
      position="absolute"
      right="10vw"
      top="45vh"
    >
      <c-image
        size="450px"
        objectFit="cover"
        :src="require('@/assets/images/coffee.gif')"
        alt=""
      />
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
  CHeading,
  CStack,
  CImage
} from '@chakra-ui/vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
    CBox,
    CText,
    CFlex,
    CHeading,
    CStack,
    CImage
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
.about-container {
  width: 100vw;
  height: 100vh;
  overflow: scroll;
}
.icon {
  width: 30px;
  height: 30px;
  fill: #ffffff;
}
</style>
