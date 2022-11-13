<template>
  <div id="app">
    <h1 v-text="msg" ref="myRef"></h1>
    <button @click="showDOM">点击输出DOM元素</button>
    <!-- 非动态绑定传入的是字符串，动态绑定数据看具体类型 -->
    <MySchool :name="'Bella'" :address="'Shanghai'" :age="30" />
    <MyStudent  />
  </div>
</template>

<script>
import MySchool from "@/components/MySchool.vue";
import MyStudent from "@/components/MyStudent.vue";
export default {
  name: "App",
  components: {
    MySchool,
    MyStudent,
  },
  data() {
    return {
      msg: "Welcome to learn Vue",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.myRef);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
