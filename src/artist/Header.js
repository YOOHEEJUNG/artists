import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '../css/Header.module.css'; //css모듈로 디자인

const Header = () => {

    return(
        <Fragment>
            <header className={styled.wrap}>
                <h3>Y4J Ent</h3>
                <ul className={styled.wrap_list}>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Artist</li>
                    <li>Product</li>
                    <li>Audition</li>
                </ul>
                <div>
                    <button>로그인</button>
                    <button>장바구니</button>
                </div>
            </header>

            <section>
                {/* 헤더 하위의 아울렛 표현 */}
                <Outlet/>
            </section>
            </Fragment>
    )

}
export default Header;