<template>
  <div class="module-image">
    <div class="module-image-wrap">
      <img
        :src="link"
        :srcset="linkset"
      >
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
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .module-image {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    img {
      height: 100%;
      width: 100%;
      display: inline-block;
      max-width: 100%;
      vertical-align: middle;
    }
  }
  .module-image-wrap {
    display: inline-block;
    max-width: 100%;
  }
</style>
