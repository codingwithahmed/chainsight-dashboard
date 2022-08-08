import React, { useCallback, useState } from 'react'
import Table from '../Table'
import {getRequest, postRequest} from '../../services/Chainsight'
import { useEffect } from 'react'
import axios from 'axios'
import { catogrizedDataRichListPortfolio, catogrizedDataRichListSummary } from '../utils/common'

const Wrapper =({children}) => {
  return <div className='p-4 w-[95%] bg-white flex flex-col'>
      {children}
  </div>
}


const RichList = () => {

  const [data,setData] = useState()
  const [tab,Tabset] = useState(1)
  const [portfolioData,setPortfolioData] = useState()



  useEffect(() => {

    const getData = async () => {
        let tmp = await getRequest('/richlist')
        const response = await getRequest('wallet/analyze', {address: window.localStorage.getItem('address')  ? window.localStorage.getItem('address') : "0xff71cb760666ab06aa73f34995b42dd4b85ea07b"})
        console.log(tmp)
        console.log("Wallet Data : ",response)
        setData( catogrizedDataRichListSummary(tmp.tokens))
        setPortfolioData(catogrizedDataRichListPortfolio(response))
       
    }
    
    
      getData()
    
    
  },[])


 


   

  return (
    <>

        <div className='p-4 flex flex-col'>
              
              <div className='flex flex-row py-3'>
                  <div className='py-1 px-3 text-lg font-bold rounded-full bg-black text-white'>
                      $
                  </div>
                  <p className='py-1 px-3 text-xl font-sans font-medium'>RichList</p>
              </div>

            <div className='flex flex-row border-b-2'>
                
                <div className='flex relative rl mr-2 px-2 py-3 cursor-pointer  underline-offset-2 flex-row justify-between items-center text-slate-400 hover:text-black' onClick={() => {
                  Tabset(1)
                  
                  }}>
                <p className='pr-2'><img 
                      className='w-[25px]' 
                      src='/Icons/stack.png'
                      alt='summary' 
                      /></p>
                    
                    <p>Summary</p>
                </div>

                <div className='flex relative rl mx-2 px-2 py-3 cursor-pointer  underline-offset-2 flex-row justify-between items-center text-slate-400 hover:text-black' onClick={() => Tabset(2)}>
                <p className='pr-2'><img 
                      className='w-[25px]' 
                      src='/Icons/folder.png'
                      alt='folder' 
                      /></p>
                    
                    <p className=''>Portfolio</p>
                </div>





             {/*<div className='flex mx-2 px-2 border-b-2 py-3 cursor-pointer hover:border-black underline-offset-2 flex-row justify-between items-center'>
                <p className='pr-2'><img 
                      className='w-[25px]' 
                      src='/Icons/activity.png'
                      alt='activity' 
                      /></p>
                    
                    <p className='text-slate-400'>Activity</p>
                </div>*/}

            </div>

        </div>




        <div className='w-full h-[100vh] flex flex-col items-center'>



            {
              tab == 1 ? <Wrapper>
              <div className='flex flex-row justify-between items-center'>
                <p className='text-2xl font-bold'>Leaderboard</p>
                <p className='text-md text-slate-700 '>Last Updated: a hour ago</p>
              </div>

              <div class="relative py-3 overflow-x-auto md:w-[70vw] sm:rounded-lg max-h-[70vh]">
                <Table  columns={Array.isArray(data) ? data : [[]]}  
                        headers={  ['Address','Name','Holder Count','Supply']} 
                        />
            </div>
          </Wrapper>  : <Wrapper>
                  <div className='flex flex-row justify-between items-center'>
                    <p className='text-2xl font-bold'>Token Holding </p>
                    <p className='text-md text-slate-700 '>Last Updated: a hour ago</p>
                  </div>

                  <div class="relative py-3 overflow-x-auto md:w-[70vw] sm:rounded-lg max-h-[70vh]">
                    <Table  columns={Array.isArray(portfolioData) ? portfolioData : [[]]}  
                            headers={  ['Address','Name','Balance','Available Supply','Market Cap (USD)','Rate',"Volume Difference (24 hours)", "Volume Difference (7 Days)"]} 
                            />
                </div>
              </Wrapper> 
            }  





        </div>

    </>
  )
}

export default RichList