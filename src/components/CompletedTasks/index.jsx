import React from 'react';
import { connect } from 'react-redux';

export class CompletedTasks extends React.Component {
  render() {
    return (
      <div>
        CompletedTasks
      </div>
    )
  }
}

export function mapStateToProps(state) {
  return {
    state
  }
}

export function mapDispatchProps(disptach) {
  return {
    disptach
  }
}

export default connect(mapStateToProps, mapDispatchProps)(CompletedTasks);