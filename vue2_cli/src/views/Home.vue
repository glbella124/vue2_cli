<template>
  <div class="home">
    <NewSelect
      v-model="streetSelectVal"
      :options="streetOptions"
      :value="streetSelectVal"
    />

    <LineChart
      class="line-style"
      :categoryData="categoryData"
      :valueData="valueData"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NewSelect from "../components/common/NewSelect.vue";
import LineChart from "../components/chart/LineChart.vue";
import { street } from "../config/common";
export default {
  name: "Home",
  components: {
    NewSelect,
    LineChart,
  },
  data() {
    return {
      streetSelectVal: "全部街道",
      streetOptions: [],
    };
  },
  created() {
    this.categoryData = [
      "Mon",
      "Tudes",
      "Wed",
      "Thurs",
      "Frid",
      "Saturday",
      "Sunday",
    ];
    this.valueData = [900, 910, 930, 940, 800, 850, 800];

    for (let key in street) {
      this.streetOptions.push({
        value: street[key],
        label: street[key],
      });
    }
    console.log(this.streetOptions, "streetOptions");
  },
};
</script>
<style>
.home {
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
}
.line-style {
  width: 90%;
  height: 90%;
}
</style>
