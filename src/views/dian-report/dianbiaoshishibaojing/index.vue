<template>
  <div class="list-page">
    <div class="filters">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        label-position="left"
      >
        <el-form-item label="显示类别:">
          <el-select v-model="form.prop1" placeholder="请选择">
            <el-option label="全部" value="0" />
            <el-option label="告警1" value="1" />
            <el-option label="告警2" value="2" />
            <el-option label="欠费" value="3" />
            <el-option label="分闸" value="4" />
            <el-option label="过载" value="5" />
            <el-option label="欠压" value="6" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
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
        <el-table-column label="商户号" prop="field2" />
        <el-table-column label="用户名" prop="field3" />
        <el-table-column label="剩余金额" prop="field4" />
        <el-table-column label="告警状态" prop="field5" />
        <el-table-column label="分闸" prop="field6" />
        <el-table-column label="过载" prop="field7" />
      </comm-table>
    </div>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'

export default {
  name: 'DianReportDianbiaoshishibaojing',
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      tableData: [
        {
          field1: '019001NB0002',
          field2: '0202',
          field3: '上海实验室NB表2',
          field4: '100.0',
          field5: '告警1',
          field6: '合闸',
          field7: '正常用电'
        },
        {
          field1: '0190080002',
          field2: '222',
          field3: '未开户',
          field4: '0',
          field5: '',
          field6: '',
          field7: ''
        }
      ],
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
