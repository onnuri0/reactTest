import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Todoitem from './TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos != nextProps.todos;
    }
    render(){
        const{ todos, onToggle, onRemove } = this.props;
        console.log(todos);

        const todolist = todos.map(({id, text, checked}) => (
                <TodoItem 
                    id={id}
                    text={text}
                    checked={checked}    
                    key={id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            )
        );

        console.log(todolist);
        return(
            <div>
                {todolist}
            </div>
        );
    }
}

export default TodoItemList;