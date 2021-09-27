function judgeNew(date) {
    const today = new Date();

    const diffDate = new Date(date);

    const sinceOpenDay = (today-diffDate)/(1000 * 3600 * 24);

    return sinceOpenDay < 35;
}

export default judgeNew;