import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {log: []}
    }

    plusClick=(e)=>{
        const valueLog = (this.state.log[0] ?? 0)+1
        this.setState({
    log: [valueLog, ...this.state.log],
  })
    }

    minusClick=(e)=>{
        const valueLog = (this.state.log[0] ?? 0)-1
        this.setState({ log: [valueLog, ...this.state.log],
  })
    }

    delClick=(index)=>{
        this.setState({
    log: this.state.log.filter((_, i) => i !== index),
  })

    }


    render(){
        return <div>
    <div className="btn-group font-monospace" role="group">
        <button onClick={this.plusClick} type="button" className="btn btn-outline-success">+</button>
        <button onClick={this.minusClick} type="button" className="btn btn-outline-danger">-</button>
  </div>
     {this.state.log.length > 0 && (
        <div className="list-group">
          {this.state.log.map((element, index) => (
            <button
              key={uniqueId()} onClick={() => this.delClick(index)} type="button" className="list-group-item list-group-item-action"
            >
        {element}
            </button>))}
        </div>)}
    </div>
  }
}


// END
