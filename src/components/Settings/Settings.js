import React, { useState } from 'react'

const Settings = () => {
  const [address,setAddress] = useState('')

  return (
    <div className='flex flex-col  p-4  justify-center' >
        <h1 className='text-2xl font-bold'>Settings</h1>
        <div className='p-4 flex-col flex'>
                <div className='bg-white px-4 flex flex-col py-2 min-h-[50vh] w-[70vw]'>
                      

                      <div>
                         <h1>Address : {window.localStorage.getItem('address')}</h1>
                      </div>
                      
                      
                      <div className='border-2 my-4 px-4 py-2 flex flex-col md:flex-row border-slate-900'>
                        <p className='text-black font-bold mr-2 whitespace-nowrap'>Enter Wallet Address For Tracking   </p>
                          <input className='outline-none border-none w-full' onChange={(e) => {
                                setAddress(e.target.value)
                          }}/>
                      </div>

                      <div>
                          <button className='bg-slate-700 hover:bg-slate-900 px-8 text-white py-2 rounded-md' onClick={() => {
                            if(!window.localStorage.getItem('address')){
                              window.localStorage.setItem('address',address)
                            } else {
                              window.localStorage.removeItem('address')
                              window.localStorage.setItem('address',address)

                            }
                          }}>
                              Save
                          </button>
                      </div>
                </div>

                

        </div>
    </div>
  )
}

export default Settings