import { Link, Outlet } from "react-router-dom";

const ArtistHome = () => {

    return(
        <>
        <section>
            <div>
                <h3>Artist</h3>
                <ul>
                    <li><Link to='/artist/artistList'>전체</Link></li>
                    <li><Link to='/artist/artistList'>가수</Link></li>
                    <li><Link to='/artist/artistList'>배우</Link></li>
                </ul>
            <Outlet/>
            </div>
        </section>
        </>
    )

}

export default ArtistHome;