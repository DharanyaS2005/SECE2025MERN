import {useState} from "react"

const UseCallback=()=>{
    var [num, setNum] = useState(0);
    return(
        <div>
            <h2> Welcome to Callback</h2>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
        </div>
    )
}
export default UseCallback;