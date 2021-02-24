<template>
  <div class="list-page">
    <div class="operation">
      <el-button type="primary" @click="getList">查询</el-button>
      <el-button type="success" @click="handleExport">导出</el-button>
    </div>

    <div class="list">
      <comm-table
        :data="tableData"
        :static-table="true"
        @selection-change="selectionChange"
      >
        <el-table-column label="表号" prop="field1" />
        <el-table-column label="户号" prop="field2" />
        <el-table-column label="用户名" prop="field3" />
        <el-table-column label="失联状态" prop="field4" />
      </comm-table>
    </div>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'

export default {
  name: 'DianReportShiliandianbiao',
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      tableData: [
        { field1: '0190080002', field2: '222', field3: '未开户', field4: '失联' },
        { field1: '0190080101', field2: '006', field3: '006-1', field4: '失联' }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
