<template>
  <div class="page">
    <div class="page-inner">
      <Pagination :paginationData="paginationData"/>
    </div>
  </div>
</template>

<script>
import Pagination from "../components/common/Pagination.vue";
export default {
  name: "Home",
  components: {
    Pagination,
  },
  data() {
    return {
      paginationData:{
        total:"",
        pagesize: 10,
        pagerCount:5,
        currentPage: "",
        currentChange:(val)=>{
          console.log(val,"current-page");
          this.getPageData(val)
        }
      }
    };
  },
  created() {
    this.getPageData(1)
  },
  methods:{
    getPageData(val){
      this.paginationData.currentPage = val
      this.paginationData.total = 100
    }
  }
};
</script>
<style lang="less" scoped>
.page {
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid orangered;
  &-inner {
    width: 60%;
    height: 90%;
    background: lightblue;
  }
}
</style>
