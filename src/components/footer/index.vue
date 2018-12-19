<template>
  <div class="footer wrapper">
    <div class="links">
      <a class="link" href="#">蜀ICP备1234567890号-1</a>
      <a class="link" href="#">关于我们</a>
      <a class="link" href="#">联系我们: admin@xiak.com</a>
    </div>
    <div class="links">
      <a class="link">Copyright © 2018 侠客 XIAK.COM, All Rights Reserved.</a>
    </div>
    <div class="links">
      <a class="link"></a>
    </div>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  .wrapper {
    padding: 12px 0;
  }
  .footer {
    background: #191919;
    box-sizing: border-box;
    font-family: inherit;
    position: relative;
    z-index: 5;
  }
  .links {
    display: block;
    margin-top: 15px;
    padding: 0 20px;
    text-align: center;
    .link {
      color: #a4a4a4;
      display: inline-block;
      font-size: 14px;
      line-height: 1.6;
      margin: 0 10px
    }
    .link:hover {
      color: #ffffff;
    }
  }

</style>
