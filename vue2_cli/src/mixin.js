// 分别暴露
export const mixin = {
    methods:{
        showName(){
            console.log(this.name);
            this.name ="Haha"
        }
    }
}

// 
// const mixin = {
//     methods:{
//         showName(){

//         }
//     }
// }

// // 默认暴露
// export default mixin