<!--
 * @Author       : gy
 * @Date         : 2021-01-05 20:47:15
 * @LastEditors  : gy
 * @LastEditTime : 2021-01-06 21:35:34
 * @FilePath     : /yufufei/src/views/dashboard/index.vue
 * @Description  : 页面描述
-->
<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20">
      <el-col :span="18" style="padding:20px 0 0 20px">
        <panel-group />

        <el-row :gutter="10">
          <el-col :xs="8" :sm="8" :lg="8">
            <div class="status border-top">
              <div class="title">电表状态</div>
              <div
                v-for="(item, index) in statuList"
                :key="index"
                class="status-item"
              >
                <div class="status-item-title">{{ item.title }}</div>
                <div class="status-item-num">
                  {{ item.cur }}/{{ item.total }}
                </div>
                <el-progress
                  :show-text="false"
                  :stroke-width="15"
                  :percentage="Math.round((item.cur / item.total) * 100)"
                />
              </div>
            </div>
          </el-col>
          <el-col :xs="16" :sm="16" :lg="16">
            <div class="report border-top">
              <div class="title">能耗报表</div>
              <div class="category">
                <div class="category-item">
                  <div class="category-item-value">
                    <countTo
                      :startVal="0"
                      :endVal="361.45"
                      :duration="3000"
                    ></countTo>
                    <span>kWh</span>
                  </div>

                  <div class="cover">昨日用电</div>
                </div>
                <div class="category-item">
                  <div class="category-item-value">
                    <countTo
                      :startVal="0"
                      :endVal="236.78"
                      :duration="3000"
                    ></countTo>
                    <span>kWh</span>
                  </div>
                  <div class="cover">今日用电</div>
                </div>
                <div class="category-item">
                  <div class="category-item-value">
                    <countTo
                      :startVal="0"
                      :endVal="-15.57"
                      :duration="3000"
                    ></countTo>
                    <span>%</span>
                  </div>
                  <div class="cover">同比增长</div>
                </div>
              </div>
              <line-chart />
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" class="info-box">
        <div class="box-wrapper">
        <Realtime-Alarm />
        <Lost-In-Information />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from "./components/PanelGroup";
import LineChart from "./components/LineChart";
import RealtimeAlarm from "./components/RealtimeAlarm";
import LostInInformation from "./components/LostInInformation";
// import TodoList from "./components/TodoList";
import CountTo from "vue-count-to";

export default {
  name: "DashboardAdmin",
  components: {
    PanelGroup,
    LineChart,
    RealtimeAlarm,
    LostInInformation,
    CountTo
  },
  data() {
    return {
      statuList: [
        { title: "未开户", cur: 99, total: 197 },
        { title: "失联", cur: 29, total: 197 },
        { title: "合闸", cur: 9, total: 197 },
        { title: "分闸", cur: 63, total: 197 },
        { title: "强制", cur: 22, total: 197 },
        { title: "预付费", cur: 99, total: 1970 }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }

  .info-box{
    position: absolute;
    top: 0;
    bottom: 0;
    right:0;
    overflow: auto;
    .box-wrapper{
      height: 100%;
      margin-left: 10px;
      background: #fff;
    }
    // width: 100%;
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
    padding: 40px 25px;
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
