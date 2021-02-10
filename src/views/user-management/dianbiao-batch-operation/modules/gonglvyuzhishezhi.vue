<!--
 * @Author: gy
 * @Date: 2021-01-08 13:45:27
 * @LastEditors: gy
 * @LastEditTime: 2021-01-08 14:46:13
-->
<!--  -->
<template>
  <el-dialog title="功率阈值设置" :visible="parent.visible4">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="功率阈值(KW):">
        <el-input v-model="form.price1" placeholder="请输入" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button type="primary" @click="handleConfirm">确认</el-button>
      <el-button @click="parent.visible4 = false">取消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  inject: ['parent'],
  props: {
  },
  data() {
    return {
      form: {
        price1: '1'
      }
    }
  },
  methods: {
    handleConfirm() {
      this.parent.visible4 = false
      this.$message({ type: 'success', message: '修改成功' })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
