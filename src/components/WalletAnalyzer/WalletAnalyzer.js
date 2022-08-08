 import React, { useState } from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import {getRequest} from '../../services/Chainsight'
import DataState from '../../state/Data'
import {useRecoilState} from 'recoil'
import WalletLisitng from '../WalletListing/WalletLisitng'

const WalletAnalyzer = () => {


  const [walletAddress, setWalletAddress] = useState('')
  const [data, setData] = useRecoilState(DataState)
  const [dataLoaded, setDataLoaded] = useState(false)


  const analyzeWallet = async () => {
    try {

      const response = await getRequest('wallet/analyze', {address: walletAddress})

      console.log(response)
      setData(response)
      setDataLoaded(true)

    } catch(err){

      console.log(err)

    }
  }


  const InputForm = () => {
    return (
      <ContentContainer>
      <h1 className='font-bold text-xl text-center w-[95%]'>
        Enter a wallet address to analyze
      </h1>
      <input className='bg-slate-50 rounded-lg w-[225px] lg:w-[400px] px-4 py-2 mt-4 border-slate-100 border-2' type={'text'} placeholder={'Wallet address'} 
      value={walletAddress} onChange={(e) => {setWalletAddress(e.target.value)}} />
      <button className='mt-6 bg-slate-900 hover:bg-slate-700 rounded-lg text-white px-6 py-2 w-[200px]' onClick={() => analyzeWallet()}>Analyze Wallet</button> 
      <h1>{}</h1>
    </ContentContainer>
    )
  }
  

 
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
      {
        dataLoaded ? <WalletLisitng wallet={data} /> : <InputForm />
      }
    </div>
  )
}

export default WalletAnalyzer