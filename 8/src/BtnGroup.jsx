import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component{
    constructor(){
        super()
        this.state={
            active: null
        }

    }

    hendlerL = () =>{
        this.setState({active: 'left'})

    }

    hendlerR = () =>{
        this.setState({active: 'right'})

    }

    render(){
        return <div className="btn-group" role="group">

<button onClick={this.hendlerL} type="button" className={this.state.active==='left' ? 'btn btn-secondary left active' : 'btn btn-secondary left'}>Left</button>

<button onClick={this.hendlerR} type="button" className={this.state.active==='right' ? 'btn btn-secondary right active' : 'btn btn-secondary right'}>right</button>
</div>
    }
}
// END
