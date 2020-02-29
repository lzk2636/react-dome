let oDefaultStore={
   aList:[]
}
let redux=(store=oDefaultStore,action)=>{
    if(action.type==='change_val'){
        // console.log(action.value)
        let newStore =JSON.parse(JSON.stringify(store))
        
        newStore.sTodo=action.value
        // console.log('newStore :', newStore
        return newStore
    }else if(action.type==='list'){
        if(store.sTodo.trim()===''){
            alert("字符不能为空")
            store.sTodo=''
            return store
        }
        let newStore= {...store}
        newStore.aList=[...newStore.aList,newStore.sTodo]
        newStore.sTodo=''
        return newStore
    }else if(action.type==='id'){
        store.aList.splice(action.value,1)
        return store
    }else if(action.type==='data_list'){
        return action.value
    }
    return store

}
export default redux
