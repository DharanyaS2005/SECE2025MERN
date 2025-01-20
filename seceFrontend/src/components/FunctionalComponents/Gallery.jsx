import React from 'react'

const Gallery = (props) => {
  return (
    <div>
      <h4>welcome to {props.page} Page</h4>
      <img src="time.png"alt=""  />  
        <h2>the image is{props.image}</h2>
    </div>
  )
}

export default Gallery;