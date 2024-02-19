export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (id, description, isDone) => ({
  type: EDIT_TASK,
  payload: { id, description, isDone },
});