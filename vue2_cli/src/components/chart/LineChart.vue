<template>
  <div id="lineChart" ref="line"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "LineChart",
  data() {
    return {
      lineChart: null,
    };
  },
  props: {
    categoryData: {
      type: Array,
      default() {
        return [];
      },
    },
    valueData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    categoryData: {
      handler(val) {
        // console.log(val, "categoryData");
      },
      immediate: true,
    },
    // categoryData(val){
    //   console.log(val,"categoryData");
    // }
  },
  mounted() {
    this.$nextTick(() => {
      this.initEchart(this.categoryData, this.valueData);
    });
  },
  methods: {
    initEchart(xData, seriesData) {
      if (!this.lineChart) {
        this.lineChart = echarts.init(this.$refs.line);
      }
      let option = {
        xAxis: {
          type: "category",
          data: xData,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: seriesData,
            // data: this.seriesData,
            type: "line",
            smooth: true,
          },
        ],
      };
      this.lineChart.setOption(option);
    },
  },
};
</script>
