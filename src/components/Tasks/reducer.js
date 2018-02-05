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
        ...state, // берём наш стейт..
        items: state.items.map((item, index) => { // маппим его..
          if (item.id == (action.index + 1)) { // ищем совпадение по  id..
            return { // если нашёл такой объект, то..
              ...item, // берём этот объект..
              checked: action.checked, // если нужно, что-нибудь меняем в нём по поути..
              filters: item.filters.map((filter, index) => { // затем берём массив фильтров и маппим его..
                if (index === 0) { // тут нужно будет придумать, что мы будем сравнивать и с чем, чтобы опознать наш объект..
                  return { ...filter, filter: action.checked } // если нашёлся наш фильтр, меняем его. У вас как раз будет checked: true/false
                }
                return filter; // если не совпало, то возврашаем фильтр, и так на каждой итерации, пока не найдём нужный
              }) 
            } 
          }
          return item; // если не совпало, то возврашаем наш итем, и так на каждой итерации, пока не найдём нужный
        }
        /**он
         * Собстенно, вложенность может быть любая, объект -> маппим -> ещё-объект -> маппим и т.д.
         * Хотя это противоречит идее редукса, стейт компонента должен быть плоским, а не deep nesting.
         */
      )
      };

    default: 
      return state;
  }
}