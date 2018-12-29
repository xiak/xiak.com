<template>
  <div class="work-summary">
    <div class="work-title">{{ title }}</div>
    <div class="work-fields">
      <ul>
        <li class="work-fields-item" v-for="(tag, key) in tags" :key="key">
          <a :href="tag.link">{{ tag.name }}</a>,
        </li>
      </ul>
    </div>
    <div class="work-time">
      发布时间: <span>{{ pubTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkSummary',
  props: {
    title: {
      type: String,
      default: '',
    },
    tags: {
      required: true,
      default: () => [],
      type: Array,
    },
    pubTime: {
      type: String,
      default: '',
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .work-title {
    color: #262626;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    max-width: 100%;
    word-wrap: break-word;
  }
  .work-fields {
    font-size: 13px;
    line-height: 18px;
    margin: 2px 0 0;
  }
  .work-fields-item {
    display: inline;
    a {
      color: dimgray;
    }
  }
  .work-time {
    color: #a4a4a4;
    font-size: 11px;
    margin: 10px 0 0;
  }
  @media (max-width: 1024px) {
    .work-title {
      height: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
