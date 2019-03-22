# 百度小程序 taro框架 markdown解析器 （taro-bdmark）----author:guozimo
------------

* 项目依赖React、jsx, 工程构建基于[taro](https://taro.aotu.io/)

### 快速开始
* `npm install 或者cnpm i `         安装所有依赖包
* `npm run dev:swan`    启动本地HTTP服务 开启本地百度小程序
* `npm run dev:weapp`   启动本地HTTP服务 开启本地微信小程序
* 'sudo npm run dev:h5'   启动H5开发模式（注意：配置本地HOST  loc.csdn.net  开启80端口）
*  visit: http://loc.csdn.net/#/pages/index/index

### 打包构建
* `npm run build:swan`  构建开发版本百度小程序
* `npm run build:weapp` 构建开发版本微信小程序

### 代码规范
'standard', 'standard-jsx'
Taro建议文件名采用util_helper.js的方式，为了便于统一，推荐以下方式
文件名，组件名，统一使用 Pascal 命名法，尽量避开单个单词组件
AppHeader.js   Class AppHeader

### commit 代码提交规范(提交时提示)
* Commit message格式
  <type>: <subject>
  （type    和    subject 之前有个英文冒号以及个空格！）
  用于说明 commit 的类别，只允许使用下面7个标识。
  feat：新功能（feature）
  fix：修补bug
  docs：文档（documentation）
  style： 格式（不影响代码运行的变动）
  refactor：重构（即不是新增功能，也不是修改bug的代码变动）
  test：增加测试
  chore：构建过程或辅助工具的变动
  如果type为feat和fix，则该 commit 将肯定出现在 Change log中.
* npm run changelog  查看changelog日志

### 项目介绍
*背景和功能

用于在百度小程序中渲染Markdown文本。
在小程序诞生之前，Markdown的渲染一般需要解析成HTML，然后渲染解析后的HTML。然而小程序并没有提供HTML渲染的功能，因此在bdMark诞生之前，几乎所有的Markdown渲染库全部无法在百度小程序下正常工作。
bdmark可以实现在小程序下渲染Markdown内容，支持图片、表格在内的大部分Markdown特性。
*特性

以小程序自定义组件形式提供，可直接引入使用
支持大部分markdown标记的解析、渲染
支持代码表格、代码高亮、HTML视频等特性
支持使用原生rich-text进行渲染
*taro中bdMark使用方式

config = {
  navigationBarTitleText: '首页',
  usingComponents: {
    bdMark: '../../taro-bdmark/bdmark'
  }
}
state = {
  md: '# heading\n\nText'
}
//...
render () {
  return (
    <View className='index'>
      <bdMark md={this.state.md} link highlight type='bdMark' />
// link 为链接高亮 highlight  为代码高亮 不写默认是false
    </View>
  )
}
### 目录
* config (环境配置)
* dist （打包输出文件）
* src
	* pages
		* index(demo模块)
	* app.js（小程序路由配置以及全局样式配置，不使用react-router进行路由管理）
	  
### 注意事项
* 修改remarkable.js源码中void js保留字对taro 的支持程度 taro对void this.tokenize(s,s.line,s.lineMax)函数敏感并不会进入，原生百度小程序和微信小程序皆不会阻塞 去掉void 保留字以支持taro框架
* 全局安装npm install -g @tarojs/cli  此前安装过cli的 需要使用更新命令 taro update self
* 新增immutable.js 处理react render问题
* react的类型检查PropTypes自React v15.5起已弃用（taro用的是16.4.6版本的react），请使用prop-types
* defaultProps 用来确保 this.props.name 在父组件没有特别指定的情况下，有一个初始值。类型检查发生在  defaultProps 赋值之后，所以类型检查也会应用在 defaultProps 上面
* PropTypes 检查类型，目前在小程序端还有些问题 不要使用，但在 H5 端可以使用，用法和在 React 里一样
* 支持使用mobx 管理状态机




















