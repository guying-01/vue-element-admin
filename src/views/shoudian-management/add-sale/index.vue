<template>
  <div class="list-page">
    <div style="padding: 0 20px">
      <el-form>
        <el-form-item label="选择电表">
          <el-select v-model="form.field6" placeholder="请选择">
            <el-option label="" :value="1">
              <div class="flex">
                <div>表号(126)</div>
                <div>用户编号</div>
                <div>用户名字</div>
                <div>商铺号</div>
                <div>购电总额</div>
                <div>购电次数</div>
                <div>建筑名</div>
                <div>尾号</div>

              </div>
            </el-option>
            <el-option label="006" value="006">
              <div class="flex">
                <div>0190080101</div>
                <div>0190070</div>
                <div>006-1</div>
                <div>006</div>
                <div>120.20</div>
                <div>0</div>
                <div>预付费云演示箱</div>
                <div>6</div>
              </div>
            </el-option>
            <el-option label="009" value="009">
              <div class="flex">
                <div>0190110901</div>
                <div>0190076</div>
                <div>009-1</div>
                <div>009</div>
                <div>100.00</div>
                <div>0</div>
                <div>预付费云演示箱</div>
                <div>6</div>
              </div>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>

    <div class="operation">
      <el-button type="primary" icon="el-icon-refresh" @click="handleRefresh">刷新表状态</el-button>
      <el-button type="success" icon="el-icon-document" @click="handleSearchHistory">历史抄表记录查询</el-button>
    </div>

    <div class="card-list">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="item">
            <div class="label">商铺号:</div>
            <div class="content">有线测试DTSY01</div>
          </div>
          <div class="item">
            <div class="label">表号:</div>
            <div class="content">0190450101</div>
          </div>
          <div class="item">
            <div class="label">用户名称:</div>
            <div class="content">有线测试01</div>
          </div>
          <div class="item">
            <div class="label">用户编号:</div>
            <div class="content">0190174</div>
          </div>
          <div class="item">
            <div class="label">是否欠费:</div>
            <div class="content" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <div class="label">累计购电次数:</div>
            <div class="content">2</div>
          </div>
          <div class="item">
            <div class="label">累计金额(元):</div>
            <div class="content">323</div>
          </div>
          <div class="item">
            <div class="label">剩余金额(元):</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">允许上限(元):</div>
            <div class="content">0</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <div class="label">合并计量总余额:</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">功率阈值:</div>
            <div class="content">54000</div>
          </div>
          <div class="item">
            <div class="label">合闸状态:</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">强制模式:</div>
            <div class="content" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <div class="label">告警状态1:</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">告警状态2:</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">告警金额1:</div>
            <div class="content">300</div>
          </div>
          <div class="item">
            <div class="label">告警金额2:</div>
            <div class="content">50</div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="filters">
      <el-form ref="form" :model="form" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="售电金额:">
              <el-input v-model="form.prop1" placeholder="商铺号" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="付款方式:">
              <el-select v-model="form.prop2" placeholder="请选择">
                <el-option label="现金缴费" value="1" />
                <el-option label="刷卡机缴费" value="2" />
                <el-option label="微信扫码支付" value="3" />
                <el-option label="支付宝扫码支付" value="4" />
                <el-option label="公对公转账" value="5" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="备注:">
              <el-input
                v-model="form.prop3"
                placeholder="备注"
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="footer">
      <el-button type="primary" @click="handleSale">售电</el-button>
    </div>

    <el-dialog title="抄表历史查询" :visible="historyDialogVisible" @close="historyDialogVisible = false">
      <History />
    </el-dialog>
  </div>
</template>

<script>
import History from './modules/history'
export default {
  name: 'ShoudianManagementAddSale',
  components: { History },
  props: {},
  data() {
    return {
      historyDialogVisible: false,
      form: {
        prop2: '1'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleRefresh() {
      return this.$message({ type: 'success', message: '操作成功' })
    },
    handleSale() {
      return this.$message({ type: 'success', message: '操作成功' })
    },
    handleSearchHistory() {
      this.historyDialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.operation,
.filters,.footer {
  margin-top: 20px;
}

.footer{
  padding:0 20px;
}

.card-list{
  margin-top: 20px;
  padding: 0 20px;
  .item{
    display: flex;
    padding:5px 0;
    font-size: 14px;
    .label{
      width: 150px;
      color:#495060;
    }
    .content{
      flex:1;
    }
  }
}

.flex {
  justify-content: space-around;
  div {
    width: 150px;
  }
}
</style>
