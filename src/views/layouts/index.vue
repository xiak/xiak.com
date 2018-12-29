<template>
  <div class="layout" :class="{'sidemenu-animate': sidebar.opened, 'sidemenu-open': sidebar.opened}">
    <!-- Desktop Navigation -->
    <Header :title="title" className="desktop" />
    <div class="main-container">
      <a class="main-container-block" ></a>
      <!-- Mobile Navigation -->
      <Header :title="title" className="mobile" />
      <!-- Content -->
      <Content />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import Content from '@/components/content';
import Footer from '@/components/footer';

export default {
  name: 'MySite',
  components: {
    Sidebar,
    Header,
    Footer,
    Content,
  },
  data() {
    return {
      title: '侠客',
    };
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .layout {
    position: relative;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .5s;
    z-index: 1;
  }

  .main-container {
    overflow: visible;
    height: 100%;
    min-height: 100vh;
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
      .main-container-block {
        display: block;
        z-index: 60;
      }
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
