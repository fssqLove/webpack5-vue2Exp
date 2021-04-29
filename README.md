# vue2-history router

## 1.需要服务器支持

- nginx 配置

```none
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
```

- 本地调试配置

```none
    // webpack.dev.js

    devServer: {
        historyApiFallback: true,
    },
```

## 2.本地代码

- 路由模式切换为 history

```javascript
//src\router\index.ts

const router = new VueRouter({
  mode: "history",
});
```

- 所有静态资源前面加`/`

```javascript
// webpack.common.js

  output: {
    publicPath: '/'
  },
```
