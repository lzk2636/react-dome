import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state={
            sTodo:''
        }
    }
    fnChange=(e)=>{
        this.setState({
            sTodo:e.target.value
        })
    }
    Send=()=>{
        if(this.state.sTodo.trim().length===0){
            alert("输入的数据不能为空")
        }else{
            this.props.AddMessage(this.state.sTodo)
            this.setState({
                sTodo:""
            })
        }
    }
    render() {
        let {sTodo} =this.state
        return (
            <div>
                 <input type="text" value={ sTodo } onChange={ this.fnChange }  className="inputtxt" />
                <input type="button" name="" value="增加" id="btn1" className="inputbtn" onClick={ this.Send } /> 
            </div>
        );
    }
}

export default Input;