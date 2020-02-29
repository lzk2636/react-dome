import React, { Component } from 'react';
import { Breadcrumb, Layout, Card, Button } from 'element-react'
// import clothes01 from "../static/images/clothes01.jpg"
import axios from 'axios'
import store from '../store'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            production: []
        }
    }
    componentWillMount() {
        axios({
            url: '/data.json',

        }).then(res => {
            //成功回调
            console.log(res)
            this.setState({
                production: res.data.prodction
            })
        });
    }
    fnAddCart = (item) => {
        store.dispatch({
            type: "good_name",
            value: item
        })
    }
    render() {
        let { production } = this.state
        return (
            <div className="mp10">
                <Breadcrumb separator="/" >
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>商品列表</Breadcrumb.Item>
                </Breadcrumb>
                <Layout.Row gutter="20" className="mp10">
                    {
                        production.map((item, index) => (

                            <Layout.Col span="6" key={item.id}>
                                <Card bodyStyle={{ padding: 0 }}>
                                    <img src={item.url} className="image" alt=""/>
                                    <div style={{ padding: "14px 10px" }}>
                                        <div className="goodName">
                                            {item.goods_name}
                                        </div>
                                        <div className="price">
                                            <span>￥</span> <b>{item.price}</b>
                                        </div>
                                        <div className="bottom mp10">
                                            <Button type="danger" size="small" className="mp10" onClick={() => this.fnAddCart(item)}>加入购物车</Button>
                                        </div>
                                    </div>
                                </Card>
                            </Layout.Col>
                        )
                        )
                    }
                </Layout.Row>
            </div>
        );
    }
}

export default List;