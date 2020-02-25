import React, { Component } from 'react'
import RectDom from 'react-dom'
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import './mian.css'

function Login(props){
    return (
        <form>
            <p>
                <label>用户名</label>:&nbsp;
                <input type="text"/>
            </p>
            <p>
                <label>密&nbsp;&nbsp;&nbsp;码</label>:&nbsp;
                <input type="password"/>
            </p>
            <p>
            <input type="button" value="提交" onClick={()=>props.history.push('/main')}/>
            </p>

        </form>
    )
}
function Page01(){
    return <h1>
        内容一
    </h1>
}
function Page02(){
    return <h1>
        内容二
    </h1>
}
function Page03(){
    return <h1>
        内容三
    </h1>
}
function Main(){
    return (
        <div className="wrap">
            <div className="menus">
            <Link to="/main">内容一</Link><br/>
            <Link to="/main/page02">内容二</Link><br/>
            <Link to="/main/page03">内容三</Link>
            </div>
            <div className="content">

                <Route path='/main' exact component={Page01}/>
                <Route path='/main/page02' component={Page02}/>
                <Route path='/main/page03' component={Page03}/>
                <Redirect from='/main' to="/main" exact></Redirect>

            </div>


        </div>


    )

}
function App(){
    return(
        <HashRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/main" component={Main}/>

        </HashRouter>
    )
}
RectDom.render(<App />, document.getElementById('root'))
