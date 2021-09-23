import styles from './Header.module.css'

function Header() {
    return (
        <div id={styles['headerWarp']}>
            <div id={styles['logo']}>
                <a id={'naver'} href={"https://www.naver.com/"}>Naver</a>
                <span id={'series'}>SERIES_on</span>
                <span id={'login'}>로그인</span>
                <span id={'menu'}>메뉴</span>
            </div>

            <div className={styles[`divider`]}/>
            <div id={styles['category']}>
                <ul>
                    <li>영화</li>
                    <li>방송</li>
                    <li>장르.소설 만화</li>
                    <span>
                        <span>My</span>
                        <span>장바구니</span>
                        <span>검색</span>
                    </span>
                </ul>
            </div>

            <div className={styles[`divider`]}/>
            <div id={styles['detail']}>
                <ul>
                    <li>영화홈</li>
                    <li>카테고리</li>
                    <li>인기순위 Top100</li>
                    <li>이벤트</li>
                    <li>무료</li>
                    <li>천원관</li>
                    <li>구매혜택</li>
                </ul>
            </div>
            <div className={styles[`divider`]}/>
        </div>
    );
}

export default Header;