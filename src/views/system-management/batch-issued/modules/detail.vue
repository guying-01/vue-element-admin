<!--
 * @Author       : gy
 * @Date         : 2021-02-16 18:26:27
 * @LastEditors: gy
 * @LastEditTime: 2021-02-24 11:10:19
 * @FilePath     : /yufufei/src/views/system-management/dianbiao/modules/add.vue
 * @Description  : 页面描述
-->
<template>
  <div style="padding: 20px">
    <el-form
      ref="form"
      :model="form"
      style="padding: 0 20px"
      label-width="120px"
    >
      <div class="title">电表参数设置</div>
      <div class="extra">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="开启加班时间" />
          <el-checkbox label="开启合跳闸时间" />
          <el-checkbox label="开启欠费跳闸时间" />
          <el-checkbox label="保电用户" />
        </el-checkbox-group>
      </div>

      <el-form-item label="加班时">
        <el-select v-model="form.field1" placeholder="请选择">
          <el-option
            v-for="item in [0, 11]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="加班分">
        <el-select v-model="form.field2" placeholder="请选择">
          <el-option
            v-for="item in [0, 59]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="合闸时">
        <el-select v-model="form.field3" placeholder="请选择">
          <el-option
            v-for="item in [0, 11]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="合闸分">
        <el-select v-model="form.field4" placeholder="请选择">
          <el-option
            v-for="item in [0, 59]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="分闸时">
        <el-select v-model="form.field5" placeholder="请选择">
          <el-option
            v-for="item in [0, 11]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="分闸分">
        <el-select v-model="form.field6" placeholder="请选择">
          <el-option
            v-for="item in [0, 59]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="欠费跳闸开始时">
        <el-select v-model="form.field7" placeholder="请选择">
          <el-option
            v-for="item in [0, 11]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="欠费跳闸开始分">
        <el-select v-model="form.field8" placeholder="请选择">
          <el-option
            v-for="item in [0, 59]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="欠费跳闸结束时">
        <el-select v-model="form.field9" placeholder="请选择">
          <el-option
            v-for="item in [0, 11]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="欠费跳闸结束分">
        <el-select v-model="form.field10" placeholder="请选择">
          <el-option
            v-for="item in [0, 59]"
            :key="item"
            :value="item"
            :label="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="开启保电模式">
        <el-select v-model="form.field11" placeholder="请选择">
          <el-option :value="1" label="是" />
          <el-option :value="2" label="否" />
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input
          v-model="form.field12"
          type="textarea"
          placeholder="请输入备注"
        />
      </el-form-item>

      <div class="title">已执行命令</div>
      <el-form-item label="命令结果">
        <el-select v-model="form.field13" placeholder="请选择">
          <el-option :value="1" label="下发成功" />
          <el-option :value="2" label="下发失败" />
        </el-select>
      </el-form-item>
      <el-button-group>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button
          type="success"
          icon="el-icon-refresh"
        >重新下发失败命令</el-button>
      </el-button-group>
      <comm-table
        :data="tableData"
        :static-table="true"
        @selection-change="selectionChange"
      >
        <el-table-column label="创建日期" prop="field1" width="150" />
        <el-table-column label="宿舍号" prop="field2" />
        <el-table-column label="已下发" prop="field3" />
      </comm-table>
    </el-form>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableCommMixin'

export default {
  components: {},
  mixins: [TableMixin],
  props: {},
  data() {
    return {
      form: {},
      checkList: [],
      tableData: [
        { field1: '2020-10-29 10:01:29', field2: '158号', field3: 'false' }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 20px;
}
.extra{
  margin-bottom:20px;
}
</style>
