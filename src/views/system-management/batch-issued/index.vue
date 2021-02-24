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
              <el-form-item label="关键字:">
                <el-input v-model="form.prop2" placeholder="搜索关键字" />
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
    </div>

    <div class="list">
      <comm-table
        :data="tableData"
        :static-table="true"
        @selection-change="selectionChange"
      >
        <el-table-column label="" type="selection" />
        <el-table-column label="创建日期" prop="field1" width="150" />
        <el-table-column label="创建人" prop="field2" />
        <el-table-column label="加班时间开启" prop="field3" />
        <el-table-column label="加班时间" prop="field4" />
        <el-table-column label="合跳闸时间开启" prop="field5" />
        <el-table-column label="合闸时间" prop="field6" />
        <el-table-column label="跳闸时间" prop="field7" />
        <el-table-column label="欠费跳闸时间开启" prop="field8" />
        <el-table-column label="欠费跳闸开始时间" prop="field9" />
        <el-table-column label="欠费跳闸结束时间" prop="field10" />
        <el-table-column label="保电用户" prop="field11" />
        <el-table-column label="保电用户" prop="field12" />
        <el-table-column label="备注" prop="field13" />
        <el-table-column label="已下发" prop="field14" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="success"
              @click="handleDetail(scope)"
            >查看</el-button>
          </template>
        </el-table-column>
      </comm-table>
    </div>
    <el-drawer
      :visible="dialogVisible"
      :title="title"
      size="80%"
      @close="dialogVisible = false"
    >
      <Add ref="addDialog" />
      <div style="margin-left: 20px">
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >批量下发</el-button>
        <el-button
          type="default"
          @click="dialogVisible = false"
        >取消</el-button>
      </div>
    </el-drawer>

    <el-drawer :visible="detailVisible" size="50%" :title="title" @close="detailVisible = false">
      <Detail ref="detailDialog" />
    </el-drawer>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
import Add from './modules/add'
import Detail from './modules/detail'
export default {
  name: 'SystemManagementBatchIssued',
  components: { Add, Detail },
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      form: {},
      detailVisible: false,
      tableData: [
        {
          field1: '2021-02-07 01:15:22',
          field2: 'Acrel',
          field3: 'false',
          field4: '1:3',
          field5: 'false',
          field6: '1:7',
          field7: '0:6',
          field8: 'false',
          field9: '0:0',
          field10: '0:0',
          field11: 'false',
          field12: '1',
          field13: '',
          field14: 'true'
        },
        {
          field1: '2020-09-30 14:38:47',
          field2: 'Acrel',
          field3: 'false',
          field4: '1:1',
          field5: 'false',
          field6: '1:2',
          field7: '1:2',
          field8: 'false',
          field9: '2:3',
          field10: '3:4',
          field11: 'false',
          field12: '1',
          field13: '',
          field14: 'true'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleDetail(scope) {
      this.detailVisible = true
      this.title = '查看详情'
      this.$nextTick(() => {
        this.$refs.detailDialog.form = scope.row
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
