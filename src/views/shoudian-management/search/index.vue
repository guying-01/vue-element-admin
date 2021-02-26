<template>
  <div class="list-page">
    <div class="filters">
      <FilterPanel>
        <div class="filters">
          <el-form
            ref="form"
            :model="form"
            label-width="80px"
            label-position="left"
          >
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="创建时间:">
                  <el-date-picker
                    v-model="form.prop1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="仪表编号:">
                  <el-input v-model="form.prop2" placeholder="仪表编号" />
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="用户编号:">
                  <el-input v-model="form.prop3" placeholder="用户编号" />
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="用户名称:">
                  <el-input v-model="form.prop4" placeholder="用户名称" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="商铺号:">
                  <el-input v-model="form.prop5" placeholder="商铺号" />
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="售电类型:">
                  <el-select v-model="form.prop6" placeholder="请选择">
                    <el-option label="全部" value="0" />
                    <el-option label="正常售电" value="1" />
                    <el-option label="冲正" value="2" />
                    <el-option label="退电" value="3" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-button type="primary" @click="getList">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </FilterPanel>
    </div>
    <div class="operation">
      <el-button type="primary" @click="handleAdd(0)">新增售电</el-button>
      <el-button type="warning" @click="handleAdd(1)">新增退电</el-button>
      <el-button type="danger" @click="handleAdd(2)">新增冲正</el-button>
      <el-button type="primary" @click="handleDetail">查看详细</el-button>
      <el-button type="warning" @click="handleIssued">在线支付重新下发</el-button>
      <el-button type="danger" @click="handleExport">导出</el-button>
    </div>
    <div class="list">
      <comm-table
        :data="tableData"
        :static-table="true"
        @selection-change="selectionChange"
      >
        <el-table-column type="selection" />
        <el-table-column label="创建日期" prop="field1" width="150" />
        <el-table-column label="创建人" prop="field2" />
        <el-table-column label="用户编号" prop="field3" />
        <el-table-column label="用户名" prop="field4" />
        <el-table-column label="表号" prop="field5" />
        <el-table-column label="商铺号" prop="field6" />
        <el-table-column label="金额(元)" prop="field7" />
        <el-table-column label="付款方式" prop="field8" />
        <el-table-column label="售电类型" prop="field9" />
        <el-table-column label="上次购电次数" prop="field10" />
        <el-table-column label="上次累计金额" prop="field11" />
        <el-table-column label="备注" prop="field12" />
      </comm-table>
    </div>
    <el-drawer :visible="detailDialogVisible" title="详情" @close="detailDialogVisible = false">
      <Detail />
      <div class="footer">
        <el-button type="primary" @click="handleExport">单据打印</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
import Detail from './modules/detail'
export default {
  name: 'ShoudianManagementSearch',
  components: { Detail },
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      detailDialogVisible: false,
      form: {},
      tableData: [
        { field1: '2021-02-24 16:03:32', field2: 'Acrel', field3: '01900534', field4: '隆基泰和', field5: '019115NB0001', field6: '101', field7: '500', field8: '现金缴费', field9: '正常售电', field10: '0', field11: '0', field12: '' },
        { field1: '2021-02-24 15:59:52', field2: 'Acrel', field3: '01900534', field4: '隆基泰和', field5: '019115NB0001', field6: '101', field7: '0', field8: '现金缴费', field9: '正常售电', field10: '0', field11: '0', field12: '开户首充' }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleAdd(index) {
      if (index === 0) {
        this.$router.push({ path: '/shoudian-management/add-sale' })
      } else if (index === 1) {
        this.$router.push({ path: '/shoudian-management/add-back' })
      } else {
        this.$router.push({ path: '/shoudian-management/add-chongzheng' })
      }
    },
    handleIssued() {
      if (this.selection.length == 0) {
        return this.$message({ type: 'error', message: '请至少选择一条记录' })
      }

      this.$message({ type: 'success', message: '操作成功' })
    },
    handleDetail() {
      this.detailDialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  padding:20px;
}
</style>
