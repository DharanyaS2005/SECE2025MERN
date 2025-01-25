import React from 'react'
import Button from "./Button"
import TrackingButton from './TrackingButton'

const HoC = () => {
    const ButtonWithTracking=TrackingButton(Button)
  return (
    <div>
        <h2>this is example of HoC</h2>
        <ButtonWithTracking name="Login" trackingInfo={{customerId:"dharanya",password:"123"}}/>
    </div>
  )
}

export default HoC
