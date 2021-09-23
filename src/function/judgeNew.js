function judgeNew(obj) {
    const today = new Date();

    const openDate = obj['info']['open'];
    const diffDate = new Date(openDate);

    const sinceOpenDay = (today-diffDate)/(1000 * 3600 * 24);

    return sinceOpenDay > 30;
}

export default judgeNew;