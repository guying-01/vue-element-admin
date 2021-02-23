<template>
  <div class="list-page">
    <FilterPanel>
      <div class="filters">
        <el-form
          ref="form"
          :model="form"
          label-width="100px"
          label-position="left"
        >
          <el-row :gutter="20">
            <el-col :span="12">
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
            <el-col :span="6">
              <el-form-item label="关键词">
                <el-input
                  v-model="form.prop2"
                  placeholder="搜索仪表编号、商铺号、IMEI"
                />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" @click="handleSearch">查询</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </FilterPanel>
    <div class="operation">
      <el-button type="primary" @click="handleAdd">添加</el-button>
      <el-button type="warning" @click="handleDelete">删除</el-button>
      <el-button type="danger" @click="handleExport">导出</el-button>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :limit="3"
        :show-file-list="false"
      >
        <el-button type="primary">批量导入</el-button>
      </el-upload>
    </div>

    <div class="list">
      <comm-table
        :data="tableData"
        :static-table="true"
        @selection-change="selectionChange"
      >
        <el-table-column label="" type="selection" />
        <el-table-column label="创建日期" prop="field1" width="150" />
        <el-table-column label="仪表编号" prop="field2" />
        <el-table-column label="网关编号" prop="field3" />
        <el-table-column label="商铺号" prop="field4" />
        <el-table-column label="型号" prop="field5" />
        <el-table-column label="是否后付费表" prop="field6" />
        <el-table-column label="CT变化" prop="field7" />
        <el-table-column label="IMEI" prop="field8" />
        <el-table-column label="备注" prop="field9" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="success"
              @click="handleEdit(scope)"
            >编辑</el-button>
          </template>
        </el-table-column>
      </comm-table>
    </div>
    <el-drawer
      :visible="dialogVisible"
      :title="title"
      size="50%"
      @close="dialogVisible = false"
    >
      <Add ref="addDialog" />
      <div style="margin-left: 20px">
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确认</el-button>
        <el-button
          type="default"
          @click="dialogVisible = false"
        >取消</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
import Add from './modules/add'
export default {
  name: 'SystemManagementNbDianbiao',
  components: { Add },
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      form: {},
      tableData: [
        {
          field1: '2021-02-07 01:15:22',
          field2: '019097NB0001',
          field3: '019097',
          field4: 'NB01',
          field5: 'DDSY',
          field6: 'false',
          field7: '1',
          field8: '864162044320680',
          field9: ''
        },
        {
          field1: '2020-08-17 16:35:01',
          field2: '019097NB0001',
          field3: '019089',
          field4: '101',
          field5: 'DDSY1352',
          field6: 'false',
          field7: '1',
          field8: '869951040007506',
          field9: ''
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.upload-demo {
  display: inline-block;
  margin: 0 10px;
}
</style>
