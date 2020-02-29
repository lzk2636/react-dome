import React, { Component } from 'react';
import { Breadcrumb, Table, InputNumber, Button } from 'element-react'
import store from '../store';
import { connect } from 'react-redux'

const Cart = (props) => {
    let columns = [
        {
            label: "名称",
            prop: 'goods_name'
        },
        {
            label: "图片",
            prop: 'url',
            render: (data) => {
                return <img alt="" src={data.url} style={{ "width": "100px", margin: "10px" }} />
            }
        },
        {
            label: "单价",
            prop: 'price',
        },
        {
            label: "数量",
            prop: 'num',
            render: (data) => {
                return <InputNumber size="small" min={1} defaultValue={data.num} onChange={props.onChange.bind(this, data)}></InputNumber>
            }
        },
        {
            label: "总价",
            // prop:'num',
            render: (data) => {
                return <span>{data.num * data.price}</span>
            }
        },
        {
            label: "稍作",
            render: (data) => {
                return <Button type="danger" onClick={() => props.fndelete(data)}>删除</Button>
            }
        }
    ]


    return (
        <div className="mp10">
            <Breadcrumb separator="/" >
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>购物车</Breadcrumb.Item>
            </Breadcrumb>
            <Table
                className="mp10"
                style={{ width: '100%' }}
                columns={columns}
                data={props.data}
                highlightCurrentRow={true}
            />
            <div className="total_price">
                <span>总计:</span><b>{props.allCount}</b>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    let fnCount = () => {

        let count = 0
        state.map(item => {
            return count += item.price * item.num
        })
        return count
    }
    return {
        data: state,
        allCount: fnCount()
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        onChange(value, num) {
            value.num = num
            dispatch({
                type: "set_num",
                value
            })
        },
        fndelete(value) {
            dispatch({
                type: "dele_item",
                value
            })

        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Cart);