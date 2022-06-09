import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'

const Home = () => {
  return (
        <div className='video-container flex justify-center items-center h-[100vh]'>
        <ContentContainer>
            <h1 className='text-center text-xl font-bold'>
                Welcome to Chainsight.
            </h1>
            <p className='text-center text-gray-400 mb-6'>See how you make your first trade with our cutting edge platform.</p>
            <iframe className='hidden lg:block' width="560" height="315" src="https://www.youtube.com/embed/NiYEOJkwsak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className='lg:hidden' width="250" height="200" src="https://www.youtube.com/embed/NiYEOJkwsak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className='text-center text-gray-400 text-sm mt-6'>Watch more <span className='text-gray-900 cursor-pointer'>training videos</span>. Add <span className='text-gray-900 cursor-pointer'>join discord</span> group</p>
        </ContentContainer>
       </div>
  )
}

export default Home