import React from 'react'
import RectDom from 'react-dom'
import propTypes   from 'prop-types'
function App (props){
    console.log(props)
    return (
        <div>
          <p>数据只是{props.iNum}</p>
          <p>多么的{props.young}</p>
          <p>性别是:{props.gender}</p>
        </div>
    );
};
App.propTypes={
    iNum:propTypes.number.isRequired,
    gender:propTypes.oneOf(["男","女"]),
    young:propTypes.string.isRequired
}

RectDom.render(<App iNum={6} gender={"男"} young="6"/>,document.getElementById('root'))