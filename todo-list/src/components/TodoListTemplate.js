import React from 'react';
import './TodoListTemplate.css';


//비구조화 할당 하여 원래 (props) => { ... } 를 해야 하는것을 ({form, children}) => { ... } 형태로 작성
const TodoListTemplate = ({form, children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                오늘할일
            </div>
            <section className="from-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
}

export default TodoListTemplate;