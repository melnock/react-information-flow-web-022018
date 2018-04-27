import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
    }
  }

  shouldComponentUpdate=(nextProps)=>{
    return(nextProps.color !== this.state.color)
  }

  componentWillReceiveProps=(nextProps)=>{
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }

  handleChildClick=(e)=>{
    console.log(this.state);
    e.stopPropagation()
    const colorNew= getRandomColor()
    this.setState({
      childColor: colorNew
    })
  }

  render() {
    console.log("after",this.state)
    return (
      <div className="tier2" onClick={this.props.handleClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor}  handleChildClick={this.handleChildClick}/>
        <Tier3 color={this.state.childColor}  handleChildClick={this.handleChildClick}/>
      </div>
    )
  }
}
