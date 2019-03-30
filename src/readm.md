目录结构:
  
>admin 后台框架(element)

>index.html 主页模板

>>skin/ 页面文件夹

>>>components/ vue组件文件夹，vue的js/html文件都应该放在这个文件夹下

>>>css/ 样式表文件夹

>>>>main.css 主样式文件

>>>image/ 图片文件夹，需要自己建立

>>>js javascript文件夹

>>>>app/ 网站主程序文件夹

>>>>> apis 主程序接口文件夹

>>>>> libs/ 主程序库文件夹

>>>>> app.js 全局app对象

>>>>>router.js 主路由文件

>>>> libs/ 第三方库

>>>> parsers/ 响应解析器文件夹

>>>>>parasers.js 响应解析器程序

>>>>> main.js 程序主入口文件

>frontend 前台框架

>index.html 主页模板

>>skin/ 页面文件夹

>>>components/ vue组件文件夹，vue的js/html文件都应该放在这个文件夹下

>>>css/ 样式表文件夹

>>>>main.css 主样式文件

>>>image/ 图片文件夹，需要自己建立

>>>js javascript文件夹

>>>>app/ 网站主程序文件夹

>>>>> apis 主程序接口文件夹

>>>>> libs/ 主程序库文件夹

>>>>> app.js 全局app对象

>>>>>router.js 主路由文件

>>>> libs/ 第三方库

>>>> parsers/ 响应解析器文件夹

>>>>>parasers.js 响应解析器程序

>>>>> main.js 程序主入口文件

>parsers/ 接口响应数据解析器

>>errcode/parsers/parsers.js 带errcode的响应接口的解析器

>template/ 组件模板目录

>>admin/ 后台模板

>>> pages/ 后台页面模板

>>>> empty/ 空页面模板

>>>> form/ 表单模板

>>apis/ 接口文件模板

>>>creates.js 创建接口模板

>>>empty 空模板