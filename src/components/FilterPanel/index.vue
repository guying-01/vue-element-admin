<!--
 * @Author       : gy
 * @Date         : 2021-01-06 21:41:59
 * @LastEditors: gy
 * @LastEditTime: 2021-01-07 17:10:28
 * @FilePath     : /yufufei/src/components/FilterPanel/index.vue
 * @Description  : 页面描述
-->
<template>
  <div>
    <div class="title">
      <div>条件筛选</div>
      <div @click="isFold = !isFold">{{ isFold ? '展开' : '收起' }}</div>
    </div>
    <div ref="content" class="content">
      <div ref="wrap" class="wrap">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      isFold: false,
    };
  },
  watch: {
    isFold: {
      handler(val) {
        let cont = this.$refs["content"];
        if (val) {
          cont.style.height = 0 + "px";
        } else {
          cont.style.height = cont.scrollHeight + "px";
        }
      },
    },
  },
  mounted() {
    let cont = this.$refs["content"];
    cont.style.height = cont.scrollHeight + "px";
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.title {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #e8e9ee;
  padding: 14px 25px;
  color: #6b6c8f;
}

.content {
  transition: all linear 0.5s;
  overflow: hidden;
  .wrap {
    padding: 20px;
  }
}
</style>