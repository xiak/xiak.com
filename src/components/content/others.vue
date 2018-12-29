<template>
  <div class="work-others">
    <div class="work-card" v-for="(work, key) in otherWorks" :key="key">
      <a class="work-card-cover">
        <img
          class="card-cover-image"
          :src="work.cover"
          :srcset="work.cover" :alt="work.title" :title="work.title" />
      </a>
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
              <a v-for="(t, tk) in work.tags" :key="tk">
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
                <span>{{ work.star }}</span>
              </span>
              <span class="stat">
                <i class="el-icon-view"></i>
                <span>{{ work.watch }}</span>
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
          cover: 'https://c.pxhere.com/images/fe/d9/d232b859ff1ec0c86f83f46f1572-1460977.jpg!d',
          title: '野马战斗机',
          owner: '侠客',
          tags: ['Art Design', 'Illustration'],
          star: 8,
          watch: 9,
        },
        {
          cover: 'https://c.pxhere.com/images/4d/9b/b21ee1c40938e468be8014e16a9d-1436919.jpg!d',
          title: '老爷车',
          owner: '侠客',
          tags: ['Art Design', 'Illustration'],
          star: 5,
          watch: 6,
        },
        {
          cover: 'https://c.pxhere.com/images/7d/8e/9dfc9b5f0dc531a9022aa57d876c-1445391.jpg!d',
          title: '概念车',
          owner: '侠客',
          tags: ['Art Design', 'Illustration'],
          star: 3,
          watch: 2,
        },
        {
          cover: 'https://c.pxhere.com/photos/1b/2a/car_rust_vintage_retro_old_car-18068.jpg!d',
          title: '报废车',
          owner: '侠客',
          tags: ['Art Design', 'Illustration'],
          star: true,
          watch: true,
        },
        {
          cover: 'https://c.pxhere.com/photos/96/0c/old_car_steering_wheel_odometer_speedometer_old_cars_vintage-1051844.jpg!d',
          title: '古董车的方向盘',
          owner: '侠客',
          tags: ['Art Design', 'Illustration'],
          star: true,
          watch: true,
        },
        {
          cover: 'https://c.pxhere.com/photos/f2/f5/aircraft_double_decker_airport_army_aviation_space_aviation_runway_dawn_sunrise-770021.jpg!d',
          title: '灰机',
          owner: '侠客',
          tags: ['Art Design', 'Illustration'],
          star: true,
          watch: true,
        },
      ],
    };
  },
};
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
    position: relative;
    float: left;
    background-color: #fff;
    width: 202px;
    min-height: 300px;
    color: #191919;
    text-align: left;
    margin: 0 20px 20px 0;
    box-sizing: border-box;
    box-shadow: 0 1px 2px rgba(25,25,25,0.2);
    border-radius: 6px 6px 3px 3px;
    cursor: pointer;
    z-index: 2;
    &::after {
      content: '';
      display: block;
    }
  }
  .work-card-cover {
    position: relative;
    display: block;
    margin: 0;
    padding-top: 78.21782%;
    background-color: #f9f9f9;
    border-radius: 6px 6px 0 0;
    &::after {
      border-radius: 3px 3px 0 0;
    }
    &:not(:hover) {
      &::after {
        opacity: 0;
      }
    }
    img {
      height: 100%;
    }
  }
  .card-cover-image {
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    border-radius: 3px 3px 0 0;
  }
  .work-card-detail {
    padding: 7px 10px 0 10px;
  }
  .crad-title-link {
    display: block;
    height: 36px;
    line-height: 1.35;
    font-family: inherit;
    font-size: 13px;
    line-height: 1.3;
    color: #191919;
    font-weight: bold;
    margin-bottom: 9px;
    overflow: hidden;
  }
  .work-card-owner {
    position: relative;
    height: 36px;
    &::after {
      position: absolute;
      display: block;
      width: 10px;
      height: 1px;
      content: '';
      left: 0;
      bottom: 5px;
      background-color: #ccc;
    }
  }
  .owner-list {
    position: relative;
    display: inline-block;
    font-family: inherit;
    font-size: 13px;
    line-height: 1.3;
    max-width: 100%;
    padding-bottom: 10px;

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
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    display: flex;
    font-family: inherit;
    font-size: 11px;
    font-weight: bold;
    align-items: center;
    border-top: 1px #f2f2f2 solid;
    box-sizing: border-box;
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
    position: relative;
    display: flex;
    float: left;
    margin-right: 13px;
    vertical-align: middle;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
    i {
      fill: #a4a4a4;
      margin-right: 7px;
    }
  }

  @media (max-width: 350px) {
    .work-card {
      margin: 0 5px 5px 0;
      width: 150px
    }
  }

  @media (min-width: 351px) and (max-width: 380px) {
    .work-card {
      margin: 0 10px 10px 0
    }
  }

  @media (max-width: 603px) {
    .work-card {
      margin: 0 15px 20px 0;
      width: 170px;
    }
    .work-others {
      height: auto;
      justify-content: space-between;
      padding: 15px;
      font-size: 12px;
      .work-card {
        background: none;
        margin: 0 .5%;
        min-height: 0;
        min-width: 0;
        width: 32%;
        &:nth-child(n+4) {
          display: none;
        }
        .card-cover-image, img {
          border-radius: 0;
          height: 100%;
          width: 100%;
        }
        .work-card-detail {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1024px) and (min-width: 604px) {
    .work-others {
      .work-card {
        &:nth-child(n+5) {
          display: none;
        }
      }
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
