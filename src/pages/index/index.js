import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    usingComponents: {
      bdmark: '../../bdmark/bdmark'
    }
  }
  state = {
    md: '# 欢迎使用Markdown编辑器写博客\n' +
    '\n' +
    '本Markdown编辑器使用[StackEdit][6]修改而来，用它写博客，将会带来全新的体验哦：\n' +
    '\n' +
    ' - **Markdown和扩展Markdown简洁的语法**\n' +
    ' - **代码块高亮**\n' +
    ' - **图片链接和图片上传**\n' +
    ' - ***LaTex*数学公式**\n' +
    ' - **UML序列图和流程图**\n' +
    ' - **离线写博客**\n' +
    ' - **导入导出Markdown文件**\n' +
    ' - **丰富的快捷键**\n' +
    '\n' +
    '-------------------\n' +
    '# 一级标题\n' +
    '## 二级标题\n' +
    '### 三级标题\n' +
    '#### 四级标题\n' +
    '##### 五级标题\n' +
    '###### 六级标题\n' +
    '\n' +
    '\n' +
    '## 快捷键\n' +
    '\n' +
    ' - 加粗    `Ctrl + B` \n' +
    ' - 斜体    `Ctrl + I` \n' +
    ' - 引用    `Ctrl + Q`\n' +
    ' - 插入链接    `Ctrl + L`\n' +
    ' - 插入代码    `Ctrl + K`\n' +
    ' - 插入图片    `Ctrl + G`\n' +
    ' - 提升标题    `Ctrl + H`\n' +
    ' - 有序列表    `Ctrl + O`\n' +
    ' - 无序列表    `Ctrl + U`\n' +
    ' - 横线    `Ctrl + R`\n' +
    ' - 撤销    `Ctrl + Z`\n' +
    ' - 重做    `Ctrl + Y`\n' +
    '\n' +
    '## Markdown及扩展\n' +
    '\n' +
    '> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面。    —— <a href="https://zh.wikipedia.org/wiki/Markdown" target="_blank"> [ 维基百科 ]\n' +
    '\n' +
    '使用简单的符号标识不同的标题，将某些文字标记为**粗体**或者*斜体*，创建一个[链接](http://www.csdn.net)等，详细语法参考帮助？。\n' +
    '\n' +
    '本编辑器支持 **Markdown Extra** , 　扩展了很多好用的功能。具体请参考[Github][2].  \n' +
    '\n' +
    '### 表格\n' +
    '\n' +
    '**Markdown　Extra**　表格语法：\n' +
    '\n' +
    '项目     | 价格\n' +
    '-------- | ---\n' +
    'Computer | $1600\n' +
    'Phone    | $12\n' +
    'Pipe     | $1\n' +
    '\n' +
    '可以使用冒号来定义对齐方式：\n' +
    '\n' +
    '| 项目      |    价格 | 数量  |\n' +
    '| :-------- | --------:| :--: |\n' +
    '| Computer  | 1600 元 |  5   |\n' +
    '| Phone     |   12 元 |  12  |\n' +
    '| Pipe      |    1 元 | 234  |\n' +
    '\n' +
    '###定义列表\n' +
    '\n' +
    '**Markdown　Extra**　定义列表语法：\n' +
    '项目１\n' +
    '项目２\n' +
    ':   定义 A\n' +
    ':   定义 B\n' +
    '\n' +
    '项目３\n' +
    ':   定义 C\n' +
    '\n' +
    ':   定义 D\n' +
    '\n' +
    '\t> 定义D内容\n' +
    '\n' +
    '### 代码块\n' +
    '代码块语法遵循标准markdown代码，例如：\n' +
    '``` python\n' +
    '@requires_authorization\n' +
    'def somefunc(param1=\'\', param2=0):\n' +
    '    \'\'\'A docstring\'\'\'\n' +
    '    if param1 > param2: # interesting\n' +
    '        print \'Greater\'\n' +
    '    return (param2 - param1 + 1) or None\n' +
    'class SomeClass:\n' +
    '    pass\n' +
    '>>> message = \'\'\'interpreter\n' +
    '... prompt\'\'\'\n' +
    '```\n' +
    '\n' +
    '###脚注\n' +
    '生成一个脚注[^footnote].\n' +
    '  [^footnote]: 这里是 **脚注** 的 *内容*.\n' +
    '  \n' +
    '### 目录\n' +
    '用 `[TOC]`来生成目录：\n' +
    '\n' +
    '[TOC]\n' +
    '\n' +
    '### 数学公式\n' +
    '使用MathJax渲染*LaTex* 数学公式，详见[math.stackexchange.com][1].\n' +
    '\n' +
    ' - 行内公式，数学公式为：$\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$。\n' +
    ' - 块级公式：\n' +
    '\n' +
    '$$\tx = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$\n' +
    '\n' +
    '更多LaTex语法请参考 [这儿][3].\n' +
    '\n' +
    '### UML 图:\n' +
    '\n' +
    '可以渲染序列图：\n' +
    '\n' +
    '```sequence\n' +
    '张三->李四: 嘿，小四儿, 写博客了没?\n' +
    'Note right of 李四: 李四愣了一下，说：\n' +
    '李四-->张三: 忙得吐血，哪有时间写。\n' +
    '```\n' +
    '\n' +
    '或者流程图：\n' +
    '\n' +
    '```flow\n' +
    'st=>start: 开始\n' +
    'e=>end: 结束\n' +
    'op=>operation: 我的操作\n' +
    'cond=>condition: 确认？\n' +
    '\n' +
    'st->op->cond\n' +
    'cond(yes)->e\n' +
    'cond(no)->op\n' +
    '```\n' +
    '\n' +
    '- 关于 **序列图** 语法，参考 [这儿][4],\n' +
    '- 关于 **流程图** 语法，参考 [这儿][5].\n' +
    '\n' +
    '## 离线写博客\n' +
    '\n' +
    '即使用户在没有网络的情况下，也可以通过本编辑器离线写博客（直接在曾经使用过的浏览器中输入[write.blog.csdn.net/mdeditor](http://write.blog.csdn.net/mdeditor)即可。**Markdown编辑器**使用浏览器离线存储将内容保存在本地。\n' +
    '\n' +
    '用户写博客的过程中，内容实时保存在浏览器缓存中，在用户关闭浏览器或者其它异常情况下，内容不会丢失。用户再次打开浏览器时，会显示上次用户正在编辑的没有发表的内容。\n' +
    '\n' +
    '博客发表后，本地缓存将被删除。　\n' +
    '\n' +
    '用户可以选择 <i class="icon-disk"></i> 把正在写的博客保存到服务器草稿箱，即使换浏览器或者清除缓存，内容也不会丢失。\n' +
    '\n' +
    '> **注意：**虽然浏览器存储大部分时候都比较可靠，但为了您的数据安全，在联网后，**请务必及时发表或者保存到服务器草稿箱**。\n' +
    '\n' +
    '##浏览器兼容\n' +
    '\n' +
    ' 1. 目前，本编辑器对Chrome浏览器支持最为完整。建议大家使用较新版本的Chrome。\n' +
    ' 3. IE９以下不支持\n' +
    ' 4. IE９，１０，１１存在以下问题\n' +
    '    1. 不支持离线功能\n' +
    '    1. IE9不支持文件导入导出\n' +
    '    1. IE10不支持拖拽文件导入\n' +
    '\n' +
    '---------\n' +
    '\n' +
    '[1]: http://math.stackexchange.com/\n' +
    '[2]: https://github.com/jmcmanus/pagedown-extra "Pagedown Extra"\n' +
    '[3]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference\n' +
    '[4]: http://bramp.github.io/js-sequence-diagrams/\n' +
    '[5]: http://adrai.github.io/flowchart.js/\n' +
    '[6]: https://github.com/benweet/stackedit\n' +
    '\n' +
    '\n' +
    '# 一级标题\n' +
    '  \n' +
    '\n' +
    ' - sdhfskfdsfsfsdf\n' +
    ' - iiiiiiiiiii\n' +
    ' - siuiiiiuuuuuuuu\n' +
    ' - ooooooooooo\n' +
    '\n' +
    '\n' +
    '\n' +
    '## 二级标题\n' +
    '\n' +
    ' - sdfdsfdsfsdf\n' +
    ' - sdfsdfsdfs\n' +
    ' - fsdfsdfsd\n' +
    ' - sdfsdfsdf\n' +
    '\t\t\n' +
    ' - cvxvxcvxcv \n' +
    ' - xcvxvxcvxcv\n' +
    '\n' +
    '#### 四级标题\n' +
    '\n' +
    ' - ssssssssssssss \n' +
    ' - ffffffffff\n' +
    ' - dfdfdfdfd\n' +
    ' - dfddddddddddd\n' +
    '\n' +
    '##### 五级标题\n' +
    '\n' +
    ' - ssssssss\n' +
    ' - lllllllllllll\n' +
    ' - ppppppppppppp\n' +
    ' - ddddddddddd\n' +
    ' - cccccccc\n' +
    '\n' +
    '###### 六级标题\n' +
    '\n' +
    ' - 列表内容\n' +
    ' - yyyyyyyyy\n' +
    ' - uuuuuuuuuuuu# 欢迎使用Markdown编辑器写博客\n' +
    '\n' +
    '本Markdown编辑器使用[StackEdit][6]修改而来，用它写博客，将会带来全新的体验哦：\n' +
    '\n' +
    ' - **Markdown和扩展Markdown简洁的语法**\n' +
    ' - **代码块高亮**\n' +
    ' - **图片链接和图片上传**\n' +
    ' - ***LaTex*数学公式**\n' +
    ' - **UML序列图和流程图**\n' +
    ' - **离线写博客**\n' +
    ' - **导入导出Markdown文件**\n' +
    ' - **丰富的快捷键**\n' +
    '\n' +
    '-------------------\n' +
    '# 一级标题\n' +
    '## 二级标题\n' +
    '### 三级标题\n' +
    '#### 四级标题\n' +
    '##### 五级标题\n' +
    '###### 六级标题\n' +
    '\n' +
    '\n' +
    '## 快捷键\n' +
    '\n' +
    ' - 加粗    `Ctrl + B` \n' +
    ' - 斜体    `Ctrl + I` \n' +
    ' - 引用    `Ctrl + Q`\n' +
    ' - 插入链接    `Ctrl + L`\n' +
    ' - 插入代码    `Ctrl + K`\n' +
    ' - 插入图片    `Ctrl + G`\n' +
    ' - 提升标题    `Ctrl + H`\n' +
    ' - 有序列表    `Ctrl + O`\n' +
    ' - 无序列表    `Ctrl + U`\n' +
    ' - 横线    `Ctrl + R`\n' +
    ' - 撤销    `Ctrl + Z`\n' +
    ' - 重做    `Ctrl + Y`\n' +
    '\n' +
    '## Markdown及扩展\n' +
    '\n' +
    '> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面。    —— <a href="https://zh.wikipedia.org/wiki/Markdown" target="_blank"> [ 维基百科 ]\n' +
    '\n' +
    '使用简单的符号标识不同的标题，将某些文字标记为**粗体**或者*斜体*，创建一个[链接](http://www.csdn.net)等，详细语法参考帮助？。\n' +
    '\n' +
    '本编辑器支持 **Markdown Extra** , 　扩展了很多好用的功能。具体请参考[Github][2].  \n' +
    '\n' +
    '### 表格\n' +
    '\n' +
    '**Markdown　Extra**　表格语法：\n' +
    '\n' +
    '项目     | 价格\n' +
    '-------- | ---\n' +
    'Computer | $1600\n' +
    'Phone    | $12\n' +
    'Pipe     | $1\n' +
    '\n' +
    '可以使用冒号来定义对齐方式：\n' +
    '\n' +
    '| 项目      |    价格 | 数量  |\n' +
    '| :-------- | --------:| :--: |\n' +
    '| Computer  | 1600 元 |  5   |\n' +
    '| Phone     |   12 元 |  12  |\n' +
    '| Pipe      |    1 元 | 234  |\n' +
    '\n' +
    '###定义列表\n' +
    '\n' +
    '**Markdown　Extra**　定义列表语法：\n' +
    '项目１\n' +
    '项目２\n' +
    ':   定义 A\n' +
    ':   定义 B\n' +
    '\n' +
    '项目３\n' +
    ':   定义 C\n' +
    '\n' +
    ':   定义 D\n' +
    '\n' +
    '\t> 定义D内容\n' +
    '\n' +
    '### 代码块\n' +
    '代码块语法遵循标准markdown代码，例如：\n' +
    '``` python\n' +
    '@requires_authorization\n' +
    'def somefunc(param1=\'\', param2=0):\n' +
    '    \'\'\'A docstring\'\'\'\n' +
    '    if param1 > param2: # interesting\n' +
    '        print \'Greater\'\n' +
    '    return (param2 - param1 + 1) or None\n' +
    'class SomeClass:\n' +
    '    pass\n' +
    '>>> message = \'\'\'interpreter\n' +
    '... prompt\'\'\'\n' +
    '```\n' +
    '\n' +
    '###脚注\n' +
    '生成一个脚注[^footnote].\n' +
    '  [^footnote]: 这里是 **脚注** 的 *内容*.\n' +
    '  \n' +
    '### 目录\n' +
    '用 `[TOC]`来生成目录：\n' +
    '\n' +
    '[TOC]\n' +
    '\n' +
    '### 数学公式\n' +
    '使用MathJax渲染*LaTex* 数学公式，详见[math.stackexchange.com][1].\n' +
    '\n' +
    ' - 行内公式，数学公式为：$\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$。\n' +
    ' - 块级公式：\n' +
    '\n' +
    '$$\tx = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$\n' +
    '\n' +
    '更多LaTex语法请参考 [这儿][3].\n' +
    '\n' +
    '### UML 图:\n' +
    '\n' +
    '可以渲染序列图：\n' +
    '\n' +
    '```sequence\n' +
    '张三->李四: 嘿，小四儿, 写博客了没?\n' +
    'Note right of 李四: 李四愣了一下，说：\n' +
    '李四-->张三: 忙得吐血，哪有时间写。\n' +
    '```\n' +
    '\n' +
    '或者流程图：\n' +
    '\n' +
    '```flow\n' +
    'st=>start: 开始\n' +
    'e=>end: 结束\n' +
    'op=>operation: 我的操作\n' +
    'cond=>condition: 确认？\n' +
    '\n' +
    'st->op->cond\n' +
    'cond(yes)->e\n' +
    'cond(no)->op\n' +
    '```\n' +
    '\n' +
    '- 关于 **序列图** 语法，参考 [这儿][4],\n' +
    '- 关于 **流程图** 语法，参考 [这儿][5].\n' +
    '\n' +
    '## 离线写博客\n' +
    '\n' +
    '即使用户在没有网络的情况下，也可以通过本编辑器离线写博客（直接在曾经使用过的浏览器中输入[write.blog.csdn.net/mdeditor](http://write.blog.csdn.net/mdeditor)即可。**Markdown编辑器**使用浏览器离线存储将内容保存在本地。\n' +
    '\n' +
    '用户写博客的过程中，内容实时保存在浏览器缓存中，在用户关闭浏览器或者其它异常情况下，内容不会丢失。用户再次打开浏览器时，会显示上次用户正在编辑的没有发表的内容。\n' +
    '\n' +
    '博客发表后，本地缓存将被删除。　\n' +
    '\n' +
    '用户可以选择 <i class="icon-disk"></i> 把正在写的博客保存到服务器草稿箱，即使换浏览器或者清除缓存，内容也不会丢失。\n' +
    '\n' +
    '> **注意：**虽然浏览器存储大部分时候都比较可靠，但为了您的数据安全，在联网后，**请务必及时发表或者保存到服务器草稿箱**。\n' +
    '\n' +
    '##浏览器兼容\n' +
    '\n' +
    ' 1. 目前，本编辑器对Chrome浏览器支持最为完整。建议大家使用较新版本的Chrome。\n' +
    ' 3. IE９以下不支持\n' +
    ' 4. IE９，１０，１１存在以下问题\n' +
    '    1. 不支持离线功能\n' +
    '    1. IE9不支持文件导入导出\n' +
    '    1. IE10不支持拖拽文件导入\n' +
    '\n' +
    '---------\n' +
    '\n' +
    '[1]: http://math.stackexchange.com/\n' +
    '[2]: https://github.com/jmcmanus/pagedown-extra "Pagedown Extra"\n' +
    '[3]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference\n' +
    '[4]: http://bramp.github.io/js-sequence-diagrams/\n' +
    '[5]: http://adrai.github.io/flowchart.js/\n' +
    '[6]: https://github.com/benweet/stackedit\n' +
    '\n' +
    '\n' +
    '# 一级标题\n' +
    '  \n' +
    '\n' +
    ' - sdhfskfdsfsfsdf\n' +
    ' - iiiiiiiiiii\n' +
    ' - siuiiiiuuuuuuuu\n' +
    ' - ooooooooooo\n' +
    '\n' +
    '\n' +
    '\n' +
    '## 二级标题\n' +
    '\n' +
    ' - sdfdsfdsfsdf\n' +
    ' - sdfsdfsdfs\n' +
    ' - fsdfsdfsd\n' +
    ' - sdfsdfsdf\n' +
    '\t\t\n' +
    ' - cvxvxcvxcv \n' +
    ' - xcvxvxcvxcv\n' +
    '\n' +
    '#### 四级标题\n' +
    '\n' +
    ' - ssssssssssssss \n' +
    ' - ffffffffff\n' +
    ' - dfdfdfdfd\n' +
    ' - dfddddddddddd\n' +
    '\n' +
    '##### 五级标题\n' +
    '\n' +
    ' - ssssssss\n' +
    ' - lllllllllllll\n' +
    ' - ppppppppppppp\n' +
    ' - ddddddddddd\n' +
    ' - cccccccc\n' +
    '\n' +
    '###### 六级标题\n' +
    '\n' +
    ' - 列表内容\n' +
    ' - yyyyyyyyy\n' +
    ' - uuuuuuuuuuuu'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
    <bdmark md={this.state.md} link highlight type='bdmark' />
      </View>
  )
  }
}
