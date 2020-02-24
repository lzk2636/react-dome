import React, { Component } from 'react'
import RectDom from 'react-dom'
// import propTypes   from 'prop-types'

class Mouse extends Component{
    constructor(props) {
        super(props)
        this.state={
            x:0,
            y:0
        }
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.moving)
    }
    moving=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    render(){
        return (
            <p>鼠标的位置:x:{this.state.x}===y:{this.state.y}</p>
        )
    }
}
function Cat (){
    return <img src={require('./components/index.png')} alt="pic" style={{width:"50px",height:"50px"}}/>
}

RectDom.render(<Cat />,document.getElementById('root'))