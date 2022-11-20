<template>
  <div id="barChart" ref="barChart"></div>
</template>
<script>
import * as echarts from "echarts";
import { street, soilData, waterData, forestryData } from "../../config/common";
export default {
  name: "barChart",
  data() {
    return {
      barChart: null,
    };
  },
  props: {
    categoryData: {
      type: Array,
      default() {
        return [];
      },
    },
    soilValueData: {
      type: Array,
      default() {
        return [];
      },
    },
    waterValueData: {
      type: Array,
      default() {
        return [];
      },
    },
    forestryValueData: {
      type: Array,
      default() {
        return [];
      },
    },
    sourceType: {
      type: String,
      default: "A",
    },
  },
  mounted() {
    this.initEchart(
      this.categoryData,
      this.soilValueData,
      this.waterValueData,
      this.forestryValueData
    );
  },
  watch: {
    sourceType(val) {
      console.log(val, "sourceType");
      this.initEchart(
        this.categoryData,
        this.soilValueData,
        this.waterValueData,
        this.forestryValueData
      );
    },
  },
  methods: {
    initEchart(categoryData, soil, water, forestry) {
      if (!this.barChart) {
        this.barChart = echarts.init(this.$refs.barChart);
      }
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          show: false,
        },
        yAxis: {
          // axisLine: "none",
          axisTick: "none",
          axisLabel: {
            //  inside:true,
          },
          type: "category",
          data: categoryData,
          // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        series: [
          {
            name: "土地资源",
            type: "bar",
            stack: "total",
            // label: {
            //   show: true
            // },
            emphasis: {
              focus: "series",
            },
            data: soil,
            // data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "水资源",
            type: "bar",
            stack: "total",
            // label: {
            //   show: true
            // },
            emphasis: {
              focus: "series",
            },
            data: water,
            // data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "林地资源",
            type: "bar",
            stack: "total",
            // label: {
            //   show: true
            // },
            emphasis: {
              focus: "series",
            },
            data: forestry,
            // data: [220, 182, 191, 234, 290, 330, 182],
          },
        ],
      };
      this.barChart.setOption(option);
    },
  },
};
</script>
