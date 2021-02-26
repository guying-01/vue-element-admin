<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/mixins/resize'

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Array,
      default: () => {
        return []
      }
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      handler(val) {
        this.$nextTick(() => {
          this.initChart(val)
        })
      },
      immediate: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      // this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart(data) {
      this.chart = echarts.init(this.$el, 'macarons')
      const dataset = {
        source: [
          ['user', '售电金额', '使用金额']
        ]
      }

      data.map(item => {
        dataset.source.push([item.field5, item.field13, item.field14])
      })

      this.chart.setOption({
        title: {
          text: '售电金额与使用金额'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 50,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        legend: {},
        dataset,
        xAxis: [{
          type: 'category',
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [
          { type: 'bar' },
          { type: 'bar' }
        ]
      })
    }
  }
}
</script>
