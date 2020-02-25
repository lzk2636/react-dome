import React, { Component } from 'react'
import RectDom from 'react-dom'
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
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
            <li><Link to="page3/detail/1001">新闻标题1</Link></li>
            <li><Link to="page3/detail/1002">新闻标题2</Link></li>
            <li><Link to="page3/detail/1003">新闻标题3</Link></li>
        </ul>
    )
}
function NewsPage(props) {
    console.log(props)
    return <h1>新闻页面详情,頁面id:{props.match.params.newid}</h1>
}
const NotFound = () => <h1>404,Not Found </h1>
class App extends Component {
    render() {
        return (
            <HashRouter>
                {/* <Link to="/">页面1</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/page2">页面2</Link>&nbsp;&nbsp;
                <Link to="/page3">页面3</Link> */}
                <CustomLink label="页面1" to="/page1" />
                <CustomLink label="页面2" to="/page2" />
                <CustomLink label="页面3" to="/page3" />
                <hr></hr>
                <Switch>
                    <Route path="/page1" component={Page1}></Route>
                    <Route path="/page2" component={Page2}></Route>
                    <Route path="/page3" exact component={Page3}></Route>
                    <Route path="/page3/detail/:newid" component={NewsPage}></Route>
                    {/* 重定向放在倒数第二行,且必须exact匹配 */}
                    <Redirect exact from="/" to="/page1" ></Redirect>
                    {/* 404页面放在最下面 */}
                    <Route component={NotFound}></Route>
                </Switch>

            </HashRouter>
        )
    }

}

function CustomLink({ label, to, exact }) {
    return (<Route
            label={label}
            path={to}
            exact={exact}
            children={({match})=>(
              
                <Link to={ to } className={ match?'active':''}>{ label } </Link>
            )}
          />
    )

}
RectDom.render(<App />, document.getElementById('root'))
