import React from 'react';

// BEGIN (write your solution here)
export default class Card extends React.Component{
    render(){
        return <div className="card">
    <div className="card-body">
        <h4 className="card-title">{this.props.title ? this.props.title : 'title' }</h4>
        <p className="card-text">{this.props.text ? this.props.text : 'text'}</p>
    </div>
</div>
        
    }
}
