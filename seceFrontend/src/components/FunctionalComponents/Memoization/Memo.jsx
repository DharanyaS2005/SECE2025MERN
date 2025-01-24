import React from 'react'
import {useState} from 'react'
import UpdateNumber from './UpdateNumber'
import UpdateText from './UpdateText'

const Memo = () => {
    var [num,setNum]=useState(0);
    var [num1,setNum1]=useState(0);
  return (
    <div>
      <h2>this is optimization process</h2>
      <UpdateNumber value={num}/>
      <button onClick={()=>setNum(num+1)}>+</button>
      <UpdateText value={num1}/>
      <button onClick={()=>setNum1(num1+1)}>+</button>
    </div>
  )
}

export default Memo
