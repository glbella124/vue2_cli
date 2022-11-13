<template>
  <div class="school">
    <h2>学生姓名{{name}}</h2>
    <button @click="showName">显示学生姓名</button>
  </div>
</template>
<script>
import {mixin} from "../mixin"
export default {
  name: "MyStudent",
  data() {
    return {
      name:"Alice"
    };
  },
  // 混入
  mixins:[mixin]
};
</script>
<style scoped>
.school {
  width: 100%;
  height: 100%;
  background: yellowgreen;
}
</style>
