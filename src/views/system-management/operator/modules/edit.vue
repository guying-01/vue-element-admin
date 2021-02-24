<!--
 * @Author       : gy
 * @Date         : 2021-02-16 18:26:27
 * @LastEditors: gy
 * @LastEditTime: 2021-02-24 11:30:27
 * @FilePath     : /yufufei/src/views/system-management/operator/modules/edit.vue
 * @Description  : 页面描述
-->
<template>
  <el-form ref="form" :model="form" style="padding:0 20px;" label-width="100px">
    <el-form-item label="登录账号">
      <el-input v-model="form.field3" />
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.field3" />
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.field5" />
    </el-form-item>
    <el-form-item label="操作员角色">
      <el-select v-model="form.field6" placeholder="请选择">
        <el-option label="" :value="1">
          <div class="flex">
            <div>主键</div>
            <div>名称</div>
            <div>角色描述</div>
          </div>
        </el-option>
        <el-option label="019006" value="019006">
          <div class="flex">
            <div>190977979899</div>
            <div>租户</div>
            <div>财务</div>
          </div>
        </el-option>
        <el-option label="019008" value="019008">
          <div class="flex">
            <div>190977979899</div>
            <div />
            <div>财务</div>
          </div>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.field7" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {}
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.flex {
  justify-content: space-around;
  div {
    width: 150px;
  }
}
</style>
