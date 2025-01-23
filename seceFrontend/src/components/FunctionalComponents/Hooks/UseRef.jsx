import {useRef,useState,useEffect} from "react";
const UseRef =()=>{
    var [text,setText]=useState("");
    var prevRen=useRef();
    useEffect(()=>{
        console.log(prevRen);
        prevRen.current=text;
    },[text])
    return(
        <div>
        <h1>This is reference</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <h4>The text is {text}</h4>
        <h5>The previous render {prevRen.current}</h5>
        </div>
    )
}
export default UseRef;