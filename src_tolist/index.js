import React, { Component } from 'react'
import RectDom from 'react-dom'
import './mian.css'
import store from './store'
import axios from 'axios'
class ToList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.statusSubscribe=store.subscribe(this.fnSetStore)     
    }
    fnSetStore=()=>{
        this.setState(store.getState())
    }
    fnAdd=(e)=>{
        let action={
            type:"change_val",
            value:e.target.value
        }
        store.dispatch(action)
    }
    fnaddList=()=>{
        store.dispatch({
            type:"list"
        })
    }
    fnDelete=(i)=>{
        store.dispatch({
            type:'id',
            value:i
        })
    }
    componentDidMount(){
        axios.get('/data.json').then(res=>{
            store.dispatch({
                type:"data_list",
                value:res.data
            })
        })
    }   
    
    componentWillUnmount(){
        this.statusSubscribe()
    }
    render() {
        let { aList, sTodo } = this.state
        return (
            <div className="list_con">
                <h2>To do list</h2>
                <input type="text" name="" id="txt1" className="inputtxt" value={sTodo} onChange={this.fnAdd}/>
                <input type="button" name="" value="增加" id="btn1" className="inputbtn" onClick={this.fnaddList}/>
                <ul id="list" className="list">
                    {
                        aList.map((item, i) => {return <li key={i}><span>{item}</span><a href="/#" onClick={()=>this.fnDelete(i)} className="del">删除</a></li>} )
                    }
                </ul>
            </div>
        );
    }
}


RectDom.render(<ToList />, document.getElementById('root'))
