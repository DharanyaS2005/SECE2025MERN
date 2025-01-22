import {useState} from "react";
var UseState=()=>{
    var initialValue = 0;
    var [num,setNum]=useState(initialValue)
    return(
        <div>
            <h1>UseState Example</h1>
            <h4>The number is {num}</h4>
            <button onMouseEnter={() => setNum(num+1)}>+</button>
            <button onDoubleClick ={() => setNum(0)}>Reset</button>
            <button onKeyDown={() => setNum(num-1)}>-</button>

        </div>
    )
}
export default UseState