<!--
 * @Author       : gy
 * @Date         : 2021-01-04 22:54:18
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-17 20:07:32
 * @FilePath     : /yufufei/src/views/system-management/operator/index.vue
 * @Description  : 页面描述
-->
<template>
  <div class="list-page">
    <FilterPanel>
      <div class="filters">
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          label-position="left"
        >
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="创建时间:">
                <el-date-picker
                  v-model="form.prop1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="关键字:">
                <el-input v-model="form.prop2" placeholder="搜索关键字" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" @click="handleSearch">查询</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </FilterPanel>
    <div class="operation">
      <el-button type="primary" @click="handleAdd">添加</el-button>
      <el-button type="warning" @click="handleDelete">删除</el-button>
      <el-button type="danger" @click="handleResetPassword">重置密码</el-button>
    </div>

    <div class="list">
      <comm-table
        :data="tableData"
        @selection-change="selectionChange"
        :static-table="true"
      >
        <el-table-column label="" type="selection" />
        <el-table-column label="创建日期" prop="field1" />
        <el-table-column label="创建人" prop="field2" />
        <el-table-column label="登录名" prop="field3" />
        <el-table-column label="操作员姓名" prop="field4" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="success" @click="handleEdit(scope)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </comm-table>
    </div>
    <el-drawer
      :visible="dialogVisible"
      :title="title"
      @close="dialogVisible = false"
      size="50%"
    >
      <Add ref="addDialog" />
      <div style="margin-left:20px">
        <el-button type="primary" @click="dialogVisible = false"
          >确认</el-button
        >
        <el-button type="default" @click="dialogVisible = false"
          >取消</el-button
        >
      </div>
    </el-drawer>

    <el-drawer
      :visible="eidtDialogVisible"
      title="编辑"
      @close="eidtDialogVisible = false"
      size="50%"
    >
      <Edit ref="editDialog" />
      <div style="margin-left:20px">
        <el-button type="primary" @click="eidtDialogVisible = false"
          >确认</el-button
        >
        <el-button type="default" @click="eidtDialogVisible = false"
          >取消</el-button
        >
      </div>
    </el-drawer>

    <el-drawer
      :visible="resetDialogVisible"
      title="修改密码"
      @close="resetDialogVisible = false"
      size="50%"
    >
      <ResetPwd ref="resetDialog" />
      <div style="margin-left:20px">
        <el-button type="primary" @click="resetDialogVisible = false"
          >确认</el-button
        >
        <el-button type="default" @click="resetDialogVisible = false"
          >取消</el-button
        >
      </div>
    </el-drawer>
  </div>
</template>

<script>
import TableMixin from "@/mixins/TableCommMixin";
import Add from "./modules/add";
import Edit from "./modules/edit";
import ResetPwd from "./modules/resetPwd";
export default {
  name: "SystemManagementOperator",
  mixins: [TableMixin],
  components: { Add, ResetPwd ,Edit},
  props: {},
  data() {
    return {
      form: {},
      resetDialogVisible: false,
      eidtDialogVisible: false,
      tableData: [
        {
          field1: "2019-07-01 13:31:56",
          field2: "Acrel管理员",
          field3: "	acrelbk",
          field4: "演示账号"
        },
        {
          field1: "2019-08-07 17:09:35",
          field2: "Acrel管理员",
          field3: "AdminSZY",
          field4: "AdminSZY"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleResetPassword() {
      if (this.selection.length < 1) {
        return this.$message({
          type: "error",
          message: "请选择需要修改密码的用户"
        });
      }
      this.resetDialogVisible = true;
    },
    handleEdit(scope) {
      console.log(scope)
      this.eidtDialogVisible = true;
      this.$nextTick(() => {
        this.$refs["editDialog"]["form"] = scope.row;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
