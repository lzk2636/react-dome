import React from 'react';


function List(props) {
    return (
        <ul id="list" className="list">
            {
               // eslint-disable-next-line
                props.aList.map((item, i) => <li key={i}><span>{item}</span><a href="#" className="del" onClick={() => props.fnDel(i)}>删除</a></li>)
            }
        </ul>
    )
}
export default List