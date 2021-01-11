<!--
 * @Author: gy
 * @Date: 2021-01-06 14:38:20
 * @LastEditors: gy
 * @LastEditTime: 2021-01-11 13:45:31
-->
<!--  -->
<template>
  <div class="realtime-alarm">
    <div class="title">
      <span>实时报警信息</span>
      <span @click="$router.push({path:'/dian-report/dianbiaoshishibaojing'})">查看全部</span>
    </div>
    <div class="content">
      <div v-for="(item, index) in list" :key="index" class="item">
        <div>{{ item.id }}</div>
        <div class="list-content">
          <div>商户号:{{ item.text1 }}</div>
          <div>剩余金额:{{ item.text2 }}</div>
          <div>用户名:{{ item.text3 }}</div>
          <div>告警状态:{{ item.text4 }}</div>
          <div>闸刀状态:{{ item.text5 }}</div>
          <div>过载:{{ item.text6 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          id: "019038016F",
          text1: "111",
          text2: "1366.92",
          text3: "100200.0",
          text4: "欠费",
          text5: "合闸",
          text6: "正常用电"
        },
        {
          id: "019038016F",
          text1: "111",
          text2: "1366.92",
          text3: "100200.0",
          text4: "欠费",
          text5: "合闸",
          text6: "正常用电"
        },
        {
          id: "019038016F",
          text1: "111",
          text2: "1366.92",
          text3: "100200.0",
          text4: "欠费",
          text5: "合闸",
          text6: "正常用电"
        }
      ]
    };
  },

  methods: {}
};
</script>
<style lang="scss" scoped>
.realtime-alarm {
  background-color: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 14px 15px 7px;
    color: #31347f;
    span {
      cursor: pointer;
    }
  }
  .content {
    padding: 14px;
    font-size: 12px;
    .item {
      padding: 7px 7px 7px 17px;
      border: solid 2px #e0e9ef;
      margin-bottom: 10px;
      .list-content {
        overflow: hidden;
        div {
          width: 50%;
          float: left;
        }
      }
    }
  }
}
</style>
