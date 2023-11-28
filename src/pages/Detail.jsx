import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTodo } from '../redux/modules/todos';

function Detail() {
    const todos = useSelector((state) => state.todos);
    const { id } = useParams();
    const fileredTodo = todos.filter((todo) => todo.id === id);
    const Navigator = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
            <div>
                {fileredTodo.map((item) => {
                    return (
                        <div key={item.id}>
                            <p>제목: {item.title}</p>
                            <p>내용:{item.contents}</p>
                            <p>완료여부: {item.isDone.toString()}</p>
                        </div>
                    );
                })}
            </div>
            <button
                onClick={() => {
                    Navigator(-1);
                }}
            >
                이전화면
            </button>
            <button
                onClick={() => {
                    if (window.confirm('삭제하시겠습니까?')) {
                        dispatch(deleteTodo(id));
                        Navigator('/');
                    }
                }}
            >
                삭제
            </button>
        </>
    );
}

export default Detail;
