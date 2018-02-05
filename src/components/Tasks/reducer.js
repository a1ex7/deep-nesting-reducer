import {
  ADD_TASK,
  COMPLETE_TASK
} from './actions';

const initialState = {
  items: [
    {
      id: 1,
      name: 'azaza',
      checked: false,
      filters: [
        {
          filter: false
        }
      ]
    },
    {
      id: 2,
      name: 'ololo',
      checked: false,
      filters: [
        {
          filter: false
        }
      ]
    },
    {
      id: 3,
      name: 'nanana',
      checked: false,
      filters: [
        {
          filter: false
        }
      ]
    }
  ]
}

export default function tasksReducer(state = initialState, action) {
  switch(action.type) {

    case ADD_TASK:
      return {
        ...state,
        items: [ ...state.items, action.item]
      };

    case COMPLETE_TASK:
      return  {
        ...state,
        items: state.items.map((item, index) => {
          if (item.id == (action.index + 1)) {
            return {
              ...item,
              checked: action.checked,
              filters: item.filters.map((filter, index) => {
                if (index === 0) {
                  return { ...filter, filter: action.checked }
                }
                return filter;
              }) 
            } 
          }
          return item;
        }
      )
      };

    default: 
      return state;
  }
}