import React, { ChangeEvent, useState } from 'react';
import TodoList from './TodoList';
// import * as S from '../style/TodoStyle';

export interface Todo  {
    id: number,
    text: string,
    checked: boolean
};

const TodoInput: React.FC = ()=> {
    const [number, setNumber] = useState<number>(1);
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState<Todo[]>([])

    const onChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setInputText(e.target.value);
    };

    const onClick = ()=> {
        setNumber(number + 1);
        const newTodoList = {
            id: number,
            text: inputText,
            checked: false
        };

        setTodoList([...todoList, newTodoList]);
        setInputText("");
    };

    return (
        <div>
            <div>
                <div>
                    오늘의 할 일
                </div>
                <div>
                    <input type='text' onChange={onChange} value={inputText} placeholder='오늘 할 일' />
                    <button onClick={onClick}>+</button>
                </div>
                <div>
                    {todoList.map((data, idx)=> (
                        <TodoList key={idx} todo={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoInput;