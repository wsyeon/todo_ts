import React, { ChangeEvent, useRef, useState } from 'react';
import TodoList from './TodoList';
// import * as S from '../style/TodoStyle';

export interface Todo  {
    id: number,
    text: string,
    checked: boolean,
    date: Date
};

const TodoInput: React.FC = ()=> {
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const date = new Date();
    const nextId = useRef(1);

    const onChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setInputText(e.target.value);
    };

    const onClick = ()=> {
        const newTodoList = {
            id: nextId.current,
            text: inputText,
            checked: false,
            date: date
        };

        setTodoList(todoList.concat(newTodoList));
        setInputText("");
        nextId.current += 1;
    };

    const handleDelete = (id: number)=> {
        const updatedTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(updatedTodoList);
    }; 

    const checkBox = (id: number)=> {
        const newTodoList = todoList.map((data) =>
            data.id === id ? { ...data, checked: !data.checked } : data
        );
        setTodoList(newTodoList);
    };

    const keydownEnter = (e: React.KeyboardEvent<HTMLInputElement>)=> {
        if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            const newTodoList = {
                id: nextId.current,
                text: inputText,
                checked: false,
                date: date
            };
    
            setTodoList(todoList.concat(newTodoList));
            setInputText("");
            nextId.current += 1;
        }
    };

    return (
        <div>
            <div>
                <div>
                    오늘의 할 일
                </div>
                <div>
                    <input type='text' onKeyDown={keydownEnter} onChange={onChange} value={inputText} placeholder='오늘 할 일' />
                    <button onClick={onClick}>+</button>
                </div>
                <div>
                    {todoList.map((data, idx)=> (
                        <TodoList key={idx} todo={data} onDelete={handleDelete} onCheckBox={checkBox} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoInput;