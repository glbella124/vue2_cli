<template>
  <el-select
    size="small"
    class="re-select-container"
    v-model="imgValue"
    placeholder="请选择"
    @change="currentSel"
  >
    <!-- popper-append-to-body:是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性-->
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<script>
export default {
  name: "NewSelect",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    value: [String, Number],
    popper: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "value", //绑定的值，通过父组件传递,
    event: "selectEvent", //自定义事件名
  },
  data() {
    return {
      imgValue: this.value,
    };
  },
  watch: {
    imgValue(nv) {
      this.$emit("changeColor", nv);
    },
  },
  created() {
    console.log("默认排列装置：");
    console.log(this.imgValue);
  },
  mounted() {},
  methods: {
    currentSel() {
      this.$emit("selectEvent", this.imgValue);
    },
  },
};
</script>
<style lang="less" scoped>
.re-select-container {
  font-size: 1rem;
  .select-trigger {
    height: 100%;
  }

  .el-input--suffix {
    height: 100%;

    .el-input__inner {
      height: 100%;
      line-height: 100%;
    }
  }
  .el-input--suffix .el-input__inner {
    background: transparent !important;
  }
}
</style>
