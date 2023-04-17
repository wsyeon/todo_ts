import React from 'react';
import { Todo } from './TodoInput';

interface TodoListProps {
    todo?: Todo
};

const TodoList: React.FC<TodoListProps> = ({ todo })=> {
    return (
        <div>
            <div>
                {todo?.id}번 {todo?.text}
                <input type='checkbox' defaultChecked={todo?.checked} readOnly />   
            </div>
        </div>
    );
};

export default TodoList;