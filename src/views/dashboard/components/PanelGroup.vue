<template>
  <div>
    <div class="group-title">快捷入口</div>
    <el-row :gutter="10" class="panel-group">
      <el-col v-for="(item,index) in entries" :key="index" :xs="4" :sm="4" :lg="4" class="card-panel-col">
        <div class="card-panel" @click="handleClick(item)">
          <div class="card-panel-icon-wrapper">
            <svg-icon :icon-class="item.icon" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-title">{{ item.title }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  components: {
  },
  data(){
    return {
      entries:[
        {title:'新增售电',icon:'people',link:'/shoudian-management/add-sale'},
        {title:'新增开户',icon:'user',link:'/user-management/open-account'},
        {title:'电表批量操作',icon:'edit',link:'/user-management/dianbiao-batch-operation'},
        {title:'电能耗报表',icon:'chart',link:'/dian-report/diannenghao'},
        {title:'水表批量操作',icon:'skill',link:'/user-management/shuibiao-batch-operation'},
        {title:'新增售水',icon:'example',link:'/shoushui-management/add-sale'},

      ]
    }
  },
  methods: {
    handleClick({link}){
      if(!link) return 
      this.$router.push({path:link})
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    // height: 108px;
    padding:20px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #6a88eb;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    .card-panel-title{
      text-align: center;
      color: #fff;
      margin-top: 10px;
      font-weight: bold;
    }
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      // float: left;
      text-align: center;
      // margin: 14px 0 0 14px;
      // padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      color:#fff;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
