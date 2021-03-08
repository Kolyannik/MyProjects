function max(...all){
    let x = all[0]
    for (i = 0; i < all.length; i++){
        if (x<all[i]){x = all[i]}
    }
    return x
}

function min(...all){
    let x = all[0]
    for (i = 0; i < all.length; i++){
        if (x>all[i]){x = all[i]}
    }
    return x
}

function avg(...all){
    let y = 0, x
    for (i = 0; i < all.length; i++){
        y += all[i]
    }
    x = y/all.length
    return x
}