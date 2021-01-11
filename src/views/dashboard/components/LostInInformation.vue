<!--
 * @Author: gy
 * @Date: 2021-01-06 14:48:26
 * @LastEditors: gy
 * @LastEditTime: 2021-01-11 13:52:41
-->
<!--  -->
<template>
  <div class="lost-in-information">
    <div class="title">
      <span>失联信息</span>
      <span @click="$router.push({path:'/dian-report/shiliandianbiao'})">查看全部</span>
    </div>
    <div class="switch">
      <p :class="[activeIndex == 1 ? 'active' : '']" @click="activeIndex = 1">
        失联电表
      </p>
      <p :class="[activeIndex == 2 ? 'active' : '']" @click="activeIndex = 2">
        失联网关
      </p>
    </div>
    <div class="content">
      <transition name="tableFadeIn">
        <el-table v-show="activeIndex == 1" :data="list" size="mini">
          <el-table-column label="表号" prop="field1" />
          <el-table-column label="序号" prop="field2" />
          <el-table-column label="用户名" prop="field3" />
          <el-table-column label="失联状态" prop="field4" />
        </el-table>
      </transition>

      <transition name="tableFadeIn">
        <el-table v-show="activeIndex == 2" :data="list1" size="mini">
          <el-table-column label="网关号" prop="field1" />
          <el-table-column label="楼号" prop="field2" />
          <el-table-column label="层号" prop="field3" />
          <el-table-column label="IP" prop="field4" />
          <el-table-column label="备注" prop="field5" />
          <el-table-column label="失联状态" prop="field6" />
        </el-table>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      activeIndex: 1,
      list: [
        {
          field1: "01924564",
          field2: "006",
          field3: "006-1",
          field4: "失效",
        },
        {
          field1: "01924564",
          field2: "006",
          field3: "006-1",
          field4: "失效",
        },
        {
          field1: "01924564",
          field2: "006",
          field3: "006-1",
          field4: "失效",
        },
      ],
      list1: [
        {
          field1: "019045",
          field2: "2",
          field3: "10",
          field4: "",
          field5: "巨灵水表测试",
          field6: "失联",
        },
      ],
    };
  },

  methods: {},
};
</script>
<style lang='scss' scoped>
.lost-in-information {
  background-color: #fff;
  border-top: 1px solid #e0e4f2;
  .tableFadeIn-enter-active {
    transition: opacity 1.5s;
  }

  .tableFadeIn-enter,
  .tableFadeIn-leave-to {
    opacity: 0;
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding: 14px 15px 7px;
    color:#31347f;
    span{
      cursor: pointer;
    }
  }

  .switch {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    align-items: center;
    p {
      cursor: pointer;
      background-color: #fff;
      border: 1px solid #949de4;
      border-radius: 6px;
      padding: 5px;
      margin-right: 5px;
      color: #d1d3fc;
      &.active {
        color: #fff;
        background-color: rgb(148, 157, 228);
        border: none;
      }
    }
  }

  .content{
    padding: 14px;
    font-size: 12px;
    overflow: auto;
  }
}
</style>