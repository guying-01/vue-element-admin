<!--
 * @Author       : gy
 * @Date         : 2021-01-04 22:54:18
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-17 10:44:22
 * @FilePath     : /yufufei/src/views/system-management/role/index.vue
 * @Description  : 页面描述
-->
<template>
  <div class="list-page">
    <FilterPanel>
      <div class="filters">
        <el-form
          ref="form"
          :model="form"
          label-width="60px"
          label-position="left"
        >
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="关键字:">
                <el-input
                  v-model="form.prop1"
                  placeholder="搜索关键字"
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
    </div>

    <div class="list">
      <comm-table
        :data="tableData"
        :static-table="true"
        @selection-change="selectionChange"
      >
        <el-table-column label="" type="selection" />
        <el-table-column label="角色名称" prop="field1" />
        <el-table-column label="角色描述" prop="field2" />
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
      <div style="margin-left:20px">
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
  name: 'SystemManagementRole',
  components: { Add },
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      form: {},
      tableData: [
        { field1: '租户', field2: '' },
        { field1: '财务', field2: '财务' }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
