<template>
  <div class="school">
    <h2>学生姓名{{name}}</h2>
    <h2>{{newName}}</h2>
    <h3>{{fullName}}</h3>
    <button @click="showName">改变名字</button>
  </div>
</template>
<script>
import {mixin} from "../mixin"
export default {
  name: "MyStudent",
  data() {
    return {
      name:"Alice",
      firstName:"Jack",
      lastName:"Bruce"
    };
  },
  // 混入
  mixins:[mixin],
  computed:{
    newName:function(){
      return 'Edward'
    },
    fullName:{
      get:function(){
        return `${this.firstName} ${this.lastName}`
      },
      set:function(){
        console.log('值被调用了');
      }
    }

    // name:{
    //   set(val){
    //     val = 'change'
    //   },
    //   get(){
    //     return this.name
    //   }
    // }
  }
};
</script>
<style scoped>
.school {
  width: 100%;
  height: 100%;
  background: yellowgreen;
}
</style>
