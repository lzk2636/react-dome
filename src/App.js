import React, { Component } from 'react';
import { Button, Badge } from 'element-react';
import banner from './static/images/banner.png'
import { HashRouter, Route } from "react-router-dom"
// import Cist from './components/cart'
import './static/css/main.css'
import List from './components/list'
import Cart from './components/cart';
import store from './store';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCount: this.allCount()
        }
        this.unsubscribe = store.subscribe(this.fnListener)



    }
    fnListener = () => {
        this.setState({
            allCount: this.allCount()
        })
    }
    allCount = () => {
        let arry = store.getState()
        let count = 0
        arry.map(item => {
            return count += item.num
        })
        return count
    }
    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div className="wrap">
                <img src={banner} className="banner" alt="" />
                <div className="menus">
                    <a href="#/">
                        <Button type="success">商品列表</Button>
                    </a>
                    <a href="#/cart">
                        <Badge value={this.state.allCount}>
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
    }
}

export default App;