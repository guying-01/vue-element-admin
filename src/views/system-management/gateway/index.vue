<!--
 * @Author       : gy
 * @Date         : 2021-01-04 22:54:18
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-16 20:39:45
 * @FilePath     : /yufufei/src/views/system-management/gateway/index.vue
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
              <el-form-item label="网关编号:">
                <el-input v-model="form.prop2" placeholder="网关编号" />
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
        <el-table-column label="网关编号" prop="field2" />
        <el-table-column label="建筑名" prop="field3" />
        <el-table-column label="楼层" prop="field4" />
        <el-table-column label="IP地址" prop="field5" />
        <el-table-column label="端口" prop="field6" />
        <el-table-column label="网关SVN" prop="field7" />
        <el-table-column label="备注" prop="field8" />
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
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
import Add from './modules/add'
export default {
  name: 'SystemManagementGateway',
  components: { Add },
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      form: {},
      tableData: [
        {
          field1: '2021-02-07 01:15:22',
          field2: '019008',
          field3: '预付费云演示箱',
          field4: '6',
          field5: '1',
          field6: '19600',
          field7: '2853A829263B',
          field8: '预付费云演示箱'
        },
        {
          field1: '2021-02-07 01:15:22',
          field2: '019008',
          field3: '预付费云演示箱',
          field4: '6',
          field5: '1',
          field6: '19600',
          field7: '2853A829263B',
          field8: '预付费云演示箱'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
