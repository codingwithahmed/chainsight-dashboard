import React, { useEffect, useState } from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import Select from 'react-select'
import DataState from '../../state/Data'
import {useRecoilState} from 'recoil'
import TokenListing from '../TokenListing/TokenListing'

const TokenAnalyzer = () => {

  const [options, setOptions] = useState(
    [/* 
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' } */
    ])

  const [selectedOption, setSelectedOption] = useState('')  
  const [tokenData, setTokenData] = useState('')
  const [dataLoaded, setDataLoaded] = useState(false)
  const [data, setData] = useRecoilState(DataState)

useEffect(() => {

  /* listTokens() */

  console.log(Object.keys(data).length)
  if (Object.keys(data).length > 0) {
    console.log(formatData(data))
    setOptions(formatData(data))
  }


}, [])

  
const formatData = (state) => {

  if (options.length < 10) {
      
    console.log(state.tokens)

    let result = []

    state.tokens.map((item, index) => {
    result.push({
      value: item.tokenInfo.address,
      label: item.tokenInfo.name,
      index: index
    })
  })

  return result

}
}


const analyzeToken =  () => {
  setTokenData(data.tokens[selectedOption.index])
  console.log(data.tokens[selectedOption.index])
  setDataLoaded(true)

}


const InputForm = () => {
  return (
    <ContentContainer>  
      <h1 className='font-bold text-xl text-center w-[95%]'>
        Select a token to analyze
      </h1>
      <Select className='rounded-lg w-[225px] lg:w-[400px] mt-4  border-2' options={options}  value={selectedOption} onChange={(v) => setSelectedOption(v)} />
      <button className='mt-6 bg-slate-900 hover:bg-slate-700 rounded-lg text-white px-6 py-2 w-[200px]' onClick={analyzeToken}>Analyze Token</button> 
      <h1>{tokenData.address}</h1>
    </ContentContainer> 
  )
}


  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
    {dataLoaded ? <TokenListing token={tokenData} /> : <InputForm />}
  </div>
  )
}

export default TokenAnalyzer