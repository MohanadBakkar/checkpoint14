import { ADD_TASK, EDIT_TASK } from './actions';

const initialState = {
  tasks: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), ...action.payload }],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description ?? task.description, isDone: action.payload.isDone ?? task.isDone } : task
        ),
      };
    default:
      return state;
  }
};

//export default rootReducer;