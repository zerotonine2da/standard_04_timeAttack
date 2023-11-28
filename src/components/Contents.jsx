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
        <div>
            {isDone ? '[Done]' : '[Todo]'}

            {todos
                .filter((todo) => todo.isDone === isDone)
                .map((item) => {
                    return (
                        <Wrapper key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.contents}</p>

                            <StBtn
                                onClick={() => {
                                    dispatch(switchTodo(item.id));
                                }}
                            >
                                {' '}
                                {isDone ? '취소' : '완료'}
                            </StBtn>
                            <button
                                onClick={() => {
                                    dispatch(deleteTodo(item.id));
                                }}
                            >
                                삭제
                            </button>
                            <StBtn
                                onClick={() => {
                                    Navigate(`/detail/${item.id}`);
                                }}
                            >
                                상세페이지
                            </StBtn>
                        </Wrapper>
                    );
                })}
        </div>
    );
}

const Wrapper = styled.div`
    border: 1px solid red;
    margin: 10px;
`;

const StBtn = styled.button`
    margin: 10px;
`;

export default Contents;
