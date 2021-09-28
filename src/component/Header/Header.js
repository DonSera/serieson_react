import styles from './Header.module.css'
import {getName} from "../../function/getHeader";
import {useEffect, useState} from "react";
import {publish, subscribe} from "../../function/PubSub";

function Header({headerObj, type = 'PC'}) {
    const [trueIndex, setTrueIndex] = useState([0, 0])
    const [listMo, setListMo] = useState([])
    const [listInner, setListInner] = useState([])

    const [colorH, setColorH] = useState([])
    const [colorD, setColorD] = useState([])

    useEffect(() => {
        if (Object.keys(headerObj).length) {
            const headerText = getName(headerObj['headerList'], 'header')
            setListMo(headerText)
            setListInner(getName(headerObj['headerList'][0]['detailList'], 'detail'))
        }
        subscribe('synchronization', setTrueIndex)
        // setBooleanInit()
    }, [headerObj])

    useEffect(() => {
        setBooleanInit()
        console.log('use effect')
    }, [listInner, trueIndex])


    function setBooleanInit() {
        if (listMo.length && listInner.length) {
            const moArray = Array(listMo.length).fill(false)
            moArray[trueIndex[0]] = true;
            setColorH(moArray)

            const innerArray = Array(listInner.length).fill(false)
            innerArray[trueIndex[1]] = true;
            setColorD(innerArray)
        }
    }

    function onChange(index, fuc) {
        const copy = trueIndex;
        if (fuc === "H") {
            copy[0] = index
            copy[1] = 0
            // setTrueIndex(copy)
            publish('synchronization', copy)
            setListInner(getName(headerObj['headerList'][index]['detailList'], 'detail'))
        } else if (fuc === "D") {
            copy[1] = index
            // setTrueIndex(copy)
            publish('synchronization', copy)
            // setBooleanInit()
        }
        console.log('check publish true index '+ trueIndex)
    }

    function render() {
        if (type === 'PC') {
            return (
                <div id={styles['headerWarp']}>
                    <div id={styles['logo']} className={styles['pc']}>
                        <a href={"https://www.naver.com/"}>Naver</a>
                        <span>SERIES_on</span>
                        <span>로그인</span>
                        <span>메뉴</span>
                    </div>

                    <div className={styles[`divider`]}/>
                    <div id={styles['category']} className={styles['pc']}>
                        <ul>
                            {
                                listMo.map((text, index) => <li key={`header_text_${index}`}
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
                    <div id={styles['detail']} className={styles['pc']}>
                        <ul>
                            {
                                listInner.map((text, index) => <li key={`detail_text_${index}`}
                                                                   style={{color: colorD[index] ? "green" : ""}}
                                                                   onClick={() => onChange(index, "D")}>{text}</li>)
                            }
                        </ul>
                    </div>
                    <div className={styles[`divider`]}/>
                </div>

            )
        } else if (type === 'Mobile') {
            return (
                <div id={styles['headerWarp']}>
                    <div id={styles['logo']} className={styles['mobile']}>
                        <a href={"https://www.naver.com/"}>Naver</a>
                        <span>시리즈온</span>
                        <span>로그인</span>
                        <span>메뉴</span>
                    </div>

                    <div className={styles[`divider`]}/>
                    <div id={styles['category']} className={styles['mobile']}>
                        <ul>
                            {
                                listMo.map((text, index) => <li key={`header_text_${index}`}
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
                    <div id={styles['detail']} className={styles['mobile']}>
                        <ul>
                            {
                                listInner.map((text, index) => <li key={`detail_text_${index}`}
                                                                   style={{color: colorD[index] ? "green" : ""}}
                                                                   onClick={() => onChange(index, "D")}>{text}</li>)
                            }
                        </ul>
                    </div>
                    <div className={styles[`divider`]}/>
                </div>
            )
        }
    }

    return render();
}

export default Header;