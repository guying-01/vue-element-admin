<!--
 * @Author: gy
 * @Date: 2021-01-08 13:45:27
 * @LastEditors: gy
 * @LastEditTime: 2021-01-12 14:31:10
-->
<!--  -->
<template>
  <el-dialog title="报警设置" :visible="parent.visible3">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="告警金额1(元):">
        <el-input v-model="form.price1" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="告警金额2(元):">
        <el-input v-model="form.price2" placeholder="请输入" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button type="primary" @click="handleConfirm">确认</el-button>
      <el-button @click="parent.visible3 = false">取消</el-button>
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
        price1: '1',
        price2: '1'
      }
    }
  },
  methods: {
    handleConfirm() {
      this.parent.visible3 = false
      this.$message({ type: 'success', message: '修改成功' })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
