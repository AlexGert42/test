export const singleGameAction = (field, index, player, bot) => {
    field[index[0]][index[1]].player = player

    analisis(field, index, player, bot)

    return field
}


const analisis = (field, index, player, bot) => {
    let y = 0
    let x = 0
    let z = 0
    let rz = 0
    console.log('field', field);
    let count = 0
    
    let newArry = new Array(15).fill(new Array(15).fill(0))
    field.map((line, il )=> line.map((cell, ic) => {
        
        if (cell.player === player) {
            newArry[cell.indexLine][cell.indexCell] = player
        } 
        if ( cell.player === bot) {
            newArry[il][ic] = bot
        }
    }))
    // while (count >= 5) {
    //     newArry[index[0] + count][index[1]] = player
    //     count++
    //     x++
    // }
    console.log(newArry);
}