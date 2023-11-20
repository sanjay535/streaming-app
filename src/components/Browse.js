import Footer from './Footer';
import Header from './Header'
import MainVideoContainer from './MainVideoContainer'
import VideoListsContainer from './VideoListsContainer';

const Browse = () => {
  
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <MainVideoContainer/>
      <VideoListsContainer/>
      <Footer/>
    </div>
  )
}

export default Browse