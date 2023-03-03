import styled from '../css/Footer.module.css'; //css모듈로 디자인

const Footer = () => {

    return(
        <footer className={styled.wrap}>
            <div>
                Y4J ENTERTAINMENT의 모든 컨텐츠는 저작권의 보호를 받고 있습니다<br/>
                © Y4J ENTERTAINMENT Corp.
            </div>
        </footer>
    )
}
export default Footer;