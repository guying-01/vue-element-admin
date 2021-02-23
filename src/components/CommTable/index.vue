<!--
 * @Author: gy
 * @Date: 2020-01-04 15:40:06
 * @LastEditors  : gy
 * @LastEditTime : 2021-02-17 20:11:53
 -->
<template>
  <div class="table-wrapper">
    <el-table
      ref="table"
      v-loading="loading"
      :data="tableData"
      :show-summary="showSummary"
      :default-sort="defaultSort"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      :row-key="rowKeys"
      :highlight-current-row="highlightCurrentRow"
      @filter-change="filterChange"
      @header-click="headerClick"
      @row-contextmenu="rowContextmenu"
      @row-click="rowClick"
      @select="selectClick"
      @selection-change="selectionChange"
      @expand-change="expandChange"
      @current-change="currentChange"
    >
      <slot />
    </el-table>
    <el-pagination
      v-if="isPaginationShow"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageCount"
      @size-change="handleSizeChange"
      @current-change="handlePageChange"
      @prev-click="handlePageChange"
      @next-click="handlePageChange"
    />
  </div>
</template>

<script>
import { getType } from '@/utils/'
export default {
  components: {},
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    totalCount: {
      type: Number,
      default: () => {
        return 0
      }
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [15, 50, 100]
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    staticTable: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 15
    },
    showSummary: {
      type: Boolean,
      default: false
    },
    rowKeys: {
      type: String,
      default: () => ''
    },
    isPaginationHide: {
      type: Boolean,
      dafault: () => false
    },
    isDefaultSort: {
      type: Object,
      default: () => null
    },
    highlightCurrentRow: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      isPaginationShow: false,
      columnMap: {},
      pageCount: 0,
      curCol: {}, // 当前点击行
      filters: [],
      currentPage: 1,
      hasFilters: false,
      tableData: this.data,
      poper: null,
      defaultSort: this.isDefaultSort
        ? this.isDefaultSort
        : { prop: 'create_time', order: 'descending' },
      popperShow: false,
      reference: null,
      filterEle: null,
      dataTypes: ''
    }
  },
  watch: {
    totalCount: {
      handler(val) {
        this.pageCount = val || this.tableData.length
      },
      immediate: true
    },
    rowKeys: {
      handler(val) {
        // console.log(val, "rowKeys");
      },
      immediate: true
    },
    filters: {
      handler(val) {
        this.hasFilters = val.length != 0
        this.$emit('filter-change', JSON.parse(JSON.stringify(this.filters)))
      },
      deep: true
    },
    data(val) {
      if (this.staticTable) {
        this.tableData = this.data.slice(0, this.pageSize)
      } else {
        this.tableData = val
      }
    }
  },
  created() {
    if (!this.isPaginationHide) {
      this.isPaginationShow = true
    }

    if (this.staticTable) {
      this.tableData = this.data.slice(0, this.pageSize)
    }
  },
  methods: {
    selectionChange(selection) {
      if (getType(this.$listeners['selection-change']) == 'function') {
        this.$listeners['selection-change'].apply(this, [...arguments])
      }

      if (getType(this.$listeners['selectionChange']) == 'function') {
        this.$listeners['selectionChange'].apply(this, [...arguments])
      }
    },
    expandChange() {
      if (getType(this.$listeners['expand-change']) == 'function') {
        this.$listeners['expand-change'].apply(this, [...arguments])
      }
    },
    filterChange() {
      if (getType(this.$listeners['filter-change']) == 'function') {
        this.$listeners['filter-change'].apply(this, [...arguments])
      }
    },
    headerClick() {
      if (getType(this.$listeners['header-click']) == 'function') {
        this.$listeners['header-click'].apply(this, [...arguments])
      }
    },
    rowClick() {
      if (getType(this.$listeners['row-click']) == 'function') {
        this.$listeners['row-click'].apply(this, [...arguments])
      }
    },
    selectClick() {
      if (getType(this.$listeners['select']) == 'function') {
        this.$listeners['select'].apply(this, [...arguments])
      }
    },
    currentChange() {
      if (getType(this.$listeners['current-change']) == 'function') {
        this.$listeners['current-change'].apply(this, [...arguments])
      }
    },

    rowContextmenu() {
      if (getType(this.$listeners['row-contextmenu']) == 'function') {
        this.$listeners['row-contextmenu'].apply(this, [...arguments])
      }
    },
    handleSizeChange(num) {
      this.pageSize = num
      if (this.staticTable) {
        const start = (this.currentPage - 1) * this.pageSize
        this.staticTable = this.data.slice(start, start + this.pageSize)
      } else {
        this.$emit('iPagination', {
          pageSize: this.pageSize,
          currentPage: this.currentPage
        })
      }
    },
    handlePageChange(page) {
      // console.log(page);
      this.currentPage = page
      if (this.staticTable) {
        const start = (this.currentPage - 1) * this.pageSize
        this.tableData = this.data.slice(start, start + this.pageSize)
        this.pageCount = this.data.length
      } else {
        this.$emit('iPagination', {
          pageSize: this.pageSize,
          currentPage: this.currentPage
        })
      }
    }
  }
}
</script>

<style lang="scss">
//hover
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row > td,
.el-table__body tr.hover-row.current-row > td,
.el-table__body tr.hover-row.el-table__row--striped.current-row > td,
.el-table__body tr.hover-row.el-table__row--striped > td,
.el-table__body tr.hover-row > td {
  background-color: #e5e9f4 !important;
}

.table-wrapper {
  position: relative;
  .expand-box {
    position: absolute;
    top: -40px;
    left: 80px;
  }
  .el-table {
    background-color: transparent;
  }
  //上border
  .el-table th.is-leaf,
  .el-table td {
    border-bottom: 0;
  }

  //下border
  .el-table::before,
  .el-table--group::after,
  .el-table--border::after {
    background-color: transparent;
  }

  .el-checkbox__inner {
    border-radius: 50%;
  }
  .el-table__header-wrapper,
  .el-table__fixed-header-wrapper {
    table {
      tr {
        background-color: transparent;
        th {
          background-color: transparent;

          &:first-child {
            //跟tbody checkbox对齐
            border-left: 6px solid transparent;
          }
        }
      }
    }
  }
  .el-table__body-wrapper,
  .el-table__fixed-body-wrapper {
    table {
      border-spacing: 0 5px;
    }
    tbody {
      tr {
        box-shadow: -1px 2px 2px 0px rgba(221, 222, 223, 0.9);
        border-radius: 4px;
        &:nth-of-type(odd) {
          td {
            &:first-child {
              border-left: 2px solid #f18300;
              border-radius: 4px;
            }
          }
        }

        &:nth-of-type(even) {
          td {
            &:first-child {
              border-left: 2px solid #3399ff;
              border-radius: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
