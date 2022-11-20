<template>
  <el-pagination
    class="pagination"
    background
    layout="prev,pager,next"
    :page-size="paginationData.pageSize"
    :pager-count="paginationData.pagerCount"
    :total="paginationData.total"
    :current-page="paginationData.currentPage"
    @current-change="paginationData.currentChange"
  ></el-pagination>
</template>

<script>
/**
 * 分页组件
 * page-size -- 每页显示条目个数，支持 .sync 修饰符;
 * pager-count -- 页码按钮的数量，当总页数超过该值时会折叠;
 * total -- 总条目数;
 * current-page -- 当前页数，支持 .sync 修饰符;
 * current-change -- currentPage 改变时会触发;
 */
export default {
  name: "Pagination",
  props: ["paginationData"],
  methods: {},
};
</script>

<style lang="less" scoped>
.pagination {
  /deep/.btn-prev,
  .btn-next,
  .el-pager li {
    // color: #404040;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 400;
    // background: rgba(99, 165, 164, 0.1) ;
    // border: 1px solid rgba(0, 255, 255, 0.3) ;
  }
  .el-pager li:not(.disabled).active {
    // background-color: #00e9e6 ;
    // color: #fff ;
  }
}
</style>
