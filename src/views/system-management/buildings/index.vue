<!--
 * @Author       : gy
 * @Date         : 2021-01-04 22:54:18
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-16 20:14:19
 * @FilePath     : /yufufei/src/views/system-management/buildings/index.vue
 * @Description  : 页面描述
-->
<template>
  <div class="list-page">
    <FilterPanel>
      <div class="filters">
        <el-form ref="form" :model="form" label-width="100px">
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
        <el-table-column label="创建日期" prop="field1" />
        <el-table-column label="建筑号" prop="field2" />
        <el-table-column label="建筑群名称" prop="field3" />
        <el-table-column label="备注" prop="field4" />
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

    <Detail ref="detailDialog" />
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
import Add from './modules/add'
import Detail from './modules/detail'
export default {
  name: 'SystemManagementBuildings',
  components: { Add, Detail },
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      form: {},
      tableData: [
        {
          field1: '2021-02-07 01:15:22',
          field2: '12',
          field3: 'EFC-T5',
          field4: ''
        },
        {
          field1: '2021-02-07 01:15:22',
          field2: '122',
          field3: '浙江上百',
          field4: '测试'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleSearch() {}
  }
}
</script>

<style lang="scss" scoped></style>
