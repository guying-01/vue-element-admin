<!--
 * @Author       : gy
 * @Date         : 2021-01-04 20:30:12
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-16 18:07:29
 * @FilePath     : /yufufei/src/views/user-management/dianbiao-batch-operation/index.vue
 * @Description  : 页面描述
-->
<template>
  <div class="list-page">
    <Filter-Panel>
      <div class="filters">
        <div>
          <el-row>
            <el-col :span="6">
              <el-tree
                :data="data"
                :props="defaultProps"
                accordion
                @node-click="handleNodeClick"
              />
            </el-col>
            <el-col :span="18">
              <el-form ref="form" :model="form" size="mini" label-width="100px">
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="剩余金额:">
                      <el-radio-group v-model="form.prop1">
                        <el-radio label="全部" />
                        <el-radio label="低于或等于0" />
                        <el-radio label="大于0" />
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="联网状态:">
                      <el-radio-group v-model="form.prop2">
                        <el-radio label="全部" />
                        <el-radio label="在线" />
                        <el-radio label="失联" />
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="12">
                    <el-form-item label="合闸状态:">
                      <el-radio-group v-model="form.prop3">
                        <el-radio label="全部" />
                        <el-radio label="合闸" />
                        <el-radio label="拉闸" />
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="电表模式:">
                      <el-radio-group v-model="form.prop4">
                        <el-radio label="全部" />
                        <el-radio label="预付费模式" />
                        <el-radio label="强制模式" />
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="12">
                    <el-form-item label="开户状态:">
                      <el-radio-group v-model="form.prop5">
                        <el-radio label="全部" />
                        <el-radio label="已开户" />
                        <el-radio label="未开户" />
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="告警状态:">
                      <el-radio-group v-model="form.prop6">
                        <el-radio label="报警1" />
                        <el-radio label="报警2" />
                        <el-radio label="欠费" />
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="12">
                    <el-form-item label="仪表编号:">
                      <el-input v-model="form.prop7" placeholder="仪表编号" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="商铺号:">
                      <el-input v-model="form.prop8" placeholder="商铺号" />
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <div style="float: right">
                    <el-button type="primary" @click="handleSearch">查询</el-button>
                    <el-button type="warning" @click="handleReset">清除搜索条件</el-button>
                  </div>
                </el-row>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </div>
    </Filter-Panel>

    <div class="operation">
      <el-button-group>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-edit"
          @click="visible1 = true"
        >电价设置</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-share"
          @click="visible2 = true"
        >阶梯电价设置</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-s-tools"
          @click="visible3 = true"
        >报警设置</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-circle-close"
          @click="handleOperate(1)"
        >强制合闸</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-circle-check"
          @click="handleOperate(2)"
        >强制拉闸</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-d-arrow-left"
          @click="handleOperate(3)"
        >恢复预付费</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-setting"
          @click="visible4 = true"
        >功率阈值设置</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-download"
          @click="exportExcel"
        >抄表导出</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-upload"
          @click="sendMsg"
        >下发报警短信</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-refresh"
          @click="refreshTable"
        >刷新表状态</el-button>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-notebook-2"
          @click="visible6 = true"
        >历史抄表记录</el-button>
      </el-button-group>
    </div>

    <div class="list">
      <div class="row-status">
        <div class="item">
          <div class="block ykh" />
          <span>已开户</span>
        </div>
        <div class="item">
          <div class="block bj1" />
          <span>报警1</span>
        </div>
        <div class="item">
          <div class="block bj2" />
          <span>报警2</span>
        </div>
        <div class="item">
          <div class="block qf" />
          <span>欠费</span>
        </div>
        <div class="item">
          <div class="block wkh" />
          <span>未开户</span>
        </div>
        <div class="item">
          <div class="block sl" />
          <span>失联</span>
        </div>
        <div class="item">
          <div class="block hbjs" />
          <span>合并计算</span>
        </div>
      </div>

      <el-table
        :data="tableData"
        :row-class-name="getRowClassName"
        @selection-change="handleSelectionChange"
      >
        <el-table-column label="" type="selection" />
        <el-table-column label="仪表编号" prop="field1" />
        <el-table-column label="商铺号" prop="field2" />
        <el-table-column label="用户编号" prop="field3" />
        <el-table-column label="用户名" prop="field4" />
        <el-table-column label="购电总额" prop="field5" />
        <el-table-column label="购电次数" prop="field6" />
        <el-table-column label="告警金额1" prop="field7" />
        <el-table-column label="告警金额2" prop="field8" />
        <el-table-column label="功率阈值(KW)" prop="field9" />
        <el-table-column label="尖电价" prop="field10" />
        <el-table-column label="峰电价" prop="field11" />
      </el-table>
    </div>

    <Dianjiashezhi />
    <Jietidianjiashezhi />
    <Baojingshezhi />
    <Lishichaobiaojilu />
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'
import Dianjiashezhi from './modules/dianjiashezhi'
import Jietidianjiashezhi from './modules/jietidianjiashezhi.vue'
import Baojingshezhi from './modules/baojingshezhi.vue'
import { downFile } from '@/utils/index'
import Lishichaobiaojilu from './modules/lishichaobiaojilu.vue'
export default {
  name: 'UserManagementDianbiaoBatchOperation',
  components: {
    Dianjiashezhi,
    Jietidianjiashezhi,
    Baojingshezhi,
    Lishichaobiaojilu
  },
  mixins: [TableMixin],
  props: {},
  provide() {
    return {
      parent: this
    }
  },
  data() {
    return {
      selection: [],
      operationIndex: 0,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      form: {},
      colorMap: {
        1: 'ykh',
        2: 'bj1',
        3: 'bj2',
        4: 'qf',
        5: 'wkh',
        6: 'sl',
        7: 'hbjs'
      },
      tableData: [
        {
          field1: '019047864',
          field2: '001',
          field3: '0190070',
          field4: '未开户',
          field5: '100.00',
          field6: '1',
          field7: '300.00',
          field8: '45',
          field9: '54',
          field10: '1.0000',
          field11: '1.0000',
          status: 1
        },
        {
          field1: '019047864',
          field2: '001',
          field3: '0190070',
          field4: '未开户',
          field5: '100.00',
          field6: '1',
          field7: '300.00',
          field8: '45',
          field9: '54',
          field10: '1.0000',
          field11: '1.0000',
          status: 2
        },
        {
          field1: '019047864',
          field2: '001',
          field3: '0190070',
          field4: '未开户',
          field5: '100.00',
          field6: '1',
          field7: '300.00',
          field8: '45',
          field9: '54',
          field10: '1.0000',
          field11: '1.0000',
          status: 3
        },
        {
          field1: '019047864',
          field2: '001',
          field3: '0190070',
          field4: '未开户',
          field5: '100.00',
          field6: '1',
          field7: '300.00',
          field8: '45',
          field9: '54',
          field10: '1.0000',
          field11: '1.0000',
          status: 4
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    getRowClassName({ row }) {
      return this.colorMap[row['status']]
    },
    /**
     * @description: 下发预警短信
     * @param {*}
     * @return {*}
     */
    sendMsg() {
      // request
      this.$message({ type: 'error', message: '下发失败' })
    },
    /**
     * @description: 刷新表状态
     * @param {*}
     * @return {*}
     */
    refreshTable() {
      // request
      this.$message({ type: 'success', message: '刷新成功' })
    },
    /**
     * @description: 抄表导出
     * @param {*}
     * @return {*}
     */
    exportExcel() {
      // 请求返回流后下载
      const blob = []
      downFile(blob, '电表.xlsx')
    },
    /**
     * @description: 表格选中项改变
     * @param {*} selection
     * @return {*}
     */
    handleSelectionChange(selection) {
      this.selection = selection
    },
    handleOperate(idx) {
      this.operationIndex = idx
      if (this.selection.length == 0) {
        return this.$message({ type: 'error', message: '请至少选择一项' })
      }
      this.visible5 = true
    },
    handleSearch() {
      this.$message({ type: 'success', message: '操作成功' })
    },
    handleReset() {
      this.form = {}
    }
  }
}
</script>

<style lang="scss" scoped>
.operation {
  margin-top: 20px;
  padding: 0 20px;
}
.list {
  margin-top: 20px;
  padding: 0 20px;
  .row-status {
    display: flex;
    justify-content: flex-end;
    .item {
      display: flex;
      padding: 0 2px;
      .block {
        width: 15px;
        height: 15px;
        margin-right: 3px;
        &.ykh {
          background-color: #03a9f4;
          color: #fff;
        }
        &.bj1 {
          background-color: #ffc107;
          color: #fff;
        }
        &.bj2 {
          background-color: #ff5722;
          color: #fff;
        }
        &.qf {
          background-color: #9c27b0;
          color: #fff;
        }
        &.wkh {
          background-color: #adadad;
          color: #fff;
        }
        &.sl {
          background-color: #4caf50;
          color: #fff;
        }
        &.hbjs {
          background-color: #8bc34a;
          color: #fff;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-table {
  .ykh {
    background-color: #03a9f4;
    color: #fff;
  }
  .bj1 {
    background-color: #ffc107;
    color: #fff;
  }
  .bj2 {
    background-color: #ff5722;
    color: #fff;
  }
  .qf {
    background-color: #9c27b0;
    color: #fff;
  }
  .wkh {
    background-color: #adadad;
    color: #fff;
  }
  .sl {
    background-color: #4caf50;
    color: #fff;
  }
  .hbjs {
    background-color: #8bc34a;
    color: #fff;
  }
}
</style>
