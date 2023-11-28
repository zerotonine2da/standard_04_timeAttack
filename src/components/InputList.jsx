import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { addTodo } from '../redux/modules/todos';
function InputList() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    //데이터 가져오기
    //const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();

                    const newData = {
                        id: shortid(),
                        title,
                        content,
                        isDone: false,
                    };
                    dispatch(addTodo(newData));
                }}
            >
                <input value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <input value={content} onChange={(event) => setContent(event.target.value)}></input>
                <button type="submit">등록하기</button>
            </form>
        </div>
    );
}

export default InputList;
