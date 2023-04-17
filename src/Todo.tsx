import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const Todo: React.FC =  ()=> {
    return (
        <div>
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Todo;