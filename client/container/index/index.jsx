import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import {ajax} from '../../util/index';
import {Link} from 'react-router-dom';

@connect((state) => {
  return {
    cntData: state.cnt
  }
},{...actions})
export default class extends Component {
  constructor () {
    super();
    this.state = {
      list:[]
    };
  }

  componentDidMount(){
    ajax({
      url:'http://localhost:8333/api/myinfo',
      method:'GET'
    }).then(res=>{
      let {avatar,userName} = res;
      this.setState({avatar,userName});
    }).catch(res=>{
      debugger
    });
    ajax({
      url:'http://localhost:8333/api/mylist',
      method:'POST',
      data:{offset:0,limit:2}
    }).then(res=>{
      let {list,hasMore} = res;
      this.setState({list,hasMore});
    }).catch(res=>{
      debugger
    })
  }

  render () {
    return (
        <div className="page-wrap main-page" ref="mainPage">
          <div className="info">
            <img src={this.state.avatar}/>
            <p>{this.state.userName}</p>
          </div>
          <Link className="status" to="/status"><b>+</b>添加今日状态</Link>
          <div>
            {
              this.state.list.map((item,index)=>(
                <Link className="today" key={index} to="/today">
                  <img src={item.img} alt=""/>
                  <p className="text">{item.text}</p>
                  <p className="time">{item.time}</p>
                </Link>
              ))
            }
          </div>
        </div>
    )
  }
}
import './index.less';
