<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div style="padding:20px">
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
                    <el-form-item label="统计类型:">
                      <el-select v-model="form.prop1" placeholder="请选择">
                        <el-option label="日报表" value="0" />
                        <el-option label="月报表" value="1" />
                        <el-option label="年报表" value="2" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="创建时间:">
                      <el-date-picker
                        v-model="form.prop2"
                        type="date"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-button type="primary" @click="getList">查询</el-button>
                    <el-button type="success" @click="handleExport">导出</el-button>
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
              <el-table-column label="商铺号" prop="field1" />
              <el-table-column label="00时" prop="field2" />
              <el-table-column label="01时" prop="field3" />
              <el-table-column label="02时" prop="field4" />
              <el-table-column label="03时" prop="field5" />
              <el-table-column label="04时" prop="field6" />
              <el-table-column label="05时" prop="field7" />
              <el-table-column label="06时" prop="field8" />
              <el-table-column label="07时" prop="field9" />
              <el-table-column label="08时" prop="field10" />
              <el-table-column label="09时" prop="field11" />
              <el-table-column label="10时" prop="field12" />
              <el-table-column label="11时" prop="field13" />
              <el-table-column label="合计" prop="field14" />
            </comm-table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
export default {
  name: 'DianReportDiannenghao',
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      checkAll: false,
      form: {},
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
        { field1: '0201', field2: '0.0000', field3: '0.0000', field4: '0.0000', field5: '0.0000', field6: '0.0000', field7: '0.0000', field8: '0.0000', field9: '0.0000', field10: '0.0000', field11: '0.0000', field12: '0.0000', field13: '0.0000', field14: '0.0000' },
        { field1: '0202', field2: '0.0000', field3: '0.0000', field4: '0.0000', field5: '0.0000', field6: '0.0000', field7: '0.0000', field8: '0.0000', field9: '0.0000', field10: '0.0000', field11: '0.0000', field12: '0.0000', field13: '0.0000', field14: '0.0000' }
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
