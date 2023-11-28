import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/modules/todos';
import { switchTodo } from '../redux/modules/todos';

function Contents({ isDone }) {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            {isDone ? '[완료]' : '[할일]'}
            {todos
                .filter((todo) => todo.isDone === isDone)
                .map((item) => {
                    return (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.contents}</p>
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
                        </div>
                    );
                })}
        </div>
    );
}

export default Contents;
