import {useState} from "react"
import List from "./List";

const UseCallback=()=>{
    var [num, setNum] = useState(0);
    var [dark,setDark]=useState(true);
    var styling={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }
    var getItems=(inc)=>{
        return [num+inc+1,num+inc+2,num+inc+3];
    }
    return(
        <div style={styling}><button onClick={()=>setDark(dark=>!dark)}>change theme</button> 
            <h2> Welcome to Callback</h2>
            <input type="number" value={num} onChange={(e) => {setNum(parseInt(e.target.value))}}/>
            <List func={getItems}/>
        </div>
       
    )
}
export default UseCallback;