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
              <el-form-item label="售电员:">
                <el-select v-model="form.prop3" placeholder="售电员">
                  <el-option label="Acrel管理员" value="0" />
                  <el-option label="演示账号" value="1" />
                  <el-option label="超级管理员" value="2" />
                  <el-option label="智电宝" value="3" />

                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="统计类型:">
                <el-select v-model="form.prop3" placeholder="统计类型">
                  <el-option label="日报表" value="0" />
                  <el-option label="月报表" value="1" />
                  <el-option label="年报表" value="2" />

                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </FilterPanel>

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
        <el-table-column label="销售员" prop="field1" />
        <el-table-column label="日期" prop="field2" />
        <el-table-column label="售电金额" prop="field3" />
        <el-table-column label="冲正金额" prop="field4" />
        <el-table-column label="退电金额" prop="field5" />
        <el-table-column label="财务收入" prop="field6" />
      </comm-table>
    </div>
    <BarChart style="margin-top:20px" :chart-data="tableData" />
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
import BarChart from './modules/chart'
export default {
  name: 'DianReportDianxiaoshou',
  components: { BarChart },
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      tableData: [
        {
          field1: '全部',
          field2: '2021-02-24',
          field3: '4150',
          field4: '0',
          field5: '1500',
          field6: '2650'
        },
        {
          field1: '全部',
          field2: '2021-02-23',
          field3: '570.1',
          field4: '0',
          field5: '691',
          field6: '-120.9'
        }
      ],
      form: {}
    }
  },
  created() {
    // 初始化筛选今天
    this.form.prop1 = [new Date(), new Date()]
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>

