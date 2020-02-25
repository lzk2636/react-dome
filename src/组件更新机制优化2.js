import React, { Component ,PureComponent} from 'react'
import RectDom from 'react-dom'
class Father extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iNum: 1
        }


    }
    fnAdd = () => {
        this.setState({
            iNum:Math.floor(Math.random()*2)
        })
    }
    render() {
        console.log('---Father----')
        return (
            <div>
            <p>数字:{this.state.iNum}</p>
            <input type="button" value="点击" onClick={this.fnAdd}></input>
            <Son iNum={this.state.iNum}/>

            </div>
            
        )
    }
}


class Son extends Component {
 
    shouldComponentUpdate(state){
      
        return  state.iNum!==this.props.iNum;
    }
    render() {
        console.log('---son----')
        
        return (
            <div>
                子组件
            </div>
        );
    }
}

RectDom.render(<Father/>, document.getElementById('root'))
