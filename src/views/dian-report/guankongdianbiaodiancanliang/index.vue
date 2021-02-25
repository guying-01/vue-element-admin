<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div style="padding: 20px">
          <el-checkbox v-model="checkAll" @change="handleCheckboxChange">
            全选
          </el-checkbox>
        </div>

        <el-tree
          ref="tree"
          :data="treeList"
          :default-expand-all="true"
          :show-checkbox="true"
          node-key="id"
        />
      </el-col>
      <el-col :span="20">
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
                    <el-form-item label="日期:">
                      <el-date-picker v-model="form.prop1" type="date" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="关键词:">
                      <el-input
                        v-model="form.prop2"
                        placeholder="商铺号、表号"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-button type="primary" @click="getList">查询</el-button>
                    <el-button
                      type="success"
                      @click="handleExport"
                    >导出</el-button>
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
              <el-table-column label="表号" prop="field1" />
              <el-table-column label="商铺号" prop="field2" />
              <el-table-column label="总电能" prop="field3" />
              <el-table-column label="是否失连" prop="field4" />
              <el-table-column label="电压A" prop="field5" />
              <el-table-column label="电压B" prop="field6" />
              <el-table-column label="电压C" prop="field7" />
              <el-table-column label="电流A" prop="field8" />
              <el-table-column label="电流B" prop="field9" />
              <el-table-column label="电流C" prop="field10" />
              <el-table-column label="PT变化" prop="field11" />
              <el-table-column label="CT变化" prop="field12" />
              <el-table-column label="功率" prop="field13" />
              <el-table-column label="采集时间" prop="field14" />
            </comm-table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DianReportGuankongdianbiaodiancanliang',
  props: {},
  data() {
    return {
      checkAll: false,
      form: {
        prop1: new Date()
      },
      treeList: [
        {
          label: '101:隆泰物业',
          id: 1,
          children: [
            {
              label: '09115:测试',
              id: 2
            }
          ]
        },
        {
          label: '103:4G表测试',
          id: 3,
          children: [
            {
              label: '019079:4G表',
              id: 4
            }
          ]
        }
      ],
      tableData: [
        {
          field1: '99EA',
          field2: 'dsd',
          field3: '0',
          field4: '',
          field5: '0',
          field6: '0',
          field7: '0',
          field8: '0',
          field9: '0',
          field10: '0',
          field11: '0',
          field12: '0',
          field13: '0',
          field14: ''
        },
        {
          field1: '02900401bd',
          field2: '101',
          field3: '0',
          field4: '',
          field5: '0',
          field6: '0',
          field7: '0',
          field8: '0',
          field9: '0',
          field10: '0',
          field11: '0',
          field12: '0',
          field13: '0',
          field14: ''
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleCheckboxChange(val) {
      this.$refs.tree.setCheckedNodes(val ? this.treeList : [])
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
