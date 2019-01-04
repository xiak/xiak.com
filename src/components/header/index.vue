<template>
  <nav class="nav" :class="className">
    <div class="header-wrapper">
      <a class="logo"><strong>{{ title }}</strong></a>
      <ul class="menu">
        <li class="hamburger" @click="toggleSideBar">
          <Hamburger  />
        </li>
        <li class="menu-item">
          <div class="menu-link">
            <el-button
              type="primary"
              size="medium"
              style="width: 100%"
              round
            >注册
            </el-button>
          </div>
        </li>
        <li class="menu-item">
          <a class="menu-link">首页</a>
        </li>
        <li class="menu-item">
          <a class="menu-link">人工智能</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import Hamburger from '@/components/hamburger';

export default {
  components: {
    Hamburger,
  },
  props: {
    className: {
      type: String,
      default: 'mobile, desktop',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar');
    },
  },
};
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  $headerBg: #191919;
  .nav {
    background: $headerBg;
    float: left;
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 5;
    .logo {
      position: absolute;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: center;
      justify-content: center;
      -ms-flex-align: center;
      align-items: center;
      top: 10px;
      bottom: 10px;
      left: 16px;
      width: 105px;
      color: #fcfcfc;
      font-size: 22px;
    }
    .hamburger {
      left: 100%;
      margin: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .hamburger {
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -ms-flexbox;
    display: flex;
    height: 60px;
    width: 70px;
    cursor: pointer;
  }

  .menu-item {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-inline-flexbox;
    display: inline-flex;
    height: 60px;
    position: relative;
    vertical-align: top;
  }

  .menu-link {
    font-family: inherit;
    font-size: 15px;
    color: #a4a4a4;
    display: block;
    font-weight: bold;
  }

  .desktop {
    display: none;
    .menu {
      display: -ms-flexbox;
      display: flex;
      height: 60px;
      -ms-flex-pack: center;
      justify-content: center;
      margin: 0 auto;
      .menu-item {
        -ms-flex-align: center;
        align-items: center;
        display: -ms-inline-flexbox;
        display: inline-flex;
        height: 60px;
        position: relative;
        vertical-align: top;
        .menu-link {
          box-sizing: border-box;
          color: #a4a4a4;
          padding: 10px 12px;
          &:hover {
            color: #ffffff;
          }
        }
      }
    }
  }

  .mobile {
    display: none;
    top: 0;
    left: 0;
    .logo {
      left: 0;
      margin: 0 auto;
      right: 0;
    }
    .menu {
      background: $headerBg;
      display: block;
      height: 100vh;
      overflow: visible;
      -webkit-overflow-scrolling: touch;
      padding: 10px 0;
      position: absolute;
      top: 0;
      .menu-item {
        display: block;
        height: auto;
        padding: 5px 10px;
      }
      .menu-link {
        box-sizing: border-box;
        display: block;
        line-height: 40px;
        padding: 0 10px;
        width: 100%;
        &:hover {
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: 603px) {
    .menu {
      left: -75%;
      width: 75%;
    }
  }

  @media (max-width: 1080px) {
    .mobile {
      display: block;
    }
  }

  @media (min-width: 1081px) {
    .desktop {
      display: block;
    }
  }

  @media (min-width: 604px) and (max-width: 1080px) {
    .menu {
      left: -43%;
      width: 43%;
    }
  }
</style>
