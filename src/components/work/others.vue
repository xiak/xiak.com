<template>
  <div class="work-others">
    <div class="work-card" v-for="work in otherWorks">
      <div class="work-card-cover">
        <img
          class="card-cover-image"
          src="work.cover"
          srcset="https://mir-s3-cdn-cf.behance.net/projects/202/450c0673303787.Y3JvcCwxMTkyLDkzMywxMDMsMA.png, https://mir-s3-cdn-cf.behance.net/projects/404/450c0673303787.Y3JvcCwxMTkyLDkzMywxMDMsMA.png 2x" alt="Provincia" title="Provincia">
      </div>
      <div class="work-card-detail">
        <div class="work-card-title">
          <a class="crad-title-link">{{ work.title }}</a>
        </div>
        <div class="work-card-owner">
          <span class="owner-list">
            <div class="owner">
              <a>{{ work.owner }}</a>
            </div>
          </span>
        </div>
        <div class="work-card-field">
          <ul class="field-list">
            <li class="field">
              <a v-for="t in work.tags">
                {{ t }},
              </a>
            </li>
          </ul>
        </div>
        <div class="work-card-stat">
          <div class="stat-container">
            <a class="stat-link">
            <span class="stat">
              <span class="stat">
                <i class="el-icon-star-off" style="fill: #000;"></i>
                <span>7</span>
              </span>
              <span class="stat">
                <i class="el-icon-view"></i>
                <span>8</span>
              </span>
            </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otherWorks: [
        {
          cover: 'https://mir-s3-cdn-cf.behance.net/projects/202/450c0673303787.Y3JvcCwxMTkyLDkzMywxMDMsMA.png',
          title: '这是标题，一个比较长的标题，汉字组成的标题',
          owner: '侠客',
          tags: ['Art Design', 'Illustration'],
          star: true,
          watch: true,
        },
        {
          cover: 'https://mir-s3-cdn-cf.behance.net/projects/202/450c0673303787.Y3JvcCwxMTkyLDkzMywxMDMsMA.png',
          title: '这是标题，一个比较长的标题，汉字组成的标题',
          owner: '侠客',
          tags: ['Art Design', 'Illustration'],
          star: true,
          watch: true,
        },
        {
          cover: 'https://mir-s3-cdn-cf.behance.net/projects/202/450c0673303787.Y3JvcCwxMTkyLDkzMywxMDMsMA.png',
          title: '这是标题，一个比较长的标题，汉字组成的标题',
          owner: '侠客',
          tags: ['Art Design', 'Illustration'],
          star: true,
          watch: true,
        },
      ],
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .work-others, .work-others * {
    box-sizing: border-box;
  }
  .work-others {
    background: #212121;
    height: 392px;
    padding: 50px 6px 50px 28px;
    text-align: center;
    .work-card {
      display: inline-block;
      float: none;
      margin-bottom: 100px;
    }
  }
  .work-card {
    border-radius: 6px 6px 3px 3px;
    box-sizing: border-box;
    color: #191919;
    float: left;
    margin: 0 20px 20px 0;
    min-height: 300px;
    position: relative;
    text-align: left;
    width: 202px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(25,25,25,0.2);
    cursor: pointer;
    position: relative;
  }
  .work-card-cover {
    padding-top: 78.21782%;
    background-color: #f9f9f9;
    border-radius: 6px 6px 0 0;
    display: block;
    margin: 0;
    position: relative;
  }
  .card-cover-image {
    border-radius: 3px 3px 0 0;
    bottom: 0;
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
  .work-card-detail {
    padding: 7px 10px 0 10px;
  }
  .crad-title-link {
    font-family: inherit;
    font-size: 13px;
    line-height: 1.3;
    color: #191919;
    display: block;
    font-weight: bold;
    height: 36px;
    line-height: 1.35;
    margin-bottom: 9px;
    overflow: hidden;
  }
  .work-card-owner {
    height: 36px;
    position: relative;
    &::after {
      background-color: #ccc;
      bottom: 5px;
      content: '';
      display: block;
      height: 1px;
      left: 0;
      position: absolute;
      width: 10px;
    }
  }
  .owner-list {
    font-family: inherit;
    font-size: 13px;
    line-height: 1.3;
    display: inline-block;
    line-height: 1.6;
    max-width: 100%;
    padding-bottom: 10px;
    position: relative;
  }
  .owner {
    display: block;
    float: left;
    line-height: 18px;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
  .owner:last-child {
    margin-bottom: 0;
  }
  .work-card-field {
    height: 23px;
  }
  .field-list {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    margin-bottom: 6px;
    margin-top: 2px;
  }
  .field {
    font-family: inherit;
    font-size: 11px;
    font-weight: bold;
    font-weight: normal;
  }
  .work-card-stat {
    font-family: inherit;
    font-size: 11px;
    font-weight: bold;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px #f2f2f2 solid;
    box-sizing: border-box;
    display: -ms-flexbox;
    display: flex;
    font-weight: normal;
    padding: 7px 0;
  }
  .stat-container {
    display: flex;
    width: 100%;
  }
  .stat-link {
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .stat {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    float: left;
    font-size: 13px;
    font-weight: bold;
    margin-right: 13px;
    position: relative;
    vertical-align: middle;
    i {
      fill: #a4a4a4;
      margin-right: 7px;
    }
  }
  @media (min-width: 604px) {
    .work-others {
      position: relative;
      z-index: 1;
    }
  }

  @media (max-width: 1024px) {
    .work-card {
      min-height: 0;
    }
  }


</style>
