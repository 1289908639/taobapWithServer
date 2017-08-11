### 如何使用

安装：
```npm install```

运行index.js

访问
http://localhost:3000

## 到位APP

### 技术点

1. JSON 数据结构
```
{
	"category":[],
	"fuwushang":[],
	"service":[],
	"comments":[]
}
```

问题：
在动态生成菜单的时候，会出现绑定的hover事件无法绑定的情况，原因是：数据时通过ajax异步获取的，在执行hover事件绑定的时候，列表还没有生成。
解决办法：
把绑定事件的方法写在，ajax的回调函数里面。

问题：
修改完地址信息以后刷新页面地址信息又变成原来的了，
解决办法：
位置信息是通过存放在localstroage,每次加载页面都会从localstroage获取最新的地址信息。


问题：
静态页面的时候显示正常，当使用模板以后，模板会在html值占据一个位置，再用这个选择器，就无法正常的选择了。
```css
	.ulactivety li:nth-child(4n){
	    margin-right: 0;
	}
```
解决办法：
```
.ulactivety li:nth-of-type(4n){
    margin-right: 0;
}
```
这两个方法的区别就是，区不区分类型。

问题：
写了一个index.js而且在index.html 和 service.html都引入了，两个页面中的逻辑都写在了一起，这个时候原本正常的页面都无法使用了。原因是art-Template 在渲染页面的时候在当前html中找不到响应的id,所以抛出异常。
解决办法：
每个页面专门的逻辑写在各自的文件中，公用的逻辑写在一个外部js文件中。