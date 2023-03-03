import { Link, Outlet } from "react-router-dom";


const ArtistDetailAlbum = () => {


    return(
        <>
             <ul>
                <li><Link to='/artist/artistDetail/album/content'>앨범</Link></li>
            </ul>

            <Outlet/>
        </>
    )
}

export default ArtistDetailAlbum;