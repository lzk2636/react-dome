import React, { Component } from 'react'
import RectDom from 'react-dom'
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import './mian.css'
let bIsLogin=false
function Login(props) {
    return (
        <form>
            <p>
                <label>用户名</label>:&nbsp;
                <input type="text" />
            </p>
            <p>
                <label>密&nbsp;&nbsp;&nbsp;码</label>:&nbsp;
                <input type="password" />
            </p>
            <p>
                <input type="button" value="提交" onClick={() => props.history.push('/main')} />
            </p>

        </form>
    )
}
function Page01() {
    return <h1>
        内容一
    </h1>
}
function Page02() {
    return <h1>
        内容二
    </h1>
}
function Page03() {
    return <h1>
        内容三
    </h1>
}
function PageNo() {
    return <h1>
       用户没有权限哦哦
    </h1>
}
function NotFound() {
    return <h1>404NOt Found</h1>
}
function Main() {
    return (
        <div className="wrap">
            <div className="menus">
                <Link to="/main">内容一</Link><br /><br />
                <Link to="/main/page02">内容二</Link><br /><br />
                <Link to="/main/page03">内容三</Link>
            </div>
            <div className="content">
                <Switch>
                    <Route path='/main' exact component={Page01} />
                    <Route path='/main/page02' render={()=>{
                        if(bIsLogin){
                            return <Page03/>
                        }else{
                            return <PageNo />
                        }
                    }} />
                    <Route path='/main/page03' component={Page03} />
                    <Redirect from='/main' to="/main" exact></Redirect>
                    <Route component={NotFound} ></Route>

                </Switch>

            </div>
        </div>
    )

}
function App() {
    return (
        <HashRouter>
            <Switch>

                <Route path="/" exact component={Login} />
                <Route path="/main" component={Main} />
                <Route component={NotFound} exact></Route>
            </Switch>


        </HashRouter>
    )
}
RectDom.render(<App />, document.getElementById('root'))
