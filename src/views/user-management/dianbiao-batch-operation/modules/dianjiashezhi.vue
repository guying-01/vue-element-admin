<!--
 * @Author: gy
 * @Date: 2021-01-08 13:45:27
 * @LastEditors: gy
 * @LastEditTime: 2021-01-08 14:07:48
-->
<!--  -->
<template>
  <el-dialog title="电价设置" :visible="parent.visible1">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="尖电价(元/度):">
        <el-input v-model="form.price1" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="峰电价(元/度):">
        <el-input v-model="form.price2" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="平电价(元/度):">
        <el-input v-model="form.price3" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="谷电价(元/度):">
        <el-input v-model="form.price4" placeholder="请输入" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button type="primary" @click="handleConfirm">确认</el-button>
      <el-button @click="parent.visible1 = false">取消</el-button>
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
        price2: '1',
        price3: '1',
        price4: '1'
      }
    }
  },
  methods: {
    handleConfirm() {
      this.parent.visible1 = false
      this.$message({ type: 'success', message: '修改成功' })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
