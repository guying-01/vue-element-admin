<!--
 * @Author       : gy
 * @Date         : 2021-02-16 18:26:27
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-16 18:47:57
 * @FilePath     : /yufufei/src/views/system-management/buildings/modules/add.vue
 * @Description  : 页面描述
-->
<template>
  <el-form :model="form" ref="form" style="padding:0 20px;">
    <el-form-item label="建筑号">
      <el-input v-model="form.field1"/>
    </el-form-item>
    <el-form-item label="建筑名">
      <el-input v-model="form.field2"/>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.field3"/>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  props : {},
  data () {
    return {
      form:{}
    };
  },
  components: {},
  mounted(){},
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>