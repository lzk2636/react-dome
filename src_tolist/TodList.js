/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './components/main.css';
import List from './List.js';
import Input from './Input.js'


class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            aList:['学习html','学习css']
        }
    }

 

    fnAdd=(data)=>{
        console.log(data)
        this.setState(state=>{
            return {
                aList:[...state.aList,data]
            }
        })
    }

    fnDel=(i)=>{
        this.setState(state=>{
            state.aList.splice(i,1);
            return {
                aList:state.aList
            }
        })
    }

    render() {
        let { aList} = this.state
        return (
            <div className="list_con">
                <h2>To do list</h2>
                <Input AddMessage={this.fnAdd}/>              
                <List aList={aList} fnDel={this.fnDel}/>
            </div>
        );
    }
}





ReactDOM.render(<Todolist />, document.getElementById('root'));



