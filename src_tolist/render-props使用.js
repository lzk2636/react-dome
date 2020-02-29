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
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.moving)
    }
    moving=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    render(){
        // return this.props.show(this.state)
        // 使用children模式
        return this.props.children(this.state)
        
    }
}
function Cat (props){
    return <img src={require('./components/index.png')} alt="pic" 
    style={{width:"50px",height:"50px",position:"fixed",left:props.x-25,top:props.y-25}}/>
}
/**在
* @description:render-props模式
    本质是在mouse 的组件中封装了一个方法,返回一个自定义方法交给props
    在自定义方法返回一个调用一个组件,并获取返回的的参数放在cat中
    {...state}<===>x=state.x, y=state.y
* @param {type} 
* @return: 
*/

// RectDom.render(<Mouse  show={(state)=><Cat {...state} />} />,document.getElementById('root'))
RectDom.render(<Mouse>{state=><Cat {...state}/>}</Mouse>,document.getElementById('root'))
