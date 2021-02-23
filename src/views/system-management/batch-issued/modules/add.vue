<!--
 * @Author       : gy
 * @Date         : 2021-02-16 18:26:27
 * @LastEditors: gy
 * @LastEditTime: 2021-02-23 16:31:59
 * @FilePath     : /yufufei/src/views/system-management/dianbiao/modules/add.vue
 * @Description  : 页面描述
-->
<template>
  <div style="padding:0 20px">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-checkbox v-model="checkAll" @change="handleCheckboxChange">
          全选
        </el-checkbox>

        <el-tree
          ref="tree"
          :data="treeList"
          :default-expand-all="true"
          :show-checkbox="true"
          node-key="id"
        />
      </el-col>
      <el-col :span="12">
        <div class="title">电表参数设置</div>
        <div class="extra">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="开启加班时间" />
            <el-checkbox label="开启合跳闸时间" />
            <el-checkbox label="开启欠费跳闸时间" />
            <el-checkbox label="保电用户" />
          </el-checkbox-group>
        </div>
        <el-form
          ref="form"
          :model="form"
          style="padding: 0 20px"
          label-width="120px"
        >
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
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      checkAll: false,
      checkList: [],
      treeList: [
        {
          label: '新大楼',
          id: 1,
          children: [
            {
              label: '019045',
              id: 2,
              children: [
                { label: '有线测试DTSY01', id: 3 },
                { label: 'DDSYtest02', id: 4 }
              ]
            }
          ]
        }
      ],
      form: {
      }
    }
  },
  mounted() {},
  methods: {
    handleCheckboxChange() {}
  }
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
