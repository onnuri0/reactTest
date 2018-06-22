import React, { Component } from 'react';
import './App.css';

import Contact from './components/Contact';
import Counter from './components/Counter';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 2
  state = {
    information : [
      {
        id: 0,
        name: '홍길동',
        phone: '010-111-1112'
      },
      {
        id: 1,
        name: '임꺽정',
        phone: '010-222-1113'
      }
    ]
  }
  handleCreate = (data) => {
    console.log('App에서 호출');
    console.log(data);
    const {information} = this.state
    this.setState({
      information: information.concat({ id:this.id++, name:data.name, phone:data.phone})
    })
    console.log(this.state);
  }

  handleRemove = (id) =>{
    const {information} = this.state;

    this.setState({
      information: information.filter(info => info.id != id)
    })
  }
  render() {
    
    return (
      <div>
      <Contact/><br/>
      <Counter onCreate={this.handleCreate}/><br/>           
      <PhoneInfoList data={this.state.information} onRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
