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
              <el-table-column label="无功功率" prop="field14" />
              <el-table-column label="功率因数" prop="field15" />
              <el-table-column label="最大需量" prop="field16" />
              <el-table-column label="需量时间" prop="field17" />
              <el-table-column label="频率" prop="field18" />
              <el-table-column label="采集时间" prop="field19" />
            </comm-table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DianReportDiancanliangjiankong',
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
          field1: '019148051C',
          field2: '宿舍总表',
          field3: '0',
          field4: '在线',
          field5: '231.5',
          field6: '230.5',
          field7: '232.2',
          field8: '0',
          field9: '0',
          field10: '0',
          field11: '1',
          field12: '1',
          field13: '0',
          field14: '0',
          field15: '0.99',
          field16: '0',
          field17: '0',
          field18: '50',
          field19: '02-25 11:32:30'
        },
        {
          field1: '019148051B',
          field2: '洗衣房1',
          field3: '151.48',
          field4: '在线',
          field5: '230.5',
          field6: '229.7',
          field7: '231.7',
          field8: '0',
          field9: '0',
          field10: '0',
          field11: '1',
          field12: '1',
          field13: '0',
          field14: '0',
          field15: '0',
          field16: '0',
          field17: '0',
          field18: '50',
          field19: '02-25 11:32:30'
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
