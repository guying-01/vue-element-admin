<!--
 * @Author       : gy
 * @Date         : 2021-01-05 20:47:15
 * @LastEditors  : gy
 * @LastEditTime : 2021-01-05 22:43:02
 * @FilePath     : /yufufei/src/views/dashboard/index.vue
 * @Description  : 页面描述
-->
<template>
  <div class="dashboard-editor-container">
    <panel-group />

    <el-row :gutter="10">
      <el-col :xs="8" :sm="8" :lg="8">
        <div class="status border-top">
          <div class="title">电表状态</div>
          <div
            class="status-item"
            v-for="(item, index) in statuList"
            :key="index"
          >
            <div class="status-item-title">{{ item.title }}</div>
            <div class="status-item-num">{{ item.cur }}/{{ item.total }}</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="16" :sm="16" :lg="16">
        <div class="report border-top">
          <div class="title">能耗报表</div>
          <div class="category">
            <div class="category-item">
              <div class="category-item-value">361.45kWh</div>

              <div class="cover">昨日用电</div>
            </div>
            <div class="category-item">
              <div class="category-item-value">236.78kWh</div>
              <div class="cover">今日用电</div>
            </div>
            <div class="category-item">
              <div class="category-item-value">-15.57%</div>
              <div class="cover">同比增长</div>
            </div>
          </div>
          <div class="chart" ref="chart"></div>
          <line-chart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from "./components/PanelGroup";
import LineChart from "./components/LineChart";
import TransactionTable from "./components/TransactionTable";
import TodoList from "./components/TodoList";

export default {
  name: "DashboardAdmin",
  components: {
    PanelGroup,
    LineChart,
    TransactionTable,
    TodoList
  },
  data() {
    return {
      statuList: [
        { title: "未开户", cur: 99, total: 197 },
        { title: "失联", cur: 99, total: 197 },
        { title: "合闸", cur: 99, total: 197 },
        { title: "分闸", cur: 99, total: 197 },
        { title: "强制", cur: 99, total: 197 },
        { title: "预付费", cur: 99, total: 197 }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

.border-top {
  border-top: 3px solid #b5c5f7;
  .title {
    border-bottom: 1px solid #dee6f1;
    padding: 14px 15px 7px;
  }
  .status-item {
    width: 50%;
    float: left;
    border-right: 1px solid #dee6f1;
    border-bottom: 1px solid #dee6f1;
    padding: 30px 25px;
  }

  .category {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .category-item {
      width: 120px;
      text-align: center;
      margin: 0 10px;
      color: #fff;
      padding: 20px 0 40px 0;
      position: relative;
      &:nth-of-type(1) {
        background-color: #61b4da;
      }
      &:nth-of-type(2) {
        background-color: #59c999;
      }
      &:nth-of-type(3) {
        background-color: #d78443;
      }
      .cover {
        padding: 5px 0;
        background: rgba(0, 0, 0, 0.2);
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: center;
      }
    }
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
