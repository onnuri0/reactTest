import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }

  handleReomve = () =>{
    const {info, onRemove} = this.props;
    onRemove(info.id);
    }
  
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      name, phone, id
    } = this.props.info;
    
    
    return (
        
      <div style={style}>
      
        <div><b>{name}</b>&nbsp;{phone}</div>
        <div><button onClick={this.handleReomve}>삭제</button></div>
      </div>
    );
  }
}

export default PhoneInfo;