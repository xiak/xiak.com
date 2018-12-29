<template>
  <div class="module-text">
    <div :class="className">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    linkset: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .module-text {
    margin: 0 auto;
    word-wrap: break-word;
  }
  .main-text {
    margin: 0 20px;
    color: #696969;
    font-family: arial,helvetica,sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 1.7em;
    text-align: left;
    text-decoration: none;
  }
  .module-image-wrap {
    display: inline-block;
    max-width: 100%;
  }

  @media (max-width: 603px) {
    .main-text {
      margin: 0 10px;
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) and (min-width: 604px) {
    .main-text {
      margin: 0 15px;
      font-size: 18px;
    }
  }
</style>
