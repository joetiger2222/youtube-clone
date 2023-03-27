import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import Channel from './Channel';
import VideoDetails from './VideoDetails';
import Search from './Search';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/'element={<HomePage/>} />
        <Route path='/Channel/:channelId' element={<Channel/>} />
        <Route path='/VideoDetails/:videoId' element={<VideoDetails/>} />
        <Route path='/Search' element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
