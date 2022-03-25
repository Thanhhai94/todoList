import { combineReducers } from "redux"
import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodoListSlice"


// const rootReducer = (state = {}, action) => {
//     console.log({state,action})
//     return {
//         filters: filtersReducer(state.filters,action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer

/* const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
        {id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
        {id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' }

    ]
}
const rootReducer = (state = initState, action) => {
    console.log({state,action})
    switch(action.type){
        case 'todoList/addTodo' :
            return {
                ...state, 
                todoList: [
                    ...state.todoList, action.payload
                ]
            }
        case 'filter/searchFilterChange' :
            return {
                ...state,
                filters: {
                    ...state.filters, search: action.payload
                }
            }
        default:
            return state;
    }
}

export default rootReducer */