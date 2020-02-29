import React, { Component } from 'react';
import { Breadcrumb,Table,InputNumber, Button} from 'element-react'
import store from '../store';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            columns:[
                {
                    label:"名称",
                    prop:'goods_name'
                },
                {
                    label:"图片",
                    prop:'url',
                    render:(data)=>{
                        return <img alt="" src={data.url} style={{"width":"100px",margin:"10px"}} />
                    }
                },
                {
                    label:"单价",
                    prop:'price',
                },
                {
                    label:"数量",
                    prop:'num',
                    render:(data)=>{
                        return    <InputNumber size="small" min={1} defaultValue={data.num}  onChange={this.onChange.bind(this,data)}></InputNumber>
                    }
                },
                {
                    label:"总价",
                    // prop:'num',
                    render:(data)=>{
                        return   <span>{data.num*data.price}</span>
                    }
                },
                {
                    label:"稍作",
                    render:(data)=>{
                        return    <Button type="danger" onClick={()=>this.fndelete(data)}>删除</Button>
                    }
                }
            ],
            data:store.getState() ,
            allCount:this.fnCount()
        }
        this.unSubscrible=store.subscribe(this.fnLinster)
    }
    fnCount=()=>{
        let data=store.getState();
        // console.log(data)
        let count=0
       data.map(item=>{
           return  count+=item.price*item.num
        })
        return count
    }
    onChange(value,num){
      
        value.num=num
        store.dispatch({
            type:"set_num",
            value
        })
    }
    fndelete=(value)=>{
        store.dispatch({
            type:"dele_item",
            value
        })
      
    }
    fnLinster=()=>{
        this.setState({
            data:store.getState(),
            allCount:this.fnCount()
        })
    }
    componentWillUnmount(){
        this.unSubscrible()
    }
    render() {
        return (
            <div className="mp10">
                <Breadcrumb separator="/" >
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>购物车</Breadcrumb.Item>
                </Breadcrumb>
                <Table
                    className="mp10"
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.state.data}
                    highlightCurrentRow={true}
                />
                <div className="total_price">
                    <span>总计:</span><b>{this.state.allCount}</b>
                </div>
            </div>
        );
    }
}

export default Cart;