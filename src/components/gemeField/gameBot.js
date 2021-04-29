
export const singleGameAction = (field, index, player) => {
    console.log('single', player);
    const newField = field
    newField[index[0]][index[1]].weight = null
    newField[index[0]][index[1]].player = player

   

    
    let kefPlayer = movePlayer(newField, index, player)
    
    let weightPlayer = weightAnalysis(newField, index, 'X', kefPlayer)
    // let weightBot =  weightAnalysis(newField, index, 'O', kefPlayer)
    
    let moveBot = bot(weightPlayer)
    newField[moveBot.indexLine][moveBot.indexCell].player = "O"
    newField[moveBot.indexLine][moveBot.indexCell].weight = null
    let kefBot = movePlayer(newField, [moveBot.indexLine, moveBot.indexCell], 'O')
    let weightBot = weightAnalysis(newField, [moveBot.indexLine, moveBot.indexCell], 'O', kefBot)

    return newField
}


const bot = ( weightPlayer) => {
    let count = 0
    let index = {}
    weightPlayer.map(line => line.map(cell => {
        if ( cell.player != 'O' || cell.player != 'X') {
            if (cell.weight > count) {
                count = cell.weight
                index = cell
            }
        }
       
    }))
    console.log(index);
    return index
}

const weightAnalysis = (field, index, player, kef) => {
    const newField = [...field]
    let y = 0
    let x = 0
    let z = 0
    let rz = 0
    for (let i = 0; i < 7; i++) {
        //=====================================Y

        if (index[0] + i >= 0 && index[0] + i <= 14) {
            if (newField[index[0] + i][index[1]].player === player) {
                newField[index[0] + i][index[1]].weight = null
                y++
            } else {
                newField[index[0] + i][index[1]].weight += Number(
                    Math.round(10 / i * (kef.y - 1) * y)
                )
            }
        }

        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === player) {
                newField[index[0] - i][index[1]].weight = null
                y++
            } else {
                newField[index[0] - i][index[1]].weight += Number(
                    Math.round(10 / i * (kef.y - 1) * y)
                )
            }
        }

        //================================================== X

        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === player) {
                newField[index[0]][index[1] + i].weight = null
                x++
            } else {
                newField[index[0]][index[1] + i].weight += Number(
                    Math.round(10 / i * (kef.x - 1) * x)
                )
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === player) {
                newField[index[0]][index[1] - i].weight = null
                x++
            } else {
                newField[index[0]][index[1] - i].weight += Number(
                    Math.round(10 / i * (kef.x - 1)* x)
                )
            }
        }
        

        //====================================================Z

        if (index[0] + i <= 14 && index[1] + i <= 14) {
            if (newField[index[0] + i][index[1] + i].player === player) {
                newField[index[0] + i][index[1] + i].weight = null
                z++
            } else {
                newField[index[0] + i][index[1] + i].weight += Number(
                    Math.round(10 / i * (kef.z -1) *z)
                )
            }
        }
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === player) {
                newField[index[0] - i][index[1] - i].weight = null
                z++
            } else {
                newField[index[0] - i][index[1] - i].weight += Number(
                    Math.round(10 / i * (kef.z -1)*z)
                )
            }
        }

        //=============================================================RZ

        if (index[0] + i <= 14 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === player) {
                newField[index[0] + i][index[1] - i].weight = null
                rz++
            } else {
                newField[index[0] + i][index[1] - i].weight += Number(
                    Math.round(10 / i * (kef.rz -1 )*rz)
                )
            }
        }
        if (index[0] - i >= 0 && index[1] + i <= 14) {
            if (newField[index[0] - i][index[1] + i].player === player) {
                newField[index[0] - i][index[1] + i].weight = null
                rz++
            } else {
                newField[index[0] - i][index[1] + i].weight += Number(
                    Math.round(10 / i * (kef.rz - 1)*rz)
                )
            }
        }
    }

    return newField
}



const movePlayer = (newField, index, player) => {
    

    let y = 0
    let x = 0
    let z = 0
    let rz = 0
    
        
    let wins_x = []
    let wins_y = []
    let wins_z = []
    let wins_rz = []

    for (let i = 0; i < 7; i++) {
        if (index[0] + i >= 0 && index[0] + i <= 14) {
            if (newField[index[0] + i][index[1]].player === player) {
                wins_y.unshift(player)
                y++
            } else {
                wins_y.unshift(0)
            }
        }
        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === player) {
                wins_y.push(player)
                y++
            } else {
                wins_y.push(0)
            }
        }
    }

    // console.log('Y-X', wins_y);
    for (let i = 0; i < 7; i++) {
        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === player) {
                wins_x.unshift(player)
                x++
            } else {
                wins_x.unshift(0)
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === player) {
                wins_x.push(player)
                x++
            } else {
                wins_x.push(0)
            }
        }
    }

    // console.log('X', vic_x);

    for (let i = 0; i < 7; i++) {
        if (index[0] + i <= 14 && index[1] + i <= 14) {
            if (newField[index[0] + i][index[1] + i].player === player) {
                wins_z.unshift(player)
                z++
            } else {
                wins_z.unshift(0)
            }
        }
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === player) {
                wins_z.push(player)
                z++
            } else {
                wins_z.push(0)
            }
        }
    }

    // console.log('Z-X', vic_z);

    for (let i = 0; i < 7; i++) {
        if (index[0] + i <= 14 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === player) {
                wins_rz.unshift(player)
                rz++
            } else {
                wins_rz.unshift(0)
            }
        }
        if (index[0] - i >= 0 && index[1] + i <= 14) {
            if (newField[index[0] - i][index[1] + i].player === player) {
                wins_rz.push(player)
                rz++
            } else {
                wins_rz.push(0)
            }
        }
    }
    // console.log('rZ-X', vic_rz);

    winsMove(wins_y, player)
    winsMove(wins_x, player)
    winsMove(wins_z, player)
    winsMove(wins_rz, player)


    return {
        y,
        x,
        z,
        rz
    }

}












const winsMove = (arrWins, player) => {
    for (let i = 0; i < arrWins.length; i++) {
        if (
            arrWins[i + 0] === player &&
            arrWins[i + 1] === player &&
            arrWins[i + 2] === player &&
            arrWins[i + 3] === player &&
            arrWins[i + 4] === player &&
            arrWins[i + 5] === player
        ) {
            alert(`${player} vins`)
            break
        }
    }
}