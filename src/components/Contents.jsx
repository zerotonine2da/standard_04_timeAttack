import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/modules/todos';
import { switchTodo } from '../redux/modules/todos';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Contents({ isDone }) {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    return (
        <TitleDiv>
            <h2> {isDone ? '🥳 Done 🥳' : '🫠 Todo 🫠'}</h2>

            {todos
                .filter((todo) => todo.isDone === isDone)
                .map((item) => {
                    return (
                        <Wrapper key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>

                            <BtnDiv>
                                <button
                                    onClick={() => {
                                        dispatch(switchTodo(item.id));
                                    }}
                                >
                                    {' '}
                                    {isDone ? '취소' : '완료'}
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(deleteTodo(item.id));
                                    }}
                                >
                                    삭제
                                </button>
                                <button
                                    onClick={() => {
                                        Navigate(`/detail/${item.id}`);
                                    }}
                                >
                                    상세페이지
                                </button>
                            </BtnDiv>
                        </Wrapper>
                    );
                })}
        </TitleDiv>
    );
}

const TitleDiv = styled.div`
    width: 500px;

    h2 {
        font-size: 20px;
        font-weight: 700;
    }
    p {
        padding-left: 10px;
    }
`;

const Wrapper = styled.div`
    border: 1px solid red;
    margin: 10px;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    border-radius: 12px;
`;

const BtnDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px;
    gap: 10px;
`;

export default Contents;
