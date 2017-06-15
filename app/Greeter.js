import React ,{Component} from 'react'
var config = require('./config.json');

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}
export default Greeter
//只包括一个用来返回包含问候信息的html元素的函数。
