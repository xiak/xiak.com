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
    margin: 0 20px;
    word-wrap: break-word;
  }
  .main-text {
    color: #696969;
    font-family: arial,helvetica,sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 1.7em;
    text-align: left;
    text-decoration: none;
  }
  .code-text {
    height: 500px;
    border: 1px solid #dddddd;
    border-radius: 5px;
  }
  .module-image-wrap {
    display: inline-block;
    max-width: 100%;
  }

  @media (max-width: 603px) {
    .main-text {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) and (min-width: 604px) {
    .main-text {
      font-size: 18px;
    }
  }
</style>
