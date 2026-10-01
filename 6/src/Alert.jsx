import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class Alert extends React.Component{
    render(){
        const classes=cn({alert: true, [`alert-${this.props.type}`]:true})
        return <div className={classes} role="alert">{this.props.text}</div>
    }
}
// END
