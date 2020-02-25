import React, { Component } from 'react'
import RectDom from 'react-dom'
import { HashRouter, Link, Route, Switch,Redirect } from 'react-router-dom'
import './mian.css'
function Page1() {
    return <h1>页面1</h1>
}
function Page2() {
    return <h1>页面2</h1>
}
function Page3() {
    return (
        <ul>
        <li>新闻标题1</li>
        <li>新闻标题2</li>
        <li>新闻标题3</li>
        </ul>
    )
}
function NewsPage(){
    return <h1>新闻页面详情</h1>
}
const NotFound = () => <h1>404,Not Found </h1>
class App extends Component {
    render() {
        return (
            <HashRouter>
                <Link to="/">页面1</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/page2">页面2</Link>&nbsp;&nbsp;
                <Link to="/page3">页面3</Link>
                <hr></hr>
                <Switch>
                    <Route path="/page1"  component={Page1}></Route>
                    <Route path="/page2" component={Page2}></Route>
                    <Route path="/page3" component={Page3}></Route> 
                    <Route path="/page3/detail" component={Page3}></Route> 
                    {/* 重定向放在倒数第二行,且必须exact匹配 */}
                    <Redirect exact from="/" to="/page1" ></Redirect>
                    {/* 404页面放在最下面 */}
                    <Route component={NotFound}></Route>
                </Switch>

            </HashRouter>
        )
    }

}

RectDom.render(<App />, document.getElementById('root'))
