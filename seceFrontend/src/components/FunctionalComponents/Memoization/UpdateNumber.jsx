import React from 'react'
import {memo} from 'react'


const UpdateNumber = ({value}) => {
  return (
    <div>
      <h2>number</h2>
      <h3>value is {value}</h3>
    </div>
  )
}

export default memo(UpdateNumber);
