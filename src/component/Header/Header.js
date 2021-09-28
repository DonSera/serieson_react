import styles from './Header.module.css'
import {getName} from "../../function/getHeader";
import {useEffect, useState} from "react";
import {subscribe} from "../../function/PubSub";

function Header({headerObj, type = 'PC'}) {
    const [selectIndex, setSelectIndex] = useState([0, 0])
    const [category, setCategory] = useState([])
    const [detail, setDetail] = useState([])

    const [colorH, setColorH] = useState([])
    const [colorD, setColorD] = useState([])

    useEffect(() => {
        setDetailText(selectIndex[0])
    }, [selectIndex])

    useEffect(() => {
        setBooleanInit()
    }, [category, detail])

    useEffect(() => {
        if (Object.keys(headerObj).length) {
            const headerText = getName(headerObj['headerList'], 'header')
            setCategory(headerText)
            setDetailText(0)
        }
        subscribe('set-header-true-index', setSelectIndex)
    }, [headerObj])

    function setBooleanInit() {
        if (category.length && detail.length) {
            const moArray = Array(category.length).fill(false)
            moArray[selectIndex[0]] = true;
            setColorH(moArray)

            const innerArray = Array(detail.length).fill(false)
            innerArray[selectIndex[1]] = true;
            setColorD(innerArray)
        }
    }

    function setDetailText(index) {
        if (Object.keys(headerObj).length) {
            setDetail(getName(headerObj.headerList[index].detailList, 'detail'))
        }
    }

    function onChange(index, fuc) {
        const copy = selectIndex.slice();
        if (fuc === "H") {
            copy[0] = index
            copy[1] = 0
        } else if (fuc === "D") {
            copy[1] = index
        }
        setSelectIndex(copy)
    }

    function render() {
        return (
            <div id={styles['headerWarp']}>
                <section id={styles['logo']} className={styles['width-change']}>
                    <a href={"https://www.naver.com/"}>Naver</a>
                    {type === 'PC' ? <span>SERIES_on</span> : <span>시리즈온</span>}
                    <span>로그인</span>
                    <span>메뉴</span>
                </section>

                <div className={styles[`divider`]}/>
                <section id={styles['category']} className={styles['width-change']}>
                    <ul>
                        {
                            category.map((text, index) => <li key={`header_text_${index}`}
                                                              style={{backgroundColor: colorH[index] ? "green" : ""}}
                                                              onClick={() => onChange(index, "H")}>{text}</li>)
                        }
                        <span>
                        <span>My</span>
                        <span>장바구니</span>
                        <span>검색</span>
                    </span>
                    </ul>
                </section>

                <div className={styles[`divider`]}/>
                <section id={styles['detail']} className={styles['width-change']}>
                    <ul>
                        {
                            detail.map((text, index) => <li key={`detail_text_${index}`}
                                                            style={{color: colorD[index] ? "green" : ""}}
                                                            onClick={() => onChange(index, "D")}>{text}</li>)
                        }
                    </ul>
                </section>
                <div className={styles[`divider`]}/>
            </div>
        )
    }

    return render();
}

export default Header;