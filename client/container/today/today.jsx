import React, { Component } from 'react';
import {ajax} from '../../util'
export default class extends Component {
  constructor () {
    super();
    this.state = {
      cnt: 0，
     list : []
    };
  }

  componentDidMount () {
    ajax({
      method:"POST",
      url:"http://localhost:8333/api/todaylist",
      data:{
        offset:0,
        limit:5
      }
    }).then(res=>{
      let{list} = res;
      this.setState({list})
    })
  }

  clickHandler () {
    this.setState({
      cnt: this.state.cnt+1
    })
  }

  render () {
    let { cnt } = this.state;

    return (
      <ul className="page-wrap today-page" ref="todayPage">
        {
          this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.img} alt=""/>
                <span>{item.userName}</span>
                <span className='time'>{item.time}</span>
                <p>{item.text}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
import './today.less';
