import React from 'react'

const TrackingButton = (Component) => {
  return (props)=>{
    console.log("Hoc tracking")
    const handleClick = ()=>{
        console.log("Logged in fetch the tack info",props.trackingInfo)
    }

    return(
        <div onClick={handleClick}>
        Customer<input/>
        <Component {...props}/>
        </div>
      )
  }
  
}

export default TrackingButton
