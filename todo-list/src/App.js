import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id= 3;
  state = {
    input: '',
    todos: [
      {id: 0, text: 'aaa', checked: false},
      {id: 1, text: 'bbb', checked: true},
      {id: 2, text: 'ccc', checked: false},
    ]
  }

  handleChange = (e) => {
    this.setState({
        input: e.target.value
      });
  }

  handelCreate = () => {
    const{input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id:this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key == 'Enter'){
      this.handelCreate();
    }
  }

  handleToggle = (id) => {
    console.log(id);

    const {todos} = this.state;

    const index = todos.findIndex((todo) => todo.id == id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    })
  }

  handelRemove = (id) => {
    console.log(id);

    const {todos} = this.state;

    this.setState({
      todos: todos.filter((e) => e.id != id)
    })
  }

  render() {
    const input = this.state.input;
    const {handelCreate, handleChange, handleKeyPress, handleToggle, handelRemove} = this;
console.log('input:::' + input);
console.log(this.state);
    return (
      <div>
        <TodoListTemplate 
          form={<Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handelCreate}
          />}

        >
          <TodoItemList 
            todos={this.state.todos}
            onToggle={handleToggle}
            onRemove={handelRemove}
          />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
