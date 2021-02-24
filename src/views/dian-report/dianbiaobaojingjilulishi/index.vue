<template>
  <div class="list-page">
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
            <el-col :span="8">
              <el-form-item label="用户编号:">
                <el-input v-model="form.prop2" placeholder="搜索用户编号" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="用户名:">
                <el-input v-model="form.prop3" placeholder="搜索用户名" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="仪表编号:">
                <el-input v-model="form.prop4" placeholder="搜索仪表编号" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="商铺号:">
                <el-input v-model="form.prop5" placeholder="搜索商铺号" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" @click="getList">查询</el-button>
              <el-button type="success" @click="handleExport">导出</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </FilterPanel>

    <div class="list">
      <comm-table
        :data="tableData"
        :static-table="true"
        @selection-change="selectionChange"
      >
        <el-table-column label="编号" prop="field1" />
        <el-table-column label="表号" prop="field2" />
        <el-table-column label="商户号" prop="field3" />
        <el-table-column label="用户编号" prop="field4" />
        <el-table-column label="用户名" prop="field5" />
        <el-table-column label="消息" prop="field6" />
        <el-table-column label="发生时间" prop="field7" />
      </comm-table>
    </div>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'

export default {
  name: 'DianReportDianbiaobaojingjilulishi',
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      tableData: [
        {
          field1: '291',
          field2: '0191480503',
          field3: '224',
          field4: '0190044513',
          field5: '224',
          field6: '户号:224,现金缴费：20.00元,余额：',
          field7: '2020/10/9 13:56:21'
        },
        {
          field1: '290',
          field2: '0191480504',
          field3: '202',
          field4: '01900415',
          field5: '202',
          field6: '温馨提示:户名：调表测试账户,状态：欠费,(电费)剩余金额-558.50元,请及时充值。',
          field7: '2020/10/9 13:51:19'
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

