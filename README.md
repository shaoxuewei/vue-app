# vue2.0 豆瓣电影WebApp


## 线上体验


#### 移动端访问

打开手机浏览器扫描下方二维码或访问上面的地址，推荐全屏模式下体验

![image](https://github.com/shaoxuewei/vue-app/raw/master/screenshots/qrcode.png)


## 部分效果演示
### 上映电影信息和电影详情

![image](https://github.com/shaoxuewei/vue-app/raw/master/screenshots/movie-show.gif)
![image](https://github.com/shaoxuewei/vue-app/raw/master/screenshots/detail.gif)

### 排行和影人

![image](https://github.com/shaoxuewei/vue-app/raw/master/screenshots/rank.gif)
![image](https://github.com/shaoxuewei/vue-app/raw/master/screenshots/celebrity.gif)

### 搜索和收藏

![image](https://github.com/shaoxuewei/vue-app/raw/master/screenshots/search.gif)
![image](https://github.com/shaoxuewei/vue-app/raw/master/screenshots/collect.gif)

## 项目描述
### 技术栈
- vue2.0 + vue-router + vuex：vue全家桶
- axios：用于ajax请求
- vue-lazyload：用于图片懒加载
- better-scroll：移动端滚动库，优化移动端滚动效果
- webpack： 构建工具
- es6: 使用es6语法
- stylus: css预处理

使用flex布局进行移动端适配，用eslint进行代码规范检查

使用localStorage存储收藏的电影信息，影人信息，评论点赞信息

webpack + webpack-dev-server + http-proxy-middleware进行本地开发环境http请求转发，实现跨域请求

### 功能实现
#### 上映电影部分
- [x] 获取正在上映的电影信息和即将上映电影的信息
- [x] 电影信息滚动(底部)加载提高响应速度
#### 排行部分
- [x] 获取所有可以从豆瓣api得到的排行榜
- [x] 查看排行榜详细，在排行榜中查看具体电影详细
#### 搜索部分
- [x] 支持用户根据关键字搜索
- [x] 支持用户根据给出标签进行标签搜索(与输入与标签相同的关键字进行搜索不同)
- [x] 根据搜索结果查看电影详情
- [x] 查看搜索历史
#### 电影详情部分
- [x] 获取电影所有的基础信息和评分信息
- [x] 获取电影的短评和长评，可查看该电影所有短评长评
- [x] 将电影标记为想看/看过
#### 影人信息部分
- [x] 获取影人基本信息
- [x] 查看影人作品详细
#### 用户中心部分
- [x] 查看收藏的影人
- [x] 查看想看的电影
- [x] 查看看过的电影

### 关于浏览器跨域
#### 开发环境
项目通过vue脚手架vue-cli进行配置，可在'config/index'目录下进行如下配置
```
proxyTable: {
      '/v2': {
        target: 'http://api.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/v2': '/v2'
        }
      }
    }

