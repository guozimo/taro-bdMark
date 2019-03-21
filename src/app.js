import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/index/test3'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'taro-bdMark测试',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
