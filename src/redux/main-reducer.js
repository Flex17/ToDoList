const ADD_TASK = 'ADD-TASK';
const COMPLETE_TASK = 'COMPLETE-TASK';
const CHANGE_CURRENT_TEXT = 'CHANGE-CURRENT-TEXT';
const DELETE_TASK = 'DELETE-TASK'

const initialState = {
    tasks: [
        {
            id: Math.floor(Math.random() * 10_000_000),
            text: 'Learn React',
            isCompleted: false
        },
        {
            id: Math.floor(Math.random() * 10_000_000),
            text: 'Learn JS',
            isCompleted: false
        }
    ],
    currentText: ''
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            if (state.currentText.trim() !== '') {
                return {
                    ...state,
                    tasks: [
                        ...state.tasks,
                        {
                            id: Math.floor(Math.random() * 10_000_000),
                            text: state.currentText,
                            isCompleted: false
                        }
                    ],
                    currentText: ''
                }
            }
            return state

        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) {
                        return {
                            ...task,
                            isCompleted: !task.isCompleted
                        }
                    }
                    return task
                })
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => {
                    return task.id !== action.id
                })
            }

        case CHANGE_CURRENT_TEXT:
            return {
                ...state,
                currentText: action.currentText
            }

        default:
            return state
    }
}

export const changeCurrentText = (text) => {
    return {
        type: CHANGE_CURRENT_TEXT,
        currentText: text
    }
}

export const addTask = () => {
    return {
        type: ADD_TASK
    }
}

export const completeTask = (id) => {
    return {
        type: COMPLETE_TASK,
        id: id
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id: id
    }
}

export default tasksReducer