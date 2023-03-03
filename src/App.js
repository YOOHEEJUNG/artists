import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './artist/Header';
import ArtistHome from './artist/ArtistHome';

import ArtistDetail from './artist/ArtistDetail';
import ArtistDetailAbout from './artist/ArtistDetailAbout';
import ArtistDetailAlbum from './artist/ArtistDetailAlbum';
import ArtistDetailSchedule from './artist/ArtistDetailSchedule';
import ArtistList from './artist/ArtistList';
import ArtistDetailAlbum_content from './artist/ArtistDetailAlbum_content';

function App() {
  return (
  
    <Routes>
      <Route element={<Header/>}>

          <Route path='/artist' element={<ArtistHome/>}>
            
            <Route path='/artist/artistList' element={<ArtistList/>}></Route>
            
            <Route path='/artist/artistDetail' element={<ArtistDetail/>}>
              <Route path='/artist/artistDetail/about' element={<ArtistDetailAbout/>}></Route>

              <Route path='/artist/artistDetail/album' element={<ArtistDetailAlbum/>}>
                <Route path='/artist/artistDetail/album/content' element={<ArtistDetailAlbum_content/>}></Route>
              </Route>

              <Route path='/artist/artistDetail/schedule' element={<ArtistDetailSchedule/>}></Route>
            </Route>

          </Route>

            

      </Route>
        
    </Routes>

  );
}

export default App;
