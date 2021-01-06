<!--
 * @Author       : gy
 * @Date         : 2021-01-06 21:41:59
 * @LastEditors  : gy
 * @LastEditTime : 2021-01-06 21:48:39
 * @FilePath     : /yufufei/src/components/FilterPanel/index.vue
 * @Description  : 页面描述
-->
<template>
  <div>
    <div class="title">
      <div>条件筛选</div>
      <div>收起</div>
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props : {},
  data () {
    return {
    };
  },
  components: {},
  mounted(){},
  methods: {}
}

</script>
<style lang='scss' scoped>
.title{
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #e8e9ee;
  padding: 14px 25px;
  color:#6b6c8f;
}

.content{
  padding: 20px;
}
</style>