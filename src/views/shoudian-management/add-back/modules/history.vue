<!--  -->
<template>
  <div>
    <div class="filters">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        label-position="left"
      >
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="年份:">
              <el-select v-model="form.prop1" placeholder="请选择">
                <el-option label="2018" value="2018" />
                <el-option label="2019" value="2019" />
                <el-option label="2020" value="2020" />
                <el-option label="2021" value="2021" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="月份:">
              <el-select v-model="form.prop1" placeholder="请选择">
                <el-option
                  v-for="item in [1, 12]"
                  :key="item"
                  :value="item"
                  :label="item"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" @click="getList">查询</el-button>
            <el-button type="success" @click="handleExport">导出</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="list">
      <comm-table
        :data="tableData"
        :static-table="true"
        @selection-change="selectionChange"
      >
        <el-table-column label="表号" prop="field1" width="100" />
        <el-table-column label="剩余金额" prop="field2" />
        <el-table-column label="电量总能" prop="field3" />
        <el-table-column label="尖电能" prop="field4" />
        <el-table-column label="峰电能" prop="field5" />
        <el-table-column label="平电能" prop="field6" />
        <el-table-column label="谷电能" prop="field7" />
        <el-table-column label="实时功率" prop="field8" />
        <el-table-column label="是否欠费" prop="field9" />
        <el-table-column label="已开户" prop="field10" />
        <el-table-column label="强制模式" prop="field11" />
        <el-table-column label="合闸状态" prop="field12" />
        <el-table-column label="是否失连" prop="field13" />
        <el-table-column label="采集时间" prop="field14" width="150" />
      </comm-table>
    </div>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
export default {
  components: {},
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      form: {},
      tableData: [
        {
          field1: '0190080101',
          field2: '0',
          field3: '0',
          field4: '0',
          field5: '0',
          field6: '0',
          field7: '0',
          field8: '0',
          field9: '',
          field10: '',
          field11: '',
          field12: '',
          field13: '失连',
          field14: '2019-11-13 15:25:42'
        },
        {
          field1: '0190080101',
          field2: '0',
          field3: '0',
          field4: '0',
          field5: '0',
          field6: '0',
          field7: '0',
          field8: '0',
          field9: '',
          field10: '',
          field11: '',
          field12: '',
          field13: '失连',
          field14: '2019-11-13 15:25:42'
        }
      ]
    }
  },

  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
