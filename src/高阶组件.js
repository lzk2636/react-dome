import React, { Component } from 'react'
import RectDom from 'react-dom'
// import propTypes   from 'prop-types'
/**
* @description:高阶组件 (HOC) 就是封装一个方法传入组件 方法渲染返回组件 然后进行调用组件方法
* @param {type} Com
* @return: Mouse
*/
function widthMouseCat (Com){
    class Mouse extends Component{
        constructor(props) {
            super(props)
            console.log(props)
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
            return <Com {...this.state} {...this.props}/>
            
        }
    }
    return Mouse
}
/**
* @description: Cat 要获取数据必修从包裹的组件中获取来,比如Mouse中,然后将props 结构赋值
* @param {type} 
* @return: 
*/
function Cat (props){
    return <img src={require('./components/index.png')} alt={props.sAlt} 
    style={{width:"50px",height:"50px",position:"fixed",left:props.x-25,top:props.y-25}}/>
}

const Mouse =widthMouseCat(Cat)
// RectDom.render(<Mouse  show={(state)=><Cat {...state} />} />,document.getElementById('root'))
RectDom.render(<Mouse sAlt="这是一个猫" />,document.getElementById('root'))
