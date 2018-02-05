import React from 'react';
import { Link } from 'react-router';

export default class Lauyout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Главная</Link>
          <span> </span>
          <Link to="/completed">Завершённые</Link>
        </div>
        <hr />
        {this.props.children}
      </div>
    )
  }
}