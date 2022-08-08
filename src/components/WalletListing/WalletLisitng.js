import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const WalletLisitng = ({wallet}) => {

  const [tableRows, setTableRows] = useState([
    {
      name: 'T3st Token', 
      amount: '1234214',
      price: '10.647$',
      value: '17800$'
    }
  ])

    useEffect(() => {
        console.log(wallet)
    }, [])

const etherValue = (amount) => {
  return wallet.ETH.price.rate * amount
}
    
  return (
                   <div className='z-[1] py-6 bg-white m-0 w-[100%] h-[100%] p-6'>
            <h1 className=' pb-6  flex items-baseline w-full'><span className='text-2xl text-slate-900 font-bold mr-2'>Address:</span><span className='text-md text-slate-400 uppercase'>{wallet.address}</span></h1>
            <div className='self-start w-full'>
              <div className='flex items-baseline'>
                <h1 className='font-bold text-xl mb-6'>Overview</h1>
                </div>
              <div className='flex justify-between mb-2 items-baseline p-3 border-2 border-slate-200 rounded-md'>
                <h2 className='font-bold'>Balance:&nbsp;</h2>
                <span className='italic cursor-pointer hover:text-slate-300 font-bold text-sm'>{wallet.ETH.balance ?  wallet.ETH.balance : '' } {' Ether'}</span>
              </div>
              <div className='flex justify-between mb-2 items-baseline p-3 border-2 border-slate-200 rounded-md'>
                <h2 className='font-bold'>Ether Value:&nbsp;</h2>
                <span className='italic cursor-pointer hover:text-slate-300  font-bold text-sm'>{'$' + etherValue(wallet.ETH.balance) + ' (@' + wallet.ETH.price.rate + '$/ether)'}</span>
              </div>
              <div className='flex justify-between mb-2 items-baseline p-3 border-2 border-slate-200 rounded-md'>
                <h2 className='font-bold'>Tokens:&nbsp;</h2>
                <span className='italic font-bold hover:text-slate-300  text-sm cursor-pointer'>{wallet.ETH.balance + ' Ether'}</span>
              </div>
            </div>
            <h1 className='py-6 flex items-baseline w-full text-2xl text-slate-900 font-bold mr-2'>Top Tokens</h1>
            <MDBTable>
              <MDBTableHead>
              <tr>
                <th className=' border-2 border-slate-300 px-6 py-2'>Token Name</th>
                <th className=' border-2 border-slate-300 px-6 py-2'>Amount</th>
                <th className=' border-2 border-slate-300 px-6 py-2'>Price</th>
                <th className=' border-2 border-slate-300 px-6 py-2'>Value</th>
              </tr>
              </MDBTableHead>
              <MDBTableBody>
            {
              wallet.tokens.map((item, index) => {
                  if (index < 10) {
                    return (
                      <tr>
                        <td className='border-2 border-slate-200 px-6 py-2'>{item.tokenInfo.name}</td>
                        <td className='border-2 border-slate-200 px-6 py-2'>{item.balance}</td>
                        <td className='border-2 border-slate-200 px-6 py-2'>{item.tokenInfo.price.rate ? item.tokenInfo.price.rate + '$' : 'Not Determiined'}</td>
                        <td className='border-2 border-slate-200 px-6 py-2'>{item.tokenInfo.price.rate ? item.tokenInfo.price.rate * item.balance + '$': 'Not Determiined'}</td>
                      </tr>
                    )
                  }
              })
            }
            </MDBTableBody>
              </MDBTable>
        </div>
  )
}

export default WalletLisitng