<!--
 * @Author       : gy
 * @Date         : 2021-02-16 18:26:27
 * @LastEditors: gy
 * @LastEditTime: 2021-02-24 11:20:42
 * @FilePath     : /yufufei/src/views/system-management/dianbiao/modules/add.vue
 * @Description  : 页面描述
-->
<template>
  <el-form ref="form" :model="form" style="padding:0 20px;" label-width="120px">
    <el-form-item label="仪表编号">
      <el-input v-model="form.field2" disabled />
    </el-form-item>
    <el-form-item label="网关编号">
      <el-select v-model="form.field13" placeholder="请选择">
        <el-option label="" :value="1">
          <div class="flex">
            <div>主键</div>
            <div>网关编号</div>
            <div>建筑名</div>
          </div>
        </el-option>
        <el-option label="019006" value="019006">
          <div class="flex">
            <div>190977979899</div>
            <div>019006</div>
            <div>预付费云演示箱</div>
          </div>
        </el-option>
        <el-option label="019008" value="019008">
          <div class="flex">
            <div>190977979899</div>
            <div>019008</div>
            <div>预付费云演示箱</div>
          </div>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="串口号">
      <el-input v-model="form.field3" />
    </el-form-item>
    <el-form-item label="表地址">
      <el-input v-model="form.field4" />
    </el-form-item>
    <el-form-item label="型号">
      <el-input v-model="form.field5" />
    </el-form-item>
    <el-form-item label="商铺号">
      <el-input v-model="form.field6" />
    </el-form-item>
    <el-form-item label="CT变比">
      <el-input v-model="form.field7" />
    </el-form-item>
    <el-form-item label="是否非预付费表">
      <el-select v-model="form.field8" placeholder="请选择">
        <el-option label="是" :value="1" />
        <el-option label="否" :value="2" />
      </el-select>
    </el-form-item>
    <el-form-item label="容量">
      <el-input v-model="form.field9" />
    </el-form-item>
    <el-form-item label="容量单价">
      <el-input v-model="form.field10" />
    </el-form-item>
    <el-form-item label="仪表序列号">
      <el-input v-model="form.field11" />
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.field12" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      form: {
        field1: '0000000000',
        field3: '00',
        field4: '00',
        field8: 1
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.flex {
  justify-content: space-around;
  div {
    width: 150px;
  }
}
</style>
