import {createStore} from 'redux'
import redux from './redux'
let store=createStore(redux)
console.log('store :', store);
export default store