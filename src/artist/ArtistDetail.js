import { Link, Outlet, Route } from "react-router-dom";

const ArtistDetail = () => {


    return (
        <>
        <div>
        <h3>디테일 메뉴 - 가수 이름 적기</h3>
            <ul>
                <li><Link to='about'>소개</Link></li>
                <li><Link to='album'>앨범</Link></li>
                <li><Link to='schedule'>스케줄</Link></li>
            </ul>

            <Outlet/>

        </div>
        
        </>
    )
}

export default ArtistDetail;