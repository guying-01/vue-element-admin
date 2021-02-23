/*
 * @Author: gy
 * @Date: 2019-12-17 09:57:18
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-16 20:07:26
 */
import request from '@/utils/request'
import moment from 'moment'
import { getType, downFile } from '@/utils/'
export default {
  data() {
    return {
      responseData: {},
      tableData: [],
      totalCount: 0, // list总条数
      dialogVisible: false, // 新增/编辑弹窗
      detailDialogVisible: false, // 详情弹窗
      checkDialogVisible: false, // 复核弹窗
      action: 'add', // 区分新增或编辑动作类型
      selection: [],
      editIndex: 0,
      title: '新增',
      pageNum: 1,
      pageSize: 15,
      loading: false,
      tableRenderFirstTime: true,
      filters: [],
      searchValue: {},
      searchType: '',
      isExpand: false
    }
  },
  mounted() {
    this.tableRenderFirstTime && this.getList()
  },
  watch: {},
  methods: {
    iPagination(opt) {
      // console.log(opt);
      this.pageSize = opt.pageSize
      this.pageNum = opt.currentPage
      this.getList()
    },
    filterChange(filters) {
      this.filters = filters
      this.getList()
    },
    /**
     * @description: 可以获取到comm-table选中项，用来批量删除
     * @param {Array} selection
     * @return:
     */
    selectionChange(selection) {
      // console.log(selection, "selectionChange");
      this.selection = selection
    },
    // 搜索
    async searchForm(val, type, data = {}) {
      if (
        this.beforeSearchForm &&
        getType(this.beforeSearchForm) == 'function'
      ) {
        await this.beforeSearchForm.call(this, data)
      }
      this.searchType = type
      this.searchValue = Object.assign(this.searchValue, val)
      this.getList()
    },
    // 搜索-重置
    async resetForm(type) {
      if (
        this.beforeResetForm &&
        getType(this.beforeResetForm) == 'function'
      ) {
        await this.beforeResetForm.call(this)
      }
      this.searchType = type
      this.searchValue = {}
      this.getList()
    },
    getList() {
      if (this.url && this.url.list) {
        this.loading = true
        const params = {}
        for (const item in this.queryConditions) {
          if (this.queryConditions[item] != null) {
            params[item] = this.queryConditions[item]
          }
        }
        this.filters.map(item => {
          const key = Object.keys(item)[0]
          if (key) {
            params[key] = Object.values(item)[0].join(',')
          }
        })
        // 搜索字段
        if (
          JSON.stringify(this.searchValue) !== '{}' &&
          !this.searchType
        ) {
          const searchRes = {}
          for (const k in this.searchValue) {
            // 处理时间选择
            if (k == 'timeRange') {
              searchRes['beginTime'] = this.searchValue[k][0]
              searchRes['endTime'] = this.searchValue[k][1]
            } else {
              searchRes[k] = this.searchValue[k]
            }
          }

          // 增加默认开始结束时间 2020/08/20
          if (this.$refs['search']) {
            try {
              searchRes['beginTime'] = this.$refs['search'][
                'formInline'
              ]['beginTime']
              searchRes['endTime'] = this.$refs['search'][
                'formInline'
              ]['endTime']
            } catch (error) {
              // console.log(error);
            }
          }

          params['searchValue'] = JSON.stringify(searchRes)
        } else if (
          JSON.stringify(this.searchValue) !== '{}' &&
          this.searchType
        ) {
          for (const k in this.searchValue) {
            params[k] = this.searchValue[k]
          }
        } else {
          delete params['searchValue']
        }
        if (this.url.hasOwnProperty('noPage')) {
          var param = Object.assign(params)
        } else {
          var param = Object.assign(
            { pageNum: this.pageNum, pageSize: this.pageSize },
            params
          )
        }
        httpAction(
          this.url.list,
          param,
          // Object.assign(
          //     { pageNum: this.pageNum, pageSize: this.pageSize },
          //     params
          // ),
          this.url.method || 'get'
        )
          .then(res => {
            this.loading = false
            this.responseData = res
            if (res.code === 0) {
              if (this.url.hasOwnProperty('noPage')) {
                if (typeof res['data'] === 'string') {
                  this.tableData =
                    JSON.parse(res['data']) ||
                    res.rows ||
                    []
                  this.totalCount = this.tableData.length
                } else {
                  this.tableData =
                    res.rows || res['data'] || []
                  this.totalCount =
                    res['data'].length || res.rows.length
                }
              } else {
                if (res.total != null) {
                  this.tableData =
                    res.rows || res['data'] || []
                  this.totalCount = res.total || 0
                } else {
                  // 无分页
                  if (typeof res['data'] === 'string') {
                    this.tableData =
                      res.rows ||
                      JSON.parse(res['data']) ||
                      []
                    this.totalCount = this.tableData.length
                  } else {
                    this.tableData =
                      res.rows || res['data'] || []
                    this.totalCount = res['data'].length
                    this.totalCount =
                      res['data'].length ||
                      res.rows.length
                  }
                }
              }
            } else {
              this.$msgbox({ type: 'error', message: res.msg })
            }
          })
          .catch(e => {
            // console.log(e);
            this.loading = false
          })
      }
    },
    search() {
      this.getList()
    },
    // 是否展开table(展开与折叠切换)
    handleExpand() {
      this.isExpand = !this.isExpand
      this.$nextTick(() => {
        this.forArr(this.tableData, this.isExpand)
      })
    },
    // 遍历
    forArr(arr, isExpand) {
      arr.forEach(i => {
        this.$refs['dragTable'].$refs['table'].toggleRowExpansion(
          i,
          isExpand
        )
        if (i.children) {
          this.forArr(i.children, isExpand)
        }
      })
    },
    // 新增/编辑弹窗打开后回调
    dialogOpen() {
      this.$nextTick(() => { })
    },
    // 点击搜索
    handleSearch() {
      this.queryConditions = this.form
      this.getList()
    },
    // 点击新增
    async handleAdd(data = {}) {
      this.action = 'add'
      this.title = '新增'
      this.dialogVisible = true
      this.$nextTick(async() => {
        this.$refs['addDialog'].$refs['form'].resetFields()
        if (
          this.beforeAdd &&
          getType(this.beforeAdd) == 'function'
        ) {
          await this.beforeAdd.call(this, data)
        }
      })
    },
    // 点击编辑
    async handleEdit(data) {
      this.title = '编辑'
      this.action = 'edit'

      if (
        this.beforeEdit &&
        getType(this.beforeEdit) == 'function'
      ) {
        data.status = 1
        const res = await this.beforeEdit.call(this, data)
        this.dialogVisible = true
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs['addDialog']['form'] = JSON.parse(
              JSON.stringify(res)
            )
          }, 200)
        })
        if (res.hasOwnProperty('menuIds')) {
          const _this = this
          setTimeout(function() {
            _this.$refs['addDialog']['form'].menuIdss = _this.$refs['addDialog']['form'].menuIds
            _this.$refs['addDialog']['form'].menuIds.forEach(value => {
              _this.$refs.addDialog.$refs.trees.setChecked(value, true, false)
            })
          }, 800)
        }
      } else {
        this.dialogVisible = true
        this.$nextTick(() => {
          this.$refs['addDialog']['form'] = Object.assign(
            {},
            this.form,
            data.row
          )
        })
      }
    },
    // 点击新增/编辑弹窗确认按钮
    async handleConfirm(callFn) {
      let param = this.$refs['addDialog']['form']

      if (
        this.beforeSubmit &&
        getType(this.beforeSubmit) == 'function'
      ) {
        param = await this.beforeSubmit.call(
          this,
          JSON.parse(JSON.stringify(param))
        )
      }

      if (param['status'] == -1) {
        return false
      }
      // 如果需要校验
      if (this.$refs['addDialog']['rules']) {
        const validStatus = await this.$refs['addDialog']['$refs']['form']
          .validate()
          .then(valid => {
            return new Promise(resolve => {
              resolve(valid)
            })
          })
          .catch(e => {
            return new Promise(resolve => {
              resolve(e)
            })
          })
        if (!validStatus) return
      }

      if (this.action == 'add') {
        if (this.url.add) {
          // 新增时如果需要检查唯一性
          const checkRepeatParam = this.$refs['addDialog'][
            'checkRepeatParam'
          ]
          if (checkRepeatParam) {
            let res = true
            if (
              getType(checkRepeatParam) == 'array' &&
              checkRepeatParam.length > 1
            ) {
              const asyncFuns = []
              checkRepeatParam.map(item => {
                asyncFuns.push(this.doCheckRepeat(item, param))
              })
              const p = await Promise.all(asyncFuns)
              // 一假全假
              p.map(item => {
                if (!item) {
                  res = false
                }
              })
            } else {
              res = await this.doCheckRepeat(
                checkRepeatParam,
                param
              )
            }
            // true 已存在主键数据
            if (res) return
          }
          this.loading = true
          httpAction(this.url.add, param, this.url.addMethod || 'get')
            .then(res => {
              this.loading = false
              if (res.code == 0) {
                this.$message({
                  type: 'success',
                  message: '新增成功'
                })
                this.dialogVisible = false
                this.getList()
                callFn &&
                  getType(callFn) == 'function' &&
                  callFn()
                this.$nextTick(() => {
                  if (
                    this.afterSubmit &&
                    getType(this.afterSubmit) ==
                    'function'
                  ) {
                    this.afterSubmit.call(this, res)
                  }
                })
              } else {
                this.$msgbox({
                  type: 'error',
                  message: res.msg
                })
                if (
                  this.afterSubmit &&
                  getType(this.afterSubmit) ==
                  'function'
                ) {
                  this.afterSubmit.call(this, res)
                }
              }
            })
            .catch(e => {
              // console.log(e);
              this.loading = false
            })
        }
      } else if (this.action == 'edit') {
        if (this.url.edit) {
          // console.log(param, "edit");
          this.loading = true
          httpAction(
            this.url.edit,
            param,
            this.url.editMethod || 'get'
          )
            .then(res => {
              this.loading = false
              if (res.code == '000000') {
                this.dialogVisible = false
                this.$message({
                  type: 'success',
                  message: '编辑成功'
                })
                this.getList()
                callFn &&
                  getType(callFn) == 'function' &&
                  callFn()
              } else {
                this.$msgbox({
                  type: 'error',
                  message: res.msg
                })
              }
            })
            .catch(e => {
              // console.log(e);
              this.loading = false
            })
        }
      }
    },
    // 取消
    handleCancel() {
      this.dialogVisible = false
    },
    handleDetail(param) {
      this.title = '详情'
      this.action = 'detail'
      this.detailDialogVisible = true
      if (this.url.detail) {
        httpAction(
          this.url.detail,
          param,
          this.url.detailMethod || 'get'
        ).then(res => {
          if (res.code == '000000') {
            this.$refs['detailDialog']['form'] = res.data
          } else {
            this.$msgbox({ type: 'error', message: res.msg })
          }
        })
      }
    },
    // 点击复核
    handleCheck() {
      this.checkDialogVisible = true
    },
    // 确认复核
    handleCheckConfirm() {
      this.checkDialogVisible = false
    },
    /**
     * @description: 批量删除
     * @param {field} 表格column中的字段名
     * @return:
     */
    handleDelete(field) {
      // if (!field) return;
      if (this.selection.length == 0) {
        return this.$msgbox({
          type: 'error',
          message: '请至少选择一项'
        })
      }
      return this.$message({
        type: 'success',
        message: '删除成功'
      })
      const fields = this.selection
        .map(item => {
          // console.log(item);
          return item[field]
        })
        .join(',')
      // console.log(fields, "fields");
      if (this.url.delete) {
        restFulGetAction(
          this.url.delete,
          { fields },
          this.url.deleteMethod || 'get'
        ).then(res => {
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: res.msg || '删除成功'
            })
            this.getList()
          } else {
            this.$msgbox({ type: 'error', message: res.msg })
          }
        })
      }
    },
    // 单个删除
    handleDeleteOne(field) {
      // console.log(field);
      if (!field) return
      if (this.url.delete) {
        restFulGetAction(
          this.url.delete,
          field,
          this.url.deleteMethod || 'get'
        ).then(res => {
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: res.msg || '删除成功'
            })
            this.getList()
          } else {
            this.$msgbox({ type: 'error', message: res.msg })
          }
        })
      }
    },
    /**
     * @description: 导出
     * @param {type}
     * @return:
     */
    handleExport() {
      const mmt = moment().format('YYYYMMDDhhmmss')
      const file_name = `${mmt}.xlsx`
      return downFile([], file_name)
      if (this.url && this.url.export) {
        // if(!this.selection.length) return this.$message.error('请至少选择一项');
        const opt = Object.assign(
          this.queryConditions || {},
          this.searchValue
        )
        downFile(this.url.export, opt).then(res => {
          if (!res) return this.$message.error('导出失败')
          const csvData = new Blob([res], {
            type: 'application/x-xlsx'
          }) // response.data要导出的内容

          // for IE
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(csvData, file_name)
          }
          // for Non-IE (chrome, firefox etc.)
          else {
            var a = document.createElement('a')
            var url = window.URL.createObjectURL(csvData)
            a.href = url
            a.download = file_name
            a.click()
            a.remove()
            window.URL.revokeObjectURL(url)
          }
        })
      }
    },
    handleReset() {
      if (this.form) {
        for (const i in this.form) {
          this.form[i] = ''
        }
      }
      if (this.searchValue) {
        for (const i in this.searchValue) {
          this.searchValue[i] = ''
        }
      }
      this.getList()
    },
    // 自定义索引
    indexMethod(index) {
      if (index < 9) {
        return '0' + (index + 1)
      }
      return index + 1
    },
    /**
     * @description: 新增时检测是否重复
     * @param {Object | Array} checkRepeatParam
     * @return {type}
     */
    doCheckRepeat(checkRepeatParam, param) {
      return new Promise(resolve => {
        const key = checkRepeatParam['param']
        const params = new Object()
        params[key] = param[key]
        httpAction(
          checkRepeatParam.url,
          params,
          checkRepeatParam.method || 'get'
        )
          .then(res => {
            if (res.code == 0) {
              // 1为不唯一 0唯一
              if (res.data == 1) {
                this.$msgbox({
                  type: 'error',
                  message: `已存在相同${key}，新增失败`
                })
                resolve(true)
              }
            } else {
              this.$msgbox({
                type: 'error',
                message: res.msg
              })
            }
            resolve(false)
          })
          .catch(e => {
            // console.log(e);
          })
      })
    }
  }
}
