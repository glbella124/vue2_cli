<template>
  <div class="bar-style">
    <div class="toggle">
      <div
        class="button-style"
        v-for="item in buttonData"
        :key="item"
        @click="clickEvent(item)"
        :class="{ 'button-selected': item === btnChecked }"
      >
        {{ item }}
      </div>
      <!-- <input type="button" value="A类" @click="clickEvent('A')" />
      <input type="button" value="B类" @click="clickEvent('B')" />
      <input type="button" value="C类" @click="clickEvent('C')" /> -->
    </div>
    <BarChart
      class="bar"
      :categoryData="categoryData"
      :soilValueData="soil"
      :waterValueData="water"
      :forestryValueData="forestry"
      :sourceType="btnChecked"
    />
  </div>
</template>
<script>
import BarChart from "../components/chart/BarChart.vue";
import { street, soilData, waterData, forestryData } from "../config/common";
export default {
  name: "Bar",
  components: {
    BarChart,
  },
  data() {
    return {
      info: "This is a bar page",
      buttonData: ["A", "B", "C"],
      btnChecked: "A",
      AData: {
        soil: [],
        water: [],
        forestry: [],
      },
      BData: {
        soil: [],
        water: [],
        forestry: [],
      },
      CData: {
        soil: [],
        water: [],
        forestry: [],
      },
    };
  },
  created() {
    // 目录
    this.categoryData = Object.keys(street);
    // 默认A类
    this.soil = [];
    this.water = [];
    this.forestry = [];

    for (let i in soilData) {
      this.AData.soil.push(soilData[i].A);
      this.BData.soil.push(soilData[i].B);
      this.CData.soil.push(soilData[i].C);
    }

    for (let i in waterData) {
      this.AData.water.push(waterData[i].A);
      this.BData.water.push(waterData[i].B);
      this.CData.water.push(waterData[i].C);
    }

    for (let i in forestryData) {
      this.AData.forestry.push(forestryData[i].A);
      this.BData.forestry.push(forestryData[i].B);
      this.CData.forestry.push(forestryData[i].C);
    }

    this.soil = this.AData.soil;
    this.water = this.AData.water;
    this.forestry = this.AData.forestry;
  },
  methods: {
    clickEvent(type) {
      this.btnChecked = type;
      switch (type) {
        case "A":
          this.soil = this.AData.soil;
          this.water = this.AData.water;
          this.forestry = this.AData.forestry;
          break;
        case "B":
          this.soil = this.BData.soil;
          this.water = this.BData.water;
          this.forestry = this.BData.forestry;
          break;
        case "C":
          this.soil = this.CData.soil;
          this.water = this.CData.water;
          this.forestry = this.CData.forestry;
          break;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.bar-style {
  width: 100%;
  height: 400px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bar {
  width: 95%;
  height: 98%;
}
.button-style {
  width: 50px;
  height: 30px;
  background: plum;
  border: 1px solid black;
  margin-bottom: 2px;
  cursor: pointer;
}

.button-selected {
  background: gray;
}
</style>
