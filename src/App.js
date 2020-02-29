import React from 'react';
import { Button, Badge } from 'element-react';
import banner from './static/images/banner.png'
import { HashRouter, Route } from "react-router-dom"
import './static/css/main.css'
import List from './components/list'
import Cart from './components/cart';
import { connect } from 'react-redux'
const App = props => (
    <div className="wrap">
        <img src={banner} className="banner" alt="" />
        <div className="menus">
            <a href="#/">
                <Button type="success">商品列表</Button>
            </a>
            <a href="#/cart">
                <Badge value={props.allCount}>
                    <Button type="success">购物车</Button>
                </Badge>
            </a>
        </div>
        <HashRouter>
            <Route path="/" component={List} exact></Route>
            <Route path="/cart" component={Cart}></Route>
        </HashRouter>
    </div>
);


const mapStateToProps = state => {
    let allCount = () => {
        // let arry = store.getState()
        let count = 0
        state.map(item => {
            return count += item.num
        })
        return count
    }
    return {
        allCount: allCount()
    }
}

export default connect(mapStateToProps, null)(App);