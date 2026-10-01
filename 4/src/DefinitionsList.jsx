import React from 'react';

// BEGIN (write your solution here)
export default class DefinitionsList extends React.Component{
    render(){
        if (this.props.data.length===0){
            return null
        }
        return (<dl>{this.props.data.map(element => {
            return <React.Fragment key={element.id}>
  <dt>{element.dt}</dt>
  <dd>{element.dd}</dd>
  </React.Fragment>})}</dl>)
    }
}
// END
