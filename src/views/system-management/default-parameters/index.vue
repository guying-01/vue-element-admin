<template>
  <div style="padding: 20px">
    <el-form ref="form" :model="form" label-width="170px">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="title">基础参数设置</div>
          <el-form-item label="默认功率阈值(瓦)">
            <el-input v-model="form.field1" />
          </el-form-item>
          <el-form-item label="默认告警金额1(元)">
            <el-input v-model="form.field2" />
          </el-form-item>
          <el-form-item label="默认告警金额2(元)">
            <el-input v-model="form.field3" />
          </el-form-item>
          <el-form-item label="允许赊欠金额(元)">
            <el-input v-model="form.field4" />
          </el-form-item>
          <el-form-item label="默认电价(元)">
            <el-input v-model="form.field5" />
          </el-form-item>
          <el-form-item label="默认电价成本(元)">
            <el-input v-model="form.field6" />
          </el-form-item>
          <el-form-item label="告警水量(吨)">
            <el-input v-model="form.field7" />
          </el-form-item>
          <el-form-item label="默认水价(元)">
            <el-input v-model="form.field8" />
          </el-form-item>
          <el-form-item label="尖电成本(单位:元/每度)">
            <el-input v-model="form.field9" />
          </el-form-item>
          <el-form-item label="峰电成本(单位:元/每度)">
            <el-input v-model="form.field10" />
          </el-form-item>
          <el-form-item label="平电成本(单位:元/每度)">
            <el-input v-model="form.field11" />
          </el-form-item>
          <el-form-item label="谷电成本(单位:元/每度)">
            <el-input v-model="form.field12" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <div class="title">短信发送设置</div>
          <el-form-item label="财务短信发送号码1">
            <el-input v-model="form.field13" />
          </el-form-item>
          <el-form-item label="财务短信发送号码2">
            <el-input v-model="form.field14" />
          </el-form-item>
          <el-form-item label="工程短信发送号码1">
            <el-input v-model="form.field15" />
          </el-form-item>
          <el-form-item label="工程短信发送号码2">
            <el-input v-model="form.field16" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="footer">
      <el-button type="primary" @click="handleSave">保存</el-button>
      <el-button type="default" @click="handleCancel">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystemManagementDefaultParameters',
  props: {},
  data() {
    return {
      form: {
        field1: '54000',
        field2: '300.00',
        field3: '500.00',
        field4: '0',
        field5: '2.0000',
        field6: '0',
        field7: '0',
        field8: '9990.0000',
        field9: '1.0000',
        field10: '1.0000',
        field11: '1.0000',
        field12: '1.0000'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleSave() {
      return this.$message({ type: 'success', message: '保存成功' })
    },
    handleCancel() {
      this.$refs['form'].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 20px;
}
</style>
