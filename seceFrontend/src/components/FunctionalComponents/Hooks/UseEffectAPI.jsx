import {useState,useEffect} from "react";
import axios from "axios";
const UseEffectAPI=()=>{
    var [post,setPost]=useState([])
    useEffect(()=>{
    var response= axios.get("https://jsonplaceholder.typicode.com/posts/").then((res)=>{setPost(res.data) 
    console.log(res)})
    .catch((err)=>console.log(err));
    /*console.log(response);*/
    },[]);
return(
    <div>
        <h3>This page is for API</h3>
        <h4>The content present in APIPlaceholder API Post</h4>
        <ul>
            {post.map((element)=>(
                <li key={element.id} style={{listStyleType:"number"}}>{element.title}</li>
            ))}
        </ul>
    </div>
)

}
export default UseEffectAPI;