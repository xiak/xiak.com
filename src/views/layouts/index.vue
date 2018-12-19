<template>
  <div class="layout" :class="{'sidemenu-animate': isOpened, 'sidemenu-open': isOpened}">
    <!-- Desktop Navigation -->
    <DesktopHeader />
    <div class="main-container">
      <a class="main-container-block"></a>
      <!-- Mobile Navigation -->
      <MobileHeader v-on:toggleSidemenu="toggle" />
      <!-- Content -->
      <Content />
    </div>
    <Footer />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import DesktopHeader from '@/components/header/desktop';
import MobileHeader from '@/components/header/mobile';
import Content from '@/components/content';
import Footer from '@/components/footer';

export default {
  name: 'MySite',
  components: {
    Sidebar,
    DesktopHeader,
    MobileHeader,
    Footer,
    Content,
  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggle(data) {
      this.isOpened = data;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .layout {
    position: relative;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    transition: .5s;
  }

  .main-container {
    min-height: 100vh;
  }

  .main-container {
    padding-top: 60px;
  }

  @media (max-width: 603px) {
    .sidemenu-animate .main-container {
      box-shadow: -2px 0 2px rgba(0,0,0,0.3);
      transform: translateX(75%);
    }
  }

  @media (min-width: 604px) and (max-width: 1080px) {
    .sidemenu-animate .main-container {
      box-shadow: -2px 0 2px rgba(0,0,0,0.3);
      transform: translateX(43%);
    }
  }

  @media (max-width: 1080px) {
    .sidemenu-open{
      max-height: 100vh;
      overflow: hidden;
    }
    .main-container {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      display: block;
      height: 100%;
      left: 0;
      overflow: visible;
      top: 0;
      transition: transform .5s cubic-bezier(0.19, 1, 0.22, 1);
      z-index: 2;
    }
    .main-container-block {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      -webkit-tap-highlight-color: transparent;
      top: 0;
      width: 100%;
    }
  }

</style>
