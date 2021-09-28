import styles from './Footer.module.css'

function Footer() {
    const footerInfo = [
        `시리즈온에서 판매되는 콘텐츠의 저작권은 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 처벌될 수 있습니다.`,
        `사업자등록번호 669-86-01888 통신판매업 신고번호 2020-성남분당B-0719 (사업자정보 확인) 대표이사 김준구`,
        `주소 경기도 성남시 분당구 분당내곡로 117, 9층 (백현동, 크래프톤 타워) 고객센터 1588-3820 이메일 ccnaver@naver.com`,
        `© NAVER WEBTOON Limited`
    ]

    return (
        <div id={styles[`footerWrap`]}>
            {footerInfo.map((text, index) => <div key={`footer_info_${index}`}>{text}</div>)}
        </div>
    )

}

export default Footer;