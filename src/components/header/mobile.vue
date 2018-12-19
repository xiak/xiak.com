<template>
  <nav class="nav mobile">
    <div class="header">
      <a class="logo"><strong>{{ title }}</strong></a>
      <ul class="menu">
        <li class="hamburger" @click="toggle">
          <svg
            class="x-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 10"
            height="10"
            width="15"
          >
            <path d="M0 8h15v2H0zM0 4h15v2H0zM0 0h15v2H0z"></path>
          </svg>
        </li>
        <li class="menu-item">
          <a class="menu-link">首页</a>
        </li>
        <li class="menu-item">
          <a class="menu-link">人工智能</a>
        </li>
        <li class="menu-item">
          <div class="btn-container">
            <el-button
              size="medium"
              style="width: 100%"
              round>登录
            </el-button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      title: '侠客',
      isOpened: false,
    };
  },
  methods: {
    toggle() {
      this.isOpened = !this.isOpened;
      this.$emit('toggleSidemenu', this.isOpened);
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
    .x-icon {
      width: 35px;
      height: 16px;
      fill: #fff;
    }
  }

  .mobile {
    display: none;
    position: fixed;
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
    .btn-container {
      display: block;
      padding: 0 10px 10px;
    }
  }

  .x-icon {
    transition: fill 0.1s linear;
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

  .btn-container {
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
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

  @media (min-width: 604px) and (max-width: 1080px) {
    .menu {
      left: -43%;
      width: 43%;
    }
  }
</style>
