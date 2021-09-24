import styles from './Header.module.css'

function Header({header, headerDetail}) {

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
                    {
                        header.map((text,index) => <li key={`header_text_${index}`}>{text}</li>)
                    }
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
                    {
                        headerDetail.map((text,index) => <li key={`detail_text_${index}`}>{text}</li>)
                    }
                </ul>
            </div>
            <div className={styles[`divider`]}/>
        </div>
    );
}

export default Header;