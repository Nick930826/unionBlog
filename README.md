## 配置koa+react开发环境
下载项目之后，老规矩 `npm install` ，然后开启 `npm start` 和 `npm run dev-build` koa服务和webpack打包一起开启，访问9002端口
## 2017-09-23
- 今天早上打开电脑，开始配置koa+react的开发环境，遇到不少坑。带着几个疑问去配置这个环境。

- 疑问1: 一般koa开发web，多数都是用到模板（ejs、pug等）,react要如何集成进去？？
- 疑问2: 如果要集成的话，集成的入口在哪里？

- 疑问3: koa没有种子项目？（手动搭建有点累的。。。）



1、疑问3谷歌一下就解决了，感谢桑世龙老师的koa-generate,一键生成koa开发环境

2、疑问1就有点麻烦了，查阅各种资料之后，我大概的思路是这样的，设置一个文件夹client，在里面正常写react代码，然后再新建一个文件夹dist，webpack打包client的代码，生成bundle文件传入dist文件夹，然后再手动写一个index.html，作为react的根节点入口。然后koa渲染模板的路径设置为dist文件夹下的index.html，这样就能顺利的集成react。总结一下就是webpack把react的业务代码打成单个bundle.js脚本，单独引入index.html，然后作为koa模板引擎的入口

- 完成推酷技术首页的数据爬取

## 2017-10-08
- 时间未免过得有点快，懒癌发作这么久没有写这个项目，今天加了一个上拉加载更多功能