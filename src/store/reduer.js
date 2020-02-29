// import store from ".";

let reduer=(store=[],action)=>{
    if(action.type==='good_name'){
        let newData=JSON.parse(JSON.stringify(store))
        let bIsFrist = newData.find(item=>item.id===action.value.id)
        if(bIsFrist){
            bIsFrist.num+=1
            return newData
        }
        newData.push(action.value)
        return newData
    }
    if(action.type==='set_num'){
        let NumStore= JSON.parse(JSON.stringify(store))
       let neswsData= NumStore.find(item=>item.id===action.value.id)// 获取对象
       if(neswsData){
            neswsData.num=action.value.num
           return  NumStore
       }
    }
    if(action.type==='dele_item'){
        let newStore=JSON.parse(JSON.stringify(store))
        let index=newStore.findIndex(item=>item.id===action.value.id)
        // console.log('index :', index);
        newStore.splice(index,1)
        return newStore
    }
    return store
}
export default reduer