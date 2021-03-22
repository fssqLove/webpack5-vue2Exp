# webpack5-vue2Exp
webpack5搭建一个vue项目

# 1.克隆一份 [创建前端工程的代码](https://www.jianshu.com/p/41d67162d96c)
```
git clone git@github.com:fssqLove/webpack5-webExp.git
```

# 2.修改 index.html
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>my vue</title>
</head>
<body>
<div id="app"></div>
</body>
</html>
```

# 3.修改 tsconfig.json
```
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
```

# 4. 处理vue资源
## 4.1 安装 vue-loader
`npm i vue-loader vue-template-compiler -D `

### 4.1.1 修改 webpack.common.js 匹配规则
```
// webpack.common.js

const VueLoaderPlugin = require('vue-loader/lib/plugin');

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    // 配置省略文件路径的后缀名
    extensions: ['.vue','.tsx', '.ts', '.js'],
  },
```

### 4.1.2 修改 webpack.dev.js 匹配规则
```
// webpack.dev.js

    module: {
        rules: [
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    'vue-style-loader',
                    "css-loader",
                    'sass-loader'
                ]
            }
        ]
    },
```

## 4.2安装 Vue
`npm i vue`

# 5.修改 main.ts
```
import Vue from 'vue'
import App from './app.vue'
import './assets/font/iconfont.css'

new Vue({
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
```

# 6. 增加 app.vue
```
<template>
  <div class="example">
    <div>
      {{ msg }}
    </div>
    <span>
      {{ count }}
    </span>

    <myImg src="./assets/img/1.jpg" />
    <!-- <img src="./assets/img/1.jpg" alt="" /> -->

    <div class="bk"></div>

    <i class="iconfont icon-yibiyi"></i>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { add } from "./assets/js/test";
import myImg from "./components/myImg.vue";

export default Vue.extend({
  data() {
    return {
      msg: "Hello world!",
      count: 0,
    };
  },
  created() {
    setInterval(() => {
      this.count++;
    }, 1000);

    add(1, 2).then((res) => console.log(res));
  },
  components: {
    myImg,
  },
});
</script>


<style lang="scss" scoped>
.example {
  color: aqua;
  span {
    color: hotpink;
  }

  .bk {
    width: 100px;
    height: 100px;
    background: center / contain no-repeat url("./assets/img/2.jpg");
  }
}
</style>

```

# 7.增加 `shims-vue.d.ts` 声明文件
```
// shims-vue.d.ts

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```

# 8. 增加 `shims-tsx.d.ts` 声明文件
```
// shims-tsx.d.ts


import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

```

# 遇到的问题
## 1.在 Webpack 最新版本中，rules 属性中的配置，可以有 test、exclude、use、include 等字段，但不允许有 options 了
```
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
```
+ `Error: Compiling RuleSet failed: A Rule must not have a 'options' property when it has a 'use' property`
+ 需要修改为
```
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
```

[源码](https://github.com/fssqLove/webpack5-vue2Exp)

