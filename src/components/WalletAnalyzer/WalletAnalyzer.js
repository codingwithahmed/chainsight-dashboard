import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'

const WalletAnalyzer = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
        <ContentContainer>
          <h1 className='font-bold text-xl text-center w-[95%]'>
            Enter a wallet address to analyze
          </h1>
          <input className='bg-slate-50 rounded-lg w-[225px] lg:w-[400px] px-4 py-2 mt-4 border-slate-100 border-2' type={'text'} placeholder={'Wallet address'} />
          <button className='mt-6 bg-slate-900 hover:bg-slate-700 rounded-lg text-white px-6 py-2 w-[200px]'>Analyze Wallet</button> 
        </ContentContainer>
    </div>
  )
}

export default WalletAnalyzer