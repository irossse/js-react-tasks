import React from 'react';

// BEGIN (write your solution here)
export default class Progress extends React.Component{
    render(){

    return <div className="progress">
  <div
    className="progress-bar"
    role="progressbar"
    aria-valuenow={this.props.percentage}
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="progressbar"
    style={{width: `${this.props.percentage}%`}}
  ></div>
</div>
    }
}
// END
