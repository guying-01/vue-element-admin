<!--
 * @Author       : gy
 * @Date         : 2021-02-16 18:26:27
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-16 20:22:50
 * @FilePath     : /yufufei/src/views/system-management/gateway/modules/add.vue
 * @Description  : 页面描述
-->
<template>
  <el-form :model="form" ref="form" style="padding:0 20px;" label-width="100px">
    <el-form-item label="网关编号">
      <el-input v-model="form.field1" disabled />
    </el-form-item>
    <el-form-item label="建筑名">
      <el-select v-model="form.field2" placeholder="请选择建筑名">
        <el-option label="建筑1" :value="1"></el-option>
        <el-option label="建筑2" :value="2"></el-option>
        <el-option label="建筑3" :value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="楼层中序号">
      <el-input v-model="form.field3" />
    </el-form-item>
    <el-form-item label="网关模式">
      <el-select v-model="form.field4" placeholder="请选择网关模式">
        <el-option label="TcpServer模式" :value="1"></el-option>
        <el-option label="TcpClient模式" :value="2"></el-option>
        <el-option label="NB网关模式" :value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="IP">
      <el-input v-model="form.field5" />
    </el-form-item>
    <el-form-item label="TCP端口">
      <el-input v-model="form.field6" />
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.field7" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      form: {
        field1: "019136",
        field3: "0",
        field4: 1,
        field6: "0"
      }
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
