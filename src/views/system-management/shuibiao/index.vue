<template>
  <div class="list-page">
    <FilterPanel>
      <div class="filters">
        <el-form
          ref="form"
          :model="form"
          label-width="140px"
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
              <el-form-item label="仪表编号、商铺号:">
                <el-input
                  v-model="form.prop2"
                  placeholder="搜索仪表编号、商铺号"
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
        <el-table-column label="生产编号" prop="field4" />
        <el-table-column label="商铺号" prop="field5" />
        <el-table-column label="型号" prop="field6" />
        <el-table-column label="备注" prop="field7" />
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
  name: 'SystemManagementShuibiao',
  components: { Add },
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      form: {},
      tableData: [
        {
          field1: '2021-02-07 01:15:22',
          field2: '1909301187',
          field3: '11',
          field4: '1909301187',
          field5: 'NB01',
          field6: 'NBWATER',
          field7: ''
        },
        {
          field1: '2021-02-07 01:15:22',
          field2: '1909301188',
          field3: '11',
          field4: '1909301188',
          field5: 'NB02',
          field6: 'NBWATER',
          field7: ''
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.upload-demo {
  display: inline-block;
  margin: 0 10px;
}
</style>
