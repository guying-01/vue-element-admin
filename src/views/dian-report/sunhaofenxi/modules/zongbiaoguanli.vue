<!--  -->
<template>
  <div class="list-page">
    <div class="operation">
      <el-button type="primary" @click="handleAdd">添加</el-button>
      <el-button type="warning" @click="handleDelete">删除</el-button>
    </div>
    <div class="filters">
      <el-form
        ref="form"
        :model="form"
        label-width="140px"
        label-position="left"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="关键字:">
              <el-input v-model="form.prop1" placeholder="搜索总表编号、分表编号" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="getList">查询</el-button>
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
        <el-table-column label="" type="selection" />
        <el-table-column label="总表编号" prop="field1" />
        <el-table-column label="子表编号" prop="field2" />
        <el-table-column label="备注" prop="field3" />
      </comm-table>
    </div>

    <el-dialog :append-to-body="true" title="添加" :visible="addVisible" @close="addVisible = false">
      <el-form
        ref="form"
        :model="addForm"
        label-width="140px"
        label-position="left"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="总表编号:">
              <el-input v-model="form.prop1" placeholder="总表编号" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="handleSave">保存</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
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
      addVisible: false,
      form: {},
      addForm: {},
      tableData: [
        { field1: '0190080101', field2: '0190110901', field3: '' },
        { field1: '0191480506', field2: '0191480507', field3: '' },
        { field1: '0191480506', field2: '0191480508', field3: '' }

      ]
    }
  },
  methods: {
    handleSave() {
      this.addVisible = false
      return this.$message({ type: 'success', message: '操作成功' })
    },
    handleAdd() {
      this.addVisible = true
    },
    handleDelete() {
      if (this.selection.length == 0) {
        return this.$message({ type: 'error', message: '请至少选择一条记录' })
      }
      this.$message({ type: 'success', message: '操作成功' })
    }
  }
}

</script>
<style lang='scss' scoped>
.operation{
  padding-left: 0;
  margin-bottom: 20px;
}
</style>
