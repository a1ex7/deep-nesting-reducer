export const COMPLETE_TASK = 'COMPLETE_TASK';

export function completeTask(index, checked) {
  return {
    type: COMPLETE_TASK,
    index,
    checked
  }
}

export const ADD_TASK = 'ADD_TASK';

export function addTask(item) {
  return {
    type: ADD_TASK,
    item
  }
}

