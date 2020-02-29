import React, { Component ,PureComponent} from 'react'
import RectDom from 'react-dom'
class Father extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iNum: 2
        }


    }
    fnAdd = () => {
        this.setState(state => ({iNum: state.iNum+1}))
    }
    render() {
        console.log('---Father----')
        return (
            <div>
            <p>数字:{this.state.iNum}</p>
            <input type="button" value="点击" onClick={this.fnAdd}></input>
            <Son />

            </div>
            
        )
    }
}


class Son extends PureComponent {
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
