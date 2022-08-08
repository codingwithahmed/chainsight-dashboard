import React,{
  useEffect,
  useState,
  useCallback
} from 'react'
import { getRequest } from '../../services/Chainsight'
import Table from '../Table'
import config from '../../config.json'
import axios from 'axios'



const Wrapper =({children}) => {
  return <div className='p-4 w-[95%] bg-white flex flex-col'>
      {children}
  </div>
}


const Bar = ({
  per,
  txt,
  blue
}) =>
 {

   
  
    return <div className='flex flex-row justify-start items-center'>
        <p className='mr-5'>${txt}</p>
        <div className='relative bg-slate-200 w-36 rounded-lg h-1'>
           
           
           {
            blue ? <div style={{
              width: per+'%'
            }} className={`bg-blue-600 top-0 bottom-0 left-0 right-0 absolute rounded-lg h-1`} >

            </div> : <div style={{
              width: per+'%'
            }} className={`bg-green-600 top-0 bottom-0 left-0 right-0 absolute rounded-lg h-1`} >

            </div>
           }

            
        </div>
    </div>
}


const TrendingContracts = () => {

  const [data,setData] = useState([])


  const getData = useCallback ( async () => {

    let response = await axios({
      method: 'get',
      baseURL: config.base_url,
      url: "http://localhost:4545/trendingcontracts/",
      headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('access_token')
      }
  })

  var res = await response.data
  res = await JSON.parse(res)
  console.log("Response ",res)

  res =  catData(res.tokens)

  console.log("Catogrized Response ",res)

  
  setData(res)

  },[])

  useEffect(() => {

   /* const getData = async () => {
      
      


    return await response.data
      
    }*/

    getData()

    setData(catData(data))

    /*const tmp =  getData()

    let p

   tmp.then(async(x) => {
      console.log(x)
      p = catData(x)

      
      console.log("DATA LOADED\n")
      console.log(p)

    }).catch(e => console.log(e)) 
*/
    /*const s = async (tmp,setData) => {
      const x = await tmp
      let res = catData(x)
      setData(res)
    }

    s(tmp,setData)
    console.log(s)*/

    /* setData(p)
    
    console.log("AFTER P : ",data) */
            
  },[getData])


  function shortenVal (das) {
      console.log("SHORTEND DATA ",das)
  }
 
 function catData (data) {
  console.log( data)
  let tmp =  data

  let x = []

  for (let index = 0; index < tmp.length; index++) {
    const element = tmp[index];
    const totalVloumeDiffernece= element.price.volDiff7 + element.price.volDiff24h + element.price.volDiff1 + element.price.volDiff30  ;
    x[index] = [
      element.address, <Bar txt={String(element.price.volDiff7)} per={element.price.volDiff7/totalVloumeDiffernece} blue={false} /> ,<Bar txt={String(element.price.volDiff1)} per={element.price.volDiff24h/totalVloumeDiffernece} blue={true} />,element.price.bid * element.totalSupply , element.holdersCount,element.price.rate,element.transfersCount
    ]
  }

  console.log("X ",x)


  return x
}
    



  return (
    <div className='flex flex-col  p-4  justify-center' onLoadStart={getData}>
      <h1 className='text-2xl font-bold'>Trending Contracts</h1>
      <div className='p-4 flex-col flex'>
          
          <Wrapper>
            {
              /*
<div className='flex flex-row'>
                  <p className='text-md font-bold'>Max Contract Age:  <input placeholder='7' className='border-2 border-black pl-2  w-[55px]' type={'number'} /> days </p>
              </div>
              */
            }  
              <div class="relative py-3 overflow-x-auto w-[70vw] sm:rounded-lg max-h-[70vh]">
              <Table    columns={ Array.isArray(data)  ? data : [[]] }  
                        headers={  ['Name','Inflow (7 days)','Inflow (1 day)','Token Balance (USD)', 'Total Depositers','Rate','Transfer Count']} 
                        />
                </div>

          </Wrapper>
      </div>
    </div>
  )
}

export default TrendingContracts  