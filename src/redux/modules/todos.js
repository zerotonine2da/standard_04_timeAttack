import shortid from 'shortid';

//1. action item
const ADD_TODO = 'ADDTODO';
const DELETE_TODO = 'DELETETODO';
const SWTICH_TODO = 'SWTICHTODO';

//2. action creator
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
    return { type: DELETE_TODO, payload };
};

export const switchTodo = (payload) => {
    return { type: SWTICH_TODO, payload };
};

//3. initialState
const initialState = [
    {
        id: shortid(),
        title: '할일제목1',
        contents: '리덕스1',
        isDone: false,
    },
    {
        id: shortid(),
        title: '할일제목1',
        contents: '점심2',
        isDone: true,
    },
];

//4. reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [action.payload, ...state];

        case DELETE_TODO: //action.payload= 선택된 id
            return state.filter((item) => item.id !== action.payload);

        case SWTICH_TODO: //action.payload= 선택된 id
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, isDone: !item.isDone };
                } else {
                    return item;
                }
            });

        default:
            return state;
    }
};

//5. export
export default todos;
