import Footer from './Footer';
import MainVideoContainer from './MainVideoContainer'
import VideoListsContainer from './VideoListsContainer';
import Header from './shared/Header';

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