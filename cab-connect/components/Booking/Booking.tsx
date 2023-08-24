import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'

function Booking() {

    // const screenHeight = window.innerHeight;
    const screenHeight = '100*0.72vh'

  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className='border-[1px] border-black p-5 rounded-md' style={{height:screenHeight}} >
            <AutocompleteAddress />
        </div>
        
    </div>
  )
}

export default Booking