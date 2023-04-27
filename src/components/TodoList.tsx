import React from 'react';
import { Todo } from './TodoInput';
// import * as S from '../style/TodoStyle';

interface TodoProps {
    todo?: Todo,
    onDelete?: (id: number)=> void,
    onCheckBox?: (id: number)=> void
};

const TodoList: React.FC<TodoProps> = ({ todo, onDelete, onCheckBox })=> {

    const upDate = ()=> {
        if (todo && onDelete) {
            onDelete(todo.id);
        }
    };

    // 703 100.11, x, 8.9

    const  checkBoolean = ()=> {
        if (todo && onCheckBox) {
            onCheckBox(todo.id);
        }
    };

    return (
        <div>
            {todo === undefined ? (<></>) : (
                <div style={{display: "flex", justifyContent: 'space-between', width: '100%'}}>
                    <div style={todo.checked ? {textDecoration: "line-through", width: "15%"} : {width: "15%"}}>
                        <input type='checkbox' onClick={checkBoolean} readOnly checked={todo.checked} />{todo.date.toLocaleDateString()}
                    </div>
                    <div style={todo.checked ? {textDecoration: "line-through", width: "83%", textAlign: "center"} : {width: "83%", textAlign: "center"}}>
                        {todo.text}
                    </div>
                    <div style={{width: "2%"}}>
                        <button onClick={upDate} style={{ backgroundColor: "transparent", border: 'none'}}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodoList;