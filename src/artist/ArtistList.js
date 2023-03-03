import { Link } from "react-router-dom";


const ArtistList = () => {

    return (
        <>
            <ul>
                <li><Link to='/artist/artistDetail'>이미지</Link></li>
                <li><Link to='/artist/artistDetail'>이미지</Link></li>
                <li><Link to='/artist/artistDetail'>이미지</Link></li>
                <li><Link to='/artist/artistDetail'>이미지</Link></li>
                <li><Link to='/artist/artistDetail'>이미지</Link></li>
                <li><Link to='/artist/artistDetail'>이미지</Link></li>
            </ul>
        </>
    )
}

export default ArtistList;