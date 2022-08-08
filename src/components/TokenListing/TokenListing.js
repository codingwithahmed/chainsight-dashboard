import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const TokenListing = ({token}) => {
  console.log("TOKEN -> Retrived ",token)
  const [tableRows, setTableRows] = useState([
    {
      name: 'T3st Token', 
      amount: '1234214',
      price: '10.647$',
      value: '17800$'
    }
  ])


  return (
    <div>



        <div className='bg-white p-4'>

        <div className='self-start w-full'>
              <div className='flex items-baseline'>
                <h1 className='font-bold text-xl mb-6'>Overview</h1>
                </div>
              <div className='flex justify-between mb-2 items-baseline p-3 border-2 border-slate-200 rounded-md'>
                <h2 className='font-bold'>Name:&nbsp;</h2>
                <span className='italic cursor-pointer hover:text-slate-300 font-bold text-sm'>{token.tokenInfo.name}</span>
              </div>
              <div className='flex justify-between mb-2 items-baseline p-3 border-2 border-slate-200 rounded-md'>
                <h2 className='font-bold'>Avaiable Supply:&nbsp;</h2>
                <span className='italic cursor-pointer hover:text-slate-300  font-bold text-sm'>{token.tokenInfo.price.availableSupply ? token.tokenInfo.price.availableSupply : 'Not Avaiable'}</span>
              </div>
              <div className='flex justify-between mb-2 items-baseline p-3 border-2 border-slate-200 rounded-md'>
                <h2 className='font-bold'>Price:&nbsp;</h2>
                <span className='italic font-bold hover:text-slate-300  text-sm cursor-pointer'>{token.tokenInfo.price.rate ? token.tokenInfo.price.rate + '$': 'Not Determiined'}</span>
              </div>
            </div>

              <h1 className=' pb-6  flex items-baseline w-full'><span className='text-2xl text-slate-900 font-bold mr-2'>Address:</span><span               className='text-md text-slate-400 uppercase'>{token.tokenInfo.address}</span></h1>
                          

              <MDBTable>
              <MDBTableHead>
              <tr>
                <th className=' border-2 border-slate-300 px-6 py-2'>VolDiff (24 Hours)</th>
                <th className=' border-2 border-slate-300 px-6 py-2'>VolDiff (7 days)</th>
                <th className=' border-2 border-slate-300 px-6 py-2'>VolDiff (30 days)</th>
                <th className=' border-2 border-slate-300 px-6 py-2'>VolDiff (1 year)</th>
              </tr>
              </MDBTableHead>
              <MDBTableBody>
           
                      <tr>
                        <td className='border-2 border-slate-200 px-6 py-2'>{token.tokenInfo.price.volDiff1 ? token.tokenInfo.price.volDiff1  : 'Not Determiined'}</td>
                        <td className='border-2 border-slate-200 px-6 py-2'>{token.tokenInfo.price.volDiff7 ? token.tokenInfo.price.volDiff7  : 'Not Determiined'}</td>
                        <td className='border-2 border-slate-200 px-6 py-2'>{token.tokenInfo.price.volDiff30 ? token.tokenInfo.price.volDiff30 : 'Not Determiined'}</td>
                        <td className='border-2 border-slate-200 px-6 py-2'>{token.tokenInfo.price.volume24h ? token.tokenInfo.price.volume24h  : 'Not Determiined'}</td>
                      </tr>
                    
            </MDBTableBody>
              </MDBTable>


              
          
        </div>
    </div>
  )
}

export default TokenListing