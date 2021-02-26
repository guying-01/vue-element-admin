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
      <el-button type="warning" @click="zongbiaoDialogVisible = true">总表管理</el-button>
    </div>
    <div class="list">
      <comm-table
        :data="tableData"
        :static-table="true"
        default-expand-all
        row-keys="field1"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        @selection-change="selectionChange"
      >
        <el-table-column type="selection" />
        <el-table-column prop="field1" label="电表编号" />
        <el-table-column prop="field2" label="户号" />
        <el-table-column prop="field3" label="用电量" />
        <el-table-column prop="field4" label="支路总用电量" />
        <el-table-column prop="field5" label="能耗差值(支-总)" />
        <el-table-column prop="field6" label="百分比(支/总)" />
      </comm-table>
    </div>
    <el-dialog :visible="zongbiaoDialogVisible" title="总表管理" @close="zongbiaoDialogVisible = false">
      <ZongbiaoGuanli />
    </el-dialog>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
import ZongbiaoGuanli from './modules/zongbiaoguanli'
export default {
  name: 'DianReportSunhaofenxi',
  components: { ZongbiaoGuanli },
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      zongbiaoDialogVisible: false,
      tableData: [
        {
          field1: '0191480506',
          field2: '203',
          field3: '0',
          field4: '0',
          field5: '0',
          field6: '0%',
          children: [
            { field1: '0191480507', field2: '222', field3: '0' },
            { field1: '0191480508', field2: '204', field3: '0' }
          ]
        }
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
