<template>
  <div class="comments">
    <div class="comment-header">
      <div class="comment-count">
        <span>评论</span>:
        <span>666</span>
      </div>
      <div class="comment-sort">
        <div class="comment-sort-item">
          <div class="css-1xkrfon-Input e5i1odf0">最火</div>
        </div>
        <div class="comment-sort-item">
          <div class="css-1xkrfon-Input e5i1odf0">最新</div>
        </div>
      </div>
    </div>
    <div class="comment-login" data-is-show="true">
      <div class="comment-text">
        <h5>Login to Comment</h5>
      </div>
    </div>
  </div>
</template>

<script></script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .comments {
    padding: 5% 3%;
    clear: both;
    background-color: #fafafa;
    min-height: 390px;
    position: relative;
    z-index: 2;
    .comment-header {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-bottom: 20px;
      background: #fafafa;
      border-style: solid;
      border-color: #eeeeee;
      border-width: 1px 0;
      padding: 0 10px;
      font-size: 16px;
    }
    .comment-login {
      display: flex;
      height: 100px;
      margin-top: 5px;
      background: #fafafa;
      cursor: pointer;
      border: 1px solid #cfd8dc;
      border-radius: 3px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      .comment-text {
        margin: 0;
        color: #78909c;
      }
    }
    .comment-count {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      margin: 0;
      cursor: default;
      font-weight: 500;
    }
    .comment-sort {
      display: flex;
      line-height: 40px;
      color: #cfd8dc;
      &>div {
        cursor: pointer;
      }
      .comment-sort-item {
        color: rgb(55, 71, 79);
        opacity: 0.4;
        font-weight: 400;
        position: relative;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.18s ease-in-out 0s;
        outline: 0px;
        padding: 0px 12px;
        &:not(:first-child)::before {
          content: "";
          height: 40%;
          width: 1px;
          position: absolute;
          top: 50%;
          left: 0px;
          transform: translateY(-50%);
          display: block;
          z-index: 1;
          opacity: 1;
          background: rgb(55, 71, 79);
        }
        &:last-child {
          padding-right: 0;
        }
      }
    }
    .icon {
      width: 1.5em;
      height: 1.5em;
      vertical-align: middle;
      fill: #cfd8dc;
      overflow: hidden;
    }
  }
  @media (max-width: 603px) {
    .comments {
      min-height: 200px;
      .comment-header {
        font-size: 14px;
      }
      .comment-login {
        height: 70px;
      }
    }
  }

</style>
