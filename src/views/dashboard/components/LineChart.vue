<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        xAxis: {
          type:'category',
          // data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
          // boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          // trigger: "axis",
          // axisPointer: {
          //   type: "cross"
          // },
          padding: [5, 10]
        },
        yAxis: {
          name:'kW.h',
          axisTick: {
            show: false
          }
        },
        dataset:{
          source:[
            ['time','今日','昨日'],
            ['00:00',15,25],
            ['01:00',2,23],
            ['02:00',105,25],
            ['03:00',15,25],
            ['04:00',15,25],
            ['05:00',5,23],
            ['06:00',15,25],
            ['07:00',15,25],
            ['08:00',15,25],
            ['09:00',25,205],
            ['10:00',15,25],
            ['11:00',15,25],
            ['12:00',15,25],
            ['13:00',15,25],
            ['14:00',15,25],
            ['15:00',15,25],
            ['16:00',15,25],
            ['17:00',15,25],
            ['18:00',15,25],
            ['19:00',15,25],
            ['20:00',15,25],
            ['21:00',15,25],
            ['22:00',15,25],
            ['23:00',15,25],

          ]
        },
        legend: {
          data: ["今日", "昨日"]
        },
        series: [
          { type: "bar" },
          { type: "bar" }
        ]
      });
    }
  }
};
</script>
