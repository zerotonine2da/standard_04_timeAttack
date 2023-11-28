import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addTodo } from '../redux/modules/todos';
import styled from 'styled-components';

function InputList() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    return (
        <div>
            <StForm
                onSubmit={(event) => {
                    event.preventDefault();
                    if (title === '' || content === '') {
                        alert('제목과 내용 모두 작성하셔야합니다.');
                        return;
                    }

                    const newData = {
                        id: shortid(),
                        title,
                        content,
                        isDone: false,
                    };

                    dispatch(addTodo(newData));
                }}
            >
                제목 : <input value={title} onChange={(event) => setTitle(event.target.value)}></input>
                내용 : <input value={content} onChange={(event) => setContent(event.target.value)}></input>
                <button type="submit">등록</button>
            </StForm>
        </div>
    );
}

const StForm = styled.form`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    & input {
        margin: 10px;
    }
    & input {
        width: 200px;
    }
`;

export default InputList;
