import React, { Component } from 'react';

export default class extends Component {
  constructor (props) {
    super();
    this.state = {index:0};
  }
  render () {
    return (
      <div className="page-wrap mine-page">
          <img src="../../../static/img/avatar/benqijiemu.jpg"/>
        <input type="text" placeholder="昵称"/>
        <input type="text" placeholder="起床目标时间"/>
        <div className="button-wrapper">
          <span className="text"><button>确认修改</button></span>
        </div>
      </div>
    )
  }
}
import './mine.less';
