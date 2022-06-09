import React from 'react'

const ContentContainer = ({children}) => {
  return (
    <div className='p-12 max-w-[75%] bg-white items-center flex flex-col'>
        {children}
    </div>
  )
}

export default ContentContainer