import React from 'react'
import PopularVideoList from './PopularVideoList'

const VideoListsContainer = () => {
  return (
    <div className='w-screen bg-black pb-8'>
      <div className='-mt-56 z-20 relative'>
        <PopularVideoList title={'Now Playing'}/>
      </div>
      <PopularVideoList title={'Trending Movies in India Today'}/>
      <PopularVideoList title={'Upcoming Movies'}/>
      <PopularVideoList title={'Top Search'}/>
    </div>
  )
}

export default VideoListsContainer