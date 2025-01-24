import React from 'react'
import {memo} from 'react'

const UpdateText = ({value}) => {
  return (
    <div>
      <h4>num1</h4>
      <h3>value is {value}</h3>
    </div>
  )
}

export default memo(UpdateText)
