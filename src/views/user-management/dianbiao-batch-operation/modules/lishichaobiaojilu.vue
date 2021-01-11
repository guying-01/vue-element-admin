<!--
 * @Author: gy
 * @Date: 2021-01-08 16:11:28
 * @LastEditors: gy
 * @LastEditTime: 2021-01-11 10:59:38
-->
<!--  -->
<template>
  <el-dialog title="历史抄表记录" :visible="parent.visible6" @close="parent.visible6 = false">

    <el-date-picker v-model="form.date" placeholder="请选择日期" type="date" />
    <el-button type="primary" style="margin-left:10px" @click="handleSearch">搜索</el-button>
    <el-button type="warning" @click="handleExport">导出</el-button>
    <div class="list">
      <el-table :data="tableData">
        <el-table-column label="" type="selection" />
        <el-table-column label="表号" prop="field1" />
        <el-table-column label="剩余金额" prop="field2" />
        <el-table-column label="电表总数" prop="field3" />
        <el-table-column label="尖电能" prop="field4" />
        <el-table-column label="峰电能" prop="field5" />
        <el-table-column label="平电能" prop="field6" />
        <el-table-column label="谷电能" prop="field7" />
        <el-table-column label="实时功率" prop="field8" />
        <el-table-column label="是否欠费" prop="field9" />
        <el-table-column label="已开户" prop="field10" />
        <el-table-column label="强制模式" prop="field11" />
        <el-table-column label="合闸状态" prop="field12" />
        <el-table-column label="是否失连" prop="field13" />
        <el-table-column label="采集时间" prop="field14" />
      </el-table>

    </div>

  </el-dialog>
</template>

<script>
import { downFile } from '@/utils';
export default {

  components: {},
  props : {},
  inject:['parent'],
  data () {
    return {
      form:{},
      tableData: [
        {
          field1: "019047864",
          field2: "001",
          field3: "0190070",
          field4: "未开户",
          field5: "100.00",
          field6: "1",
          field7: "300.00",
          field8: "45",
          field9: "54",
          field10: "1.0000",
          field11: "1.0000",
          field12: '否',
          field13: '是',
          field14: '2020-08',
        },
        {
          field1: "019047864",
          field2: "001",
          field3: "0190070",
          field4: "未开户",
          field5: "100.00",
          field6: "1",
          field7: "300.00",
          field8: "45",
          field9: "54",
          field10: "1.0000",
          field11: "1.0000",
          field12: '否',
          field13: '是',
          field14: '2020-08',

        },
        {
          field1: "019047864",
          field2: "001",
          field3: "0190070",
          field4: "未开户",
          field5: "100.00",
          field6: "1",
          field7: "300.00",
          field8: "45",
          field9: "54",
          field10: "1.0000",
          field11: "1.0000",
          field12: '否',
          field13: '是',
          field14: '2020-08',

        },
        {
          field1: "019047864",
          field2: "001",
          field3: "0190070",
          field4: "未开户",
          field5: "100.00",
          field6: "1",
          field7: "300.00",
          field8: "45",
          field9: "54",
          field10: "1.0000",
          field11: "1.0000",
          field12: '否',
          field13: '是',
          field14: '2020-08',

        },
      ],
    };
  },

  methods: {
    handleSearch(){
      this.$message({type:'success',message:'操作成功'})
    },
    handleExport(){
      //请求返回流后下载
      const blob = []
      downFile(blob,'导出.xlsx')
    }
  }
}

</script>
<style lang='scss' scoped>
</style>