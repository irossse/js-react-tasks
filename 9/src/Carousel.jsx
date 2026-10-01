import React from 'react';
import cn from 'classnames';
import uniqueId from 'lodash/uniqueId'

// BEGIN (write your solution here)
export default class Carousel extends React.Component{
  constructor(props){
    super(props)
    this.state = {active: 0}

  }
    prev =(event)=>{
     
        this.setState({active: (this.state.active-1+this.props.images.length)%this.props.images.length})

    }

    next =(event)=>{
  
        this.setState({active: (this.state.active+1)%this.props.images.length})

    }



    render(){
        return  <div id="carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {this.props.images.map((img, index) => (
        <div key={uniqueId()} className={cn('carousel-item', {
            active: index === this.state.active,
          })}>
          <img
            alt=""
            className="d-block w-100"
            src={img}
          />
        </div>
      ))}
    </div>

    <button
      onClick={this.prev}
      className="carousel-control-prev"
      data-bs-target="#carousel"
      type="button"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>

    <button
      onClick={this.next}
      className="carousel-control-next"
      data-bs-target="#carousel"
      type="button"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    }
  }