<template>
  <div class="list-page">
    <div style="padding: 0 20px">
      <el-select v-model="form.field6" placeholder="请选择">
        <el-option label="" :value="1">
          <div class="flex">
            <div>主键</div>
            <div>名称</div>
            <div>角色描述</div>
          </div>
        </el-option>
        <el-option label="019006" value="019006">
          <div class="flex">
            <div>190977979899</div>
            <div>租户</div>
            <div>财务</div>
          </div>
        </el-option>
        <el-option label="019008" value="019008">
          <div class="flex">
            <div>190977979899</div>
            <div />
            <div>财务</div>
          </div>
        </el-option>
      </el-select>
    </div>

    <div class="operation">
      <el-button type="primary" icon="el-icon-refresh">刷新表状态</el-button>
      <el-button type="success" icon="el-icon-document">历史抄表记录查询</el-button>
    </div>

    <div class="card-list">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="item">
            <div class="label">商铺号</div>
            <div class="content">有线测试DTSY01</div>
          </div>
          <div class="item">
            <div class="label">表号</div>
            <div class="content">0190450101</div>
          </div>
          <div class="item">
            <div class="label">用户名称</div>
            <div class="content">有线测试01</div>
          </div>
          <div class="item">
            <div class="label">用户编号</div>
            <div class="content">0190174</div>
          </div>
          <div class="item">
            <div class="label">是否欠费</div>
            <div class="content" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <div class="label">累计购电次数</div>
            <div class="content">2</div>
          </div>
          <div class="item">
            <div class="label">累计金额(元)</div>
            <div class="content">323</div>
          </div>
          <div class="item">
            <div class="label">剩余金额(元)</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">允许上限(元)</div>
            <div class="content">0</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <div class="label">合并计量总余额</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">功率阈值</div>
            <div class="content">54000</div>
          </div>
          <div class="item">
            <div class="label">合闸状态</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">强制模式</div>
            <div class="content" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <div class="label">告警状态1</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">告警状态2</div>
            <div class="content" />
          </div>
          <div class="item">
            <div class="label">告警金额1</div>
            <div class="content">300</div>
          </div>
          <div class="item">
            <div class="label">告警金额2</div>
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
          <el-col :span="8">
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
      <el-button type="primary">售电</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoudianManagementAddSale',
  props: {},
  data() {
    return {
      form: {
        prop2: '1'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.operation,
.filters,.footer {
  margin-top: 20px;
}

.card-list{
  margin-top: 20px;
  padding: 0 20px;
  .item{
    display: flex;
    .label{
      width: 150px;
      color:#495060;
    }
    .content{
      flex:1;
    }
    // justify-content: space-between;
  }
}
</style>
