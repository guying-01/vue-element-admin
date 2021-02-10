<!--
 * @Author: gy
 * @Date: 2021-01-08 13:45:27
 * @LastEditors: gy
 * @LastEditTime: 2021-01-08 14:40:52
-->
<!--  -->
<template>
  <el-dialog title="阶梯电价设置" :visible="parent.visible2">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="阶梯挡位:">
        <el-select v-model="form.prop1" placeholder="">
          <el-option label="1" :value="1" />
          <el-option label="2" :value="2" />
          <el-option label="3" :value="3" />
          <el-option label="4" :value="4" />
          <el-option label="5" :value="5" />
        </el-select>
      </el-form-item>
      <el-form-item label="月冻结时间:">
        <el-row>
          <el-col :span="10">
            <el-input v-model="form.prop2" placeholder="请输入" />
          </el-col>
          <el-col :span="2">
            <span style="padding-left: 5px">日</span>
          </el-col>
          <el-col :span="10">
            <el-input v-model="form.prop3" placeholder="请输入" />
          </el-col>
          <el-col :span="2">
            <span style="padding-left: 5px">时</span>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="日冻结时间:">
        <el-row>
          <el-col :span="10">
            <el-input v-model="form.prop4" placeholder="请输入" />
          </el-col>
          <el-col :span="2">
            <span style="padding-left: 5px">时</span>
          </el-col>
          <el-col :span="10">
            <el-input v-model="form.prop5" placeholder="请输入" />
          </el-col>
          <el-col :span="2">
            <span style="padding-left: 5px">分</span>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="分时区">
        <el-checkbox v-model="form.prop6" label="" />
      </el-form-item>
      <el-form-item v-if="form.prop6" label="非夏时区">
        <el-row :gutter="5">
          <el-col :span="5">
            <el-input v-model="form.prop7">
              <template slot="prepend">尖:</template>
            </el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="form.prop8">
              <template slot="prepend">峰:</template>
            </el-input></el-col>
          <el-col :span="5">
            <el-input v-model="form.prop9">
              <template slot="prepend">平:</template>
            </el-input></el-col>
          <el-col :span="5">
            <el-input v-model="form.prop10">
              <template slot="prepend">谷:</template>
            </el-input></el-col>
        </el-row>
      </el-form-item>
      <el-form-item v-if="form.prop6" label="夏时区">
        <el-row :gutter="5">
          <el-col :span="5">
            <el-input v-model="form.prop11">
              <template slot="prepend">尖:</template>
            </el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="form.prop12">
              <template slot="prepend">峰:</template>
            </el-input></el-col>
          <el-col :span="5">
            <el-input v-model="form.prop13">
              <template slot="prepend">平:</template>
            </el-input></el-col>
          <el-col :span="5">
            <el-input v-model="form.prop14">
              <template slot="prepend">谷:</template>
            </el-input></el-col>
        </el-row>
      </el-form-item>
      <el-form-item v-if="!form.prop6" label="">
        <el-row :gutter="5">
          <el-col :span="5">
            <el-input v-model="form.prop15">
              <template slot="prepend">尖:</template>
            </el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="form.prop16">
              <template slot="prepend">峰:</template>
            </el-input></el-col>
          <el-col :span="5">
            <el-input v-model="form.prop17">
              <template slot="prepend">平:</template>
            </el-input></el-col>
          <el-col :span="5">
            <el-input v-model="form.prop18">
              <template slot="prepend">谷:</template>
            </el-input></el-col>
        </el-row>
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button type="primary" @click="handleConfirm">确认</el-button>
      <el-button @click="parent.visible2 = false">取消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  inject: ['parent'],
  props: {},
  data() {
    return {
      form: {
        prop1: '',
        prop2: '',
        prop3: ''
      }
    }
  },
  methods: {
    handleConfirm() {
      this.parent.visible2 = false
      this.$message({ type: 'success', message: '修改成功' })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
