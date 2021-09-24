import styles from './Header.module.css'
import {useEffect, useState} from "react";

function Header({header, headerDetail}) {
    const [colorH, setColorH] = useState([])
    const [colorD, setColorD] = useState([])

    useEffect(() => {
        if(header.length){
            const newArray1 = Array(1).fill(true).concat(Array(header.length - 1).fill(false))
            setColorH(newArray1)
        }
    }, [header])

    useEffect(() => {
        if(headerDetail.length){
            const newArray2 = Array(1).fill(true).concat(Array(headerDetail.length - 1).fill(false))
            setColorD(newArray2)
        }
    }, [headerDetail])


    function onChange(index, fuc) {
        if (fuc === "H") {
            const newColorArray = Array(header.length).fill(false);
            newColorArray[index] = true;
            setColorH(newColorArray)
        } else if (fuc === "D") {
            const newColorArray = Array(headerDetail.length).fill(false);
            newColorArray[index] = true;
            setColorD(newColorArray)
        }
    }

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
                        header.map((text, index) => <li key={`header_text_${index}`}
                                                        style={{backgroundColor: colorH[index] ? "green" : ""}}
                                                        onClick={() => onChange(index, "H")}>{text}</li>)
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
                        headerDetail.map((text, index) => <li key={`detail_text_${index}`}
                                                              style={{color: colorD[index] ? "green" : ""}}
                                                              onClick={() => onChange(index, "D")}>{text}</li>)
                    }
                </ul>
            </div>
            <div className={styles[`divider`]}/>
        </div>
    );
}

export default Header;