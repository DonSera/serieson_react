import styles from './Header.module.css'
import {getDetail, getHeaderKeys} from "../../function/getHeader";
import {useEffect, useState} from "react";

function Header({headerObj}) {
    const [headerKeys, setHeaderKeys] = useState([])
    const [headerDetail, setDetail] = useState([])

    const [colorH, setColorH] = useState([])
    const [colorD, setColorD] = useState([])

    useEffect(() => {
        console.log('obj')
        console.dir(headerObj)

        if(Object.keys(headerObj).length){
            setHeaderKeys(getHeaderKeys(headerObj));
            setDetail(getDetail(headerObj, getHeaderKeys(headerObj)[0]))
        }

        getHeaderKey()
        getDetailKey()
    }, [headerObj])

    useEffect(() => {
        getHeaderKey()
    }, [headerKeys])

    useEffect(() => {
        getDetailKey()
    }, [headerDetail])

    function getHeaderKey(){
        if (headerKeys.length) {
            const newArray = Array(1).fill(true)
            const newArray1 = newArray.concat(Array(headerKeys.length - 1).fill(false))
            setColorH(newArray1)
        }
    }

    function getDetailKey(){
        if (headerDetail.length) {
            const newArray = Array(1).fill(true)
            const newArray2 = newArray.concat(Array(headerDetail.length - 1).fill(false))
            setColorD(newArray2)
        }
    }


    function onChange(index, fuc) {
        if (fuc === "H") {
            const newColorArray = Array(headerKeys.length).fill(false);
            newColorArray[index] = true;
            setColorH(newColorArray)

            setDetail(getDetail(headerObj, headerKeys[index]))

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
                        headerKeys.map((text, index) => <li key={`header_text_${index}`}
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