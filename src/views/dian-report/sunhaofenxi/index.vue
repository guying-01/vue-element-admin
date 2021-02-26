<template>
  <div class="list-page">
    <div class="filters">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        label-position="left"
      >
        <el-form-item label="创建时间:">
          <el-date-picker
            v-model="form.prop1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="operation">
      <el-button type="primary">查询</el-button>
      <el-button type="success">导出</el-button>
      <el-button type="warning">总表管理</el-button>
    </div>
    <div class="list">
      <comm-table
        :data="tableData"
        :static-table="true"
        @selection-change="selectionChange"
      >
        <el-table-column label="开始时间" prop="field1" />
        <el-table-column label="结束时间" prop="field2" />
        <el-table-column label="表号" prop="field3" />
        <el-table-column label="商铺号" prop="field4" />
        <el-table-column label="用户名" prop="field5" />
        <el-table-column label="用户编号" prop="field6" />
        <el-table-column label="上次抄表" prop="field7" />
        <el-table-column label="本次抄表" prop="field8" />
        <el-table-column label="用电量" prop="field9" />
        <el-table-column label="互感器倍率" prop="field10" />
        <el-table-column label="上次余额" prop="field11" />
        <el-table-column label="本次余额" prop="field12" />
        <el-table-column label="售电金额" prop="field13" />
        <el-table-column label="使用金额" prop="field14" />
        <el-table-column label="备注" prop="field15" />
      </comm-table>
    </div>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
// TODO
export default {
  name: 'DianReportSunhaofenxi',
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      tableData: [
        { field1: '2021-02-25', field2: '2021-02-25', field3: '019001NB0001', field4: '0201', field5: 'nb0001', field6: '01900374', field7: '1.00', field8: '1.00', field9: '0.00', field10: '1', field11: '1460.00', field12: '1460.00', field13: '0.00', field14: '0.00', field15: '上海实验室N' },
        { field1: '2021-02-25', field2: '2021-02-25', field3: '019001NB0001', field4: '0202', field5: '上海实验室NB表2', field6: '01900513', field7: '0.23', field8: '0.00', field9: '-0.23', field10: '1', field11: '100.00', field12: '0.00', field13: '0.00', field14: '100.00', field15: '上海实验室N' }
      ],
      checkAll: false,
      form: {}
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
