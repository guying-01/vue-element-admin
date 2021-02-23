<template>
  <div class="container">
    <div class="operation">
      <el-button type="primary" @click="handleSave">保存</el-button>
      <el-button type="warning" @click="handleReset">清空</el-button>
      <el-button type="success" @click="handleRefresh">刷新</el-button>
    </div>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <div class="title">角色列表</div>
        <el-tree
          ref="roleTree"
          :data="roleList"
          :props="roleProp"
          node-key="id"
          :show-checkbox="true"
          @check="handleRoleTreeCheck"
        />
      </el-col>
      <el-col :span="12">
        <div class="title">权限菜单</div>
        <el-tree
          ref="perTree"
          :data="perList"
          :props="perProp"
          :default-expand-all="true"
          :show-checkbox="true"
          node-key="id"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SystemManagementPermission',
  props: {},
  data() {
    return {
      checkedRoleId: '',
      roleList: [
        {
          label: '租户',
          id: 1
        },
        {
          label: '物业',
          id: 2
        },
        {
          label: '财务',
          id: 3
        },
        {
          label: '1',
          id: 4
        }
      ],
      roleProp: {},
      perList: [
        {
          label: '系统配置',
          id: 1,
          children: [
            {
              label: '角色设置',
              id: 2,
              children: [
                { label: '新增角色', id: 3 },
                { label: '删除角色', id: 4 },
                { label: '编辑角色', id: 5 }
              ]
            }
          ]
        }
      ],
      perProp: {}
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleSave() {
      return this.$message({ type: 'success', message: '保存成功' })
    },
    handleReset() {
      if (!this.checkedRoleId) {
        return this.$message({ type: 'error', message: '请至少选择一个角色' })
      }

      this.$refs['perTree'].setCheckedKeys([])
    },
    handleRefresh() {
      return this.$message({ type: 'success', message: '刷新成功' })
    },
    handleRoleTreeCheck(data, { checkedKeys }) {
      const { id } = data
      if (checkedKeys.length > 0) {
        this.$refs['roleTree'].setCheckedKeys([id])
        this.checkedRoleId = id
      } else {
        this.$refs['roleTree'].setCheckedKeys([])
        this.checkedRoleId = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>
