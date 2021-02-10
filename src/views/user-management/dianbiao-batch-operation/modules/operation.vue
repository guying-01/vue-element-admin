<!--
 * @Author: gy
 * @Date: 2021-01-08 15:59:28
 * @LastEditors: gy
 * @LastEditTime: 2021-01-08 16:08:35
-->
<!--  -->
<template>
  <el-dialog :visible="parent.visible5">
    <el-table
      :data="parent.selection"
    >
      <el-table-column label="户号" prop="field2" />
      <el-table-column label="表号" prop="field1" />
      <el-table-column label="下发指令">
        <template>
          <span v-if="parent.operationIndex == 1">强制合闸</span>
          <span v-else-if="parent.operationIndex == 2">强制拉闸</span>
          <span v-else-if="parent.operationIndex == 3">恢复预付费</span>
        </template>
      </el-table-column>
      <el-table-column label="通讯状态" prop="field3" />

    </el-table>

    <span slot="footer">
      <el-button type="primary" @click="handleConfirm">确认下发</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  inject: ['parent'],
  props: {},
  data() {
    return {}
  },

  methods: {
    handleConfirm() {
      // parent.operationIndex 1强制合闸 2强制拉闸 3恢复预付费
      this.$message({ type: 'success', message: '下发成功' })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
