## 模板项目的结构
── node_modules
├── public
│ ├── favicon.ico: 页签图标
│ └── index.html: 主页面
├── src
│ ├── assets: 存放静态资源
│ │ └── logo.png
│ │── component: 存放组件
│ │ └── HelloWorld.vue
│ │── App.vue: 汇总所有组件
│ │── main.js: 入口文件
├── .gitignore: git 版本管制忽略的配置
├── babel.config.js: babel 的配置文件
├── package.json: 应用包配置文件
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件


## ref
1. 作用：用于给节点打标识
2. 读取方式：this.$refs.xxxxxx
props
1. 作用：用于父组件给子组件传递数据
2. 读取方式一: 只指定名称
props: ['name', 'age', 'setName']
3. 读取方式二: 指定名称和类型
props: {
name: String, age: Number, setNmae: Function
}
4. 读取方式三: 指定名称/类型/必要性/默认值
props: {
name: {type: String, required: true, default:xxx}, }

## 混入 mixin -- 两个组件共享一个配置