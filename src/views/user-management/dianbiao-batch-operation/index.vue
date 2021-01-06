<!--
 * @Author       : gy
 * @Date         : 2021-01-04 20:30:12
 * @LastEditors  : gy
 * @LastEditTime : 2021-01-06 22:10:00
 * @FilePath     : /yufufei/src/views/user-management/dianbiao-batch-operation/index.vue
 * @Description  : 页面描述
-->
<template>
  <div>
    <Filter-Panel>
      <div class="filters">
        <div>
          <el-row>
            <el-col :span="6">
              <el-tree
                :data="data"
                :props="defaultProps"
                accordion
                @node-click="handleNodeClick"
              >
              </el-tree>
            </el-col>
            <el-col :span="18">
              <el-form :model="form" ref="form" size="mini" label-width="100px">
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="剩余金额:">
                      <el-radio-group v-model="form.resource">
                        <el-radio label="全部"></el-radio>
                        <el-radio label="低于或等于0"></el-radio>
                        <el-radio label="大于0"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="联网状态:">
                      <el-radio-group v-model="form.resource">
                        <el-radio label="全部"></el-radio>
                        <el-radio label="在线"></el-radio>
                        <el-radio label="失联"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="12">
                    <el-form-item label="合闸状态:">
                      <el-radio-group v-model="form.resource">
                        <el-radio label="全部"></el-radio>
                        <el-radio label="合闸"></el-radio>
                        <el-radio label="拉闸"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="电表模式:">
                      <el-radio-group v-model="form.resource">
                        <el-radio label="全部"></el-radio>
                        <el-radio label="预付费模式"></el-radio>
                        <el-radio label="强制模式"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="12">
                    <el-form-item label="开户状态:">
                      <el-radio-group v-model="form.resource">
                        <el-radio label="全部"></el-radio>
                        <el-radio label="已开户"></el-radio>
                        <el-radio label="未开户"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="告警状态:">
                      <el-radio-group v-model="form.resource">
                        <el-radio label="报警1"></el-radio>
                        <el-radio label="报警2"></el-radio>
                        <el-radio label="欠费"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="12">
                    <el-form-item label="仪表编号:">
                      <el-input placeholder="仪表编号" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="商铺号:">
                      <el-input placeholder="商铺号" />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </div>
    </Filter-Panel>

    <div class="operation">
      <el-button-group>
        <el-button type="primary" size="mini">电价设置</el-button>
        <el-button type="primary" size="mini">阶梯电价设置</el-button>
        <el-button type="primary" size="mini">报警设置</el-button>
        <el-button type="primary" size="mini">强制合闸</el-button>
        <el-button type="primary" size="mini">强制拉闸</el-button>
        <el-button type="primary" size="mini">恢复预付费</el-button>
        <el-button type="primary" size="mini">功率阈值设置</el-button>
        <el-button type="primary" size="mini">抄表导出</el-button>
        <el-button type="primary" size="mini">下发报警短信</el-button>
        <el-button type="primary" size="mini">刷新表状态</el-button>
        <el-button type="primary" size="mini">历史抄表记录</el-button>

      </el-button-group>
    </div>
  </div>
</template>

<script>
import FilterPanel from "@/components/FilterPanel/";
export default {
  name: "UserManagementDianbiaoBatchOperation",
  components: { FilterPanel },
  props: {},
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      form: {}
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped></style>
