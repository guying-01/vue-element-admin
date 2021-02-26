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
              <el-table-column label="开始时间" prop="field1" />
              <el-table-column label="结束时间" prop="field2" />
              <el-table-column label="表号" prop="field3" />
              <el-table-column label="商铺号" prop="field4" />
              <el-table-column label="上次抄表" prop="field5" />
              <el-table-column label="本次抄表" prop="field6" />
              <el-table-column label="用电量" prop="field7" />
              <el-table-column label="互感器倍率" prop="field8" />
              <el-table-column label="备注" prop="field9" />
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
  name: 'DianReportGuankongdianbiaonenghao',
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      checkAll: false,
      form: {
        prop1: []
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
      tableData: []
    }
  },
  created() {
    this.form.prop1 = [new Date(), new Date()]
  },
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
