import React, { Component } from 'react';
import { Breadcrumb, Layout, Card, Button } from 'element-react'
// import clothes01 from "../static/images/clothes01.jpg"
import axios from 'axios'
import store from '../store'
import { connect } from 'react-redux'

const List = props => {

console.log('props :', props);
function get(){
    axios.get('./data.json').then(res=>{
        // props.production=res.data.production
        console.log(props.llle=res.data.production)
    })
}

get()
 return (
    <div className="mp10">
        <Breadcrumb separator="/" >
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>商品列表</Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Row gutter="20" className="mp10">
            {
                props.production.map((item, index) => (

                    <Layout.Col span="6" key={item.id}>
                        <Card bodyStyle={{ padding: 0 }}>
                            <img src={item.url} className="image" alt="" />
                            <div style={{ padding: "14px 10px" }}>
                                <div className="goodName">
                                    {item.goods_name}
                                </div>
                                <div className="price">
                                    <span>￥</span> <b>{item.price}</b>
                                </div>
                                <div className="bottom mp10">
                                    <Button type="danger" size="small" className="mp10" onClick={() => props.fnAddCart(item)}>加入购物车</Button>
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
const mapStateToProps = state => {
   


    return {
        production: [
            {
                "id": 1001,
                "goods_name": "男式黑白格子衬衫",
                "url": "./static/images/clothes01.jpg",
                "price": 169,
                "num": 1
            },
            {
                "id": 1002,
                "goods_name": "纯棉印花宽松长袖T恤",
                "url": "./static/images/clothes02.jpg",
                "price": 69,
                "num": 1
            },
            {
                "id": 1003,
                "goods_name": "男士连帽夹克2019春季新款",
                "url": "./static/images/clothes03.jpg",
                "price": 249,
                "num": 1
            },
            {
                "id": 1004,
                "goods_name": "2019夏装新品时尚百搭",
                "url": "./static/images/clothes04.jpg",
                "price": 49,
                "num": 1
            }

        ]
    }
}
    const mapDispatchToProps = dispatch => {
        return {
            fnAddCart(item) {
                dispatch({
                    type: "good_name",
                    value: item
                })
            }
        }

    }
export default connect(mapStateToProps, mapDispatchToProps)(List);