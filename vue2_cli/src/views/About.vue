<template>
  <div class="about">
    <LineChart class="line"  :categoryData="categoryData" :valueData="valueData" />
  </div>
</template>
<script>
import LineChart from "../components/chart/LineChart.vue";
export default {
  name: "About",
  components: {
    LineChart
  },
  data() {
    return {
      info: "This is an about page",
    };
  },
  created() {
    this.categoryData = [1,2,3,4,5,6,7]
    this.valueData = [820, 932, 901, 934, 1290, 1330, 1320];
  },
};
</script>
<style>
.about{
  width: 100%;
  height: 400px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.line{
  width: 95%;
  height: 98%;
}
</style>
