#### taro-bdmark：百度小程序版本（taro框架）markdown解析器
![输入图片说明](https://github.com/guozimo/publish/blob/gh-pages/img/md1.png "011.jpg")
![输入图片说明](https://github.com/guozimo/publish/blob/gh-pages/img/md2.png "012.jpg")
![输入图片说明](https://github.com/guozimo/publish/blob/gh-pages/img/md3.png "013.jpg")

#### 来源
修改自TooBug的wemark,由于不支持百度小程序使用，所以改造了一下，原wemark作者github地址：https://github.com/TooBug/wemark

#### 介绍
用于在百度小程序（taro框架）中渲染Markdown文本。
在小程序诞生之前，Markdown的渲染一般需要解析成HTML，然后渲染解析后的HTML。然而小程序并没有提供HTML渲染的功能，因此在wemark诞生之前，几乎所有的Markdown渲染库全部无法在小程序下正常工作。

bdmark可以实现在百度小程序下渲染Markdown内容，支持图片、表格在内的大部分Markdown特性。
taro-bdmark支持taro框架下的百度小程序md渲染。

#### 特性

- 以小程序自定义组件形式提供，可直接引入使用
- 支持大部分markdown标记的解析、渲染（详细支持情况见下方附录）
- 支持代码表格、代码高亮、HTML视频等特性
- 支持使用原生rich-text进行渲染

#### 使用教程

1、npm i taro-bdmark
2、在页面的配置文件中引用bdmark组件

```
{
	"usingComponents": {
		"bdmark": "/bdmark/bdmark"
	}
}
```
（请使用绝对路径）

3、swan中使用：<bdmark md="{{md}}" link highlight type="bdmark"></bdmark>
4、npm run dev:swan


 参数说明：
 
- md，必填，需要渲染的Markdown字符串；
- link，是否解析链接，如果解析，会使用小程序navigator组件展现，可在小程序内跳转，默认为false；
- highlight，是否对代码进行高亮处理，默认为false；
- type，渲染方式，bdmark会使用bdmark的数据结构和模板进行渲染，rich-text会使用小程序内置的rich-text组件进行渲染（不支持链接跳转、视频）。
- 全局安装npm install -g @tarojs/cli  此前安装过cli的 需要使用更新命令 taro update self

> 注：代码高亮会使标签数量和解析后的数据量增大，不排除产生渲染性能问题，请根据实际需要酌情使用。

#### 不足之处
对原作者的css做了部分调整，在bdmark.css下新增代码：

```
.wemark_block_code text{
	display: inline;
	white-space: normal;
}
```
增加white-space: normal;是为了防止对父css的white-space: pre的继承，父css造成换行问题，很不美观，但是改成white-space: normal之后，会造成代码片段的空格消失，希望大家想办法支持改造一下！

#### 修改部分

- 1、修改wemark目录下的wxml为swan，修改wxss为css
- 2、修改wemark.js中的wx:for,wx:if wx:index等兼容百度小程序
- 3、新增部分css，并注释掉css中所有：last的css
- 3、修改remarkable.js源码中void js保留字对taro 的支持程度 taro对void this.tokenize(s,s.line,s.lineMax)函数敏感并不会进入，原生百度小程序和微信小程序皆不会阻塞 去掉void 保留字以支持taro框架

#### commit 代码提交规范(提交时提示)
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

### 参与贡献

- 开发者：guozimo
- github：(https://github.com/guozimo/taro-bdMark)
- npm：(https://www.npmjs.com/package/taro-bdmark)

