import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import Select from 'react-select'

const TokenAnalyzer = () => {

  
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
    <ContentContainer>
      <h1 className='font-bold text-xl text-center w-[95%]'>
        Select a token to analyze
      </h1>
      <Select className='rounded-lg w-[225px] lg:w-[400px] mt-4  border-2' options={options} />
      <button className='mt-6 bg-slate-900 hover:bg-slate-700 rounded-lg text-white px-6 py-2 w-[200px]'>Analyze Token</button> 
    </ContentContainer>
</div>
  )
}

export default TokenAnalyzer