import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
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

  handleClick=()=>{
    const colorNew= getRandomColor()
    this.setState({
      color: colorNew,
      childColor: getReducedColor(colorNew)
    })
  }

  handleChildClick=(e)=>{
    e.stopPropagation()
    const colorNew= getRandomColor()
    this.setState({
      childColor: colorNew
    })
  }

  render() {
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleClick={this.handleChildClick} />
        <Tier2 color={this.state.childColor} handleClick={this.handleChildClick} />
      </div>
    )
  }
}
