import React from 'react';
import ReactDOM from 'react-dom';
import {name,obj} from './components/dome'
import './components/main.css'
import cat from './components/index.png'
function App(){
    return (<div>
            <p>{name}</p>
            <p>{obj.age}</p>
            {/* 将项目的图片放入public ./代表public的路径 */}
            {/* <img src={"./components/index.png"} alt="llll"/> */}
            <img src={cat} alt="这是一致吗" />
            <img src={require('./components/index.png')} alt="dsdsd"/>
        </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));

