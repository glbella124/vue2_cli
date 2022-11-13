<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学校地址:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <h2>{{myAge}}</h2>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>
<script>
export default {
  name: "MySchool",
  data() {
    return {
      msg: "Welcome to my school",
      myAge:this.age
    };
  },
  // 简单接收写法
  // props:['name','address']
  // 接收的同时对数据进行类型限制
  // props:{
  //   name:String,
  //   address:String
  // }

  // required和default不会同时出现
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    },
    address: {
      type: String,
      required: true,
    },
  },
  methods:{
    updateAge(){
      this.myAge++
    }
  }
};
</script>
<style>
.school {
  width: 100%;
  height: 100%;
  background: yellowgreen;
}
</style>
