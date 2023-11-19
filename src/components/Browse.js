import Header from './Header'
import MainVideoContainer from './MainVideoContainer'
import VideoListsContainer from './VideoListsContainer';

const Browse = () => {
  
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <MainVideoContainer/>
      <VideoListsContainer/>
    </div>
  )
}

export default Browse