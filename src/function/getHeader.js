export function getName(list, type){
    if(type === 'header'){
        return list.map(obj => obj['headerName'])
    }

    if(type === 'detail'){
        return list.map(obj => obj['detailName'])
    }
}