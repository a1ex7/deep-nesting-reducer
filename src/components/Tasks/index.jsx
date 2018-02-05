import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

export class Tasks extends React.Component {

  componentDidUpdate() {
    console.log('UPDATED');
    // Здесь можем вызвать экшен, который запустит аякс запрос,
    // который возмёт уже изменённый фильтр и обновит страницу.
  }

  handleAddTask = event => {
    if (event.key == 'Enter') {
      const item = { name: event.target.value, checked: false};
      console.log(item);
      event.target.value = '';
      return this.props.addTask(item);
    }
  }

  handleComplete = event => {
    const { id, checked } = event.target;
    return this.props.completeTask(id, checked);
  }

  render() {
    const { items } = this.props.state.tasks;
    return (
      <div style={{ width: '30%', display: 'flex', flexFlow: 'column nowrap' }}>
        <input 
          type="text" 
          style={{ marginBottom: '10px' }}
          onKeyPress={this.handleAddTask}
        />
        {
          items.map((item, i) => (
            // Маппим чекбоксы
            <label 
              htmlFor={i} 
              key={i} 
              style={{ border: '1px solid black', borderRadius: '3px', marginBottom: '10px', cursor: 'pointer' }}
              >
              <input 
                id={i} 
                type="checkbox"
                onChange={this.handleComplete}
                checked={item.status}
              ></input>
              <span>{item.name}</span>
            </label>
          ))
        }
      </div>
    )
  }
}

export function mapStateToProps(state) {
  return {
    state
  }
}

export function mapDispatchProps(dispatch) {
  return {
    completeTask: (index, checked) => dispatch(actions.completeTask(index, checked)),
    addTask: (item) => dispatch(actions.addTask(item))
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Tasks);