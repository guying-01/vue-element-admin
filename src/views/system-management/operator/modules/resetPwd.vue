<!--
 * @Author       : gy
 * @Date         : 2021-02-17 19:50:44
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-17 19:52:09
 * @FilePath     : /yufufei/src/views/system-management/operator/modules/resetPwd.vue
 * @Description  : 页面描述
-->
<template>
  <el-form :model="form" ref="form" style="padding:0 20px;" label-width="80px">
    <el-form-item label="新密码">
      <el-input v-model="form.field1" />
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="form.field2" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      form: {}
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
