<template>
  <div class="owner-info" :class="className">
    <div class="owner-list">
      <a target="_blank" href="#tron" class="owner-avatar">
        <img
          class="owner-avatar-image"
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        >
      </a>
      <div class="owner-name-list">
        <div class="owner-name">
          <a href="#">{{ owner }}</a>
        </div>
        <div class="owner-location">
          <a href="#" class="owner-location-link">Tokyo, Japan</a>
        </div>
      </div>
    </div>
    <div class="owner-action">
      <div class="action-container">
        <div class="btn-container follow">
          <el-button
            type="primary"
            size="mini"
            style="width: 100%"
            round>关注
          </el-button>
        </div>
        <div class="btn-container message">
          <el-button
            size="mini"
            style="width: 100%"
            round>消息
          </el-button>
        </div>
      </div>
      <div class="action-container-small">
        <div class="btn-container follow">
          <el-button
            type="primary"
            size="mini"
            style="width: 100%"
            round>关注
          </el-button>
        </div>
        <div class="btn-container message">
          <el-button
            size="mini"
            style="width: 100%"
            icon="el-icon-message"
            round>消息
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    className: {
      type: String,
      default: 'owner-info-header, owner-info-bar',
    },
    owner: {
      type: String,
      default: '',
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .work-mobile-header {
    .owner-list {
      margin-bottom: 0;
      overflow: visible;
    }
    .owner-name {
      max-width: 165px;
    }
  }

  .owner-list {
    margin-bottom: 15px;
    overflow: hidden;
    position: relative;
  }

  .owner-info, .owner-info * {
    box-sizing: border-box;
  }

  .owner-info {
    .owner-action {
      margin: 0;
    }
  }

  .action-container-small {
    display: none;
  }

  .btn-container {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
  }

  .owner-name {
    position: relative;
    display: inline-block;
    color: #3d3d3d;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
    line-height: normal;
    max-width: 185px;
    a {
      color: #3d3d3d;
    }
  }


  .owner-avatar {
    background: rgba(0,0,0,0.05);
    float: left;
  }

  .owner-avatar {
    display: block;
    background-color: #e8e8e8;
    border-radius: 50%;
    height: 35px;
    min-height: 35px;
    min-width: 35px;
    overflow: hidden;
    width: 35px;
  }

  .owner-location-link {
    max-width: 65%;
    line-height: normal;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #6f6f6f;
    font-weight: normal;
    text-decoration: none;
  }

  .owner-info-header {
    .owner-location {
      display: none;
    }
    .owner-list>.owner-avatar,
    &>.owner-avatar {
        height: 50px;
        min-height: 50px;
        min-width: 50px;
        width: 50px;
    }
    .follow {
      min-width: 70px;
    }
    .message {
      display: none;
    }
  }

  .owner-info-bar {
    .owner-location-link {
      color: #b8b8b8;
    }
    .owner-name {
      color: #ffffff;
      font-size: 20px;
      font-weight: normal;
      max-width: 65%;
      a {
        color: #ffffff;
      }
    }
    .owner-avatar {
      margin-right: 10px;
    }
    .owner-list>.owner-avatar,
    &>.owner-avatar {
        background-color: #212121;
        height: 90px;
        min-height: 35px;
        min-width: 35px;
        width: 90px;
    }
    .owner-action {
      bottom: -1px;
      left: 100px;
      position: absolute;
    }
    .action-container-small {
      float: right;
    }
    .follow {
      float: left;
      min-width: 123px;
      margin-right: 10px;
    }
    .message {
      display: block;
      float: left;
      min-width: 123px;
    }
  }

  .owner-avatar-image:only-of-type {
    display: block;
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 603px) {
    .owner-info {
      max-width: calc(100% - 140px);
      .owner-location-link {
        max-width: 50%;
      }
    }
    .owner-info-bar {
      height: 35px;
      .owner-list>.owner-avatar,
      &>.owner-avatar {
        height: 35px;
        width: 35px;
      }
      .action-container {
        display: none;
      }
      .action-container-small {
        display: block;
        float: right;
      }
      .follow {
        min-width: 0;
      }
      .message {
        min-width: 0;
      }
    }
    .owner-name-list {
      .owner-name {
        font-size: 15px !important;
        line-height: 18px;
      }
    }
    .owner-action {
      height: 25px;
      margin: 0;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-48%);
    }
    .work-mobile-header {
      .owner-list {
        -ms-flex-align: center;
        align-items: center;
        display: -ms-flexbox;
        display: flex;
      }
      .owner-name-list {
        max-width: 100%;
      }
      .owner-name {
        max-width: 100%;
      }
      .owner-action {
        margin: 0;
        right: 14px;
        width: auto !important;
      }
    }
  }

  @media (max-width: 1024px) {
    .owner-list>.owner-avatar {
      margin-right: 15px;
    }
  }

  @media (max-width: 1080px) {
    .btn-container:first-of-type {
      margin-left: 0;
    }
  }
</style>
