import React from 'react'

function EthAmount() {
  return (
    <div className='flex w-full h-[38px] md:h-[47px]'>
        <input
        type='number'
        placeholder='enter amount'
        className='bg-[#FFFFFF] w-[90%] p-2 text-l md:text-xl text-center'
        />

        <button 
            className='bg-[#FFFFFF] font-envy text-l md:text-2xl text-[#696969] border-solid border-l-[1px] border-l-[black] p-1 md:p-2 '
        >
          ETH
        </button>
      </div>
  )
}

export default EthAmount