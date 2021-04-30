
export const singleGameAction = (field, index, player, botPlayer) => {
    console.log('single', player);
    const newField = field
    newField[index[0]][index[1]].weightPlayer = null
    newField[index[0]][index[1]].weightBot = null
    newField[index[0]][index[1]].player = player
    // console.log(newField);
   

    
    let kefPlayer = movePlayer(newField, index, player)
    
    let weightPlayer = weightAnalysis(newField, index, player, kefPlayer)
    
    let moveBot = bot(weightPlayer, player, botPlayer)
    // console.log(moveBot);

    newField[moveBot.indexLine][moveBot.indexCell].player = botPlayer
    newField[moveBot.indexLine][moveBot.indexCell].weightBot = null
    newField[moveBot.indexLine][moveBot.indexCell].weightPlayer = null
    let kefBot = movePlayer(newField, [moveBot.indexLine, moveBot.indexCell], botPlayer)


    let weightBot = weightAnalysisBot(newField, [moveBot.indexLine, moveBot.indexCell], botPlayer, kefBot)

    return weightBot
}


const bot = ( weightPlayer, player, botPlayer) => {
    let countPlayer = 0
    let countBot = 0
    let indexPlayer = {}
    let indexBot = 0
    let index = {}
    weightPlayer.map(line => line.map(cell => {
        if ( cell.player != botPlayer && cell.player != player) {
            if (cell.weightPlayer > countPlayer) {
                countPlayer = cell.weightPlayer
                indexPlayer = cell
            }
            if (cell.weightBot > countBot) {
                countBot = cell.weightBot
                indexBot = cell
            }
        }
       
    }))

    if (indexBot === 0) {
        index = indexPlayer
    } else {
        if (indexPlayer.weightPlayer >= indexBot.weightBot) {
            index = indexPlayer
         } else {
             index = indexBot
         }
    }
    

    // console.log(index);
    return index
}





const weightAnalysisBot = (field, index, player, kef) => {
    const newField = field
    let y = 0
    let x = 0
    let z = 0
    let rz = 0
    for (let i = 0; i < 5; i++) {
        //=====================================Y

        if (index[0] + i >= 0 && index[0] + i <= 14) {
            if (newField[index[0] + i][index[1]].player === player) {
                newField[index[0] + i][index[1]].weightBot = null
                y++
            } else {
                newField[index[0] + i][index[1]].weightBot = Number(
                    Math.round(1.5 / i * kef.y )
                )
            }
        }

        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === player) {
                newField[index[0] - i][index[1]].weightBot = null
                y++
            } else {
                newField[index[0] - i][index[1]].weightBot = Number(
                    Math.round(1.5 / i * kef.y )
                )
            }
        }

        //================================================== X

        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === player) {
                newField[index[0]][index[1] + i].weightBot = null
                x++
            } else {
                newField[index[0]][index[1] + i].weightBot = Number(
                    Math.round(1.5 / i * kef.x )
                )
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === player) {
                newField[index[0]][index[1] - i].weightBot = null
                x++
            } else {
                newField[index[0]][index[1] - i].weightBot = Number(
                    Math.round(1.5 / i * kef.x )
                )
            }
        }
        

        //====================================================Z

        if (index[0] + i <= 14 && index[1] + i <= 14) {
            if (newField[index[0] + i][index[1] + i].player === player) {
                newField[index[0] + i][index[1] + i].weightBot = null
                z++
            } else {
                newField[index[0] + i][index[1] + i].weightBot = Number(
                    Math.round(1.5 / i * kef.z )
                )
            }
        }
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === player) {
                newField[index[0] - i][index[1] - i].weightBot = null
                z++
            } else {
                newField[index[0] - i][index[1] - i].weightBot = Number(
                    Math.round(1.5 / i * kef.z )
                )
            }
        }

        //=============================================================RZ

        if (index[0] + i <= 14 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === player) {
                newField[index[0] + i][index[1] - i].weightBot = null
                rz++
            } else {
                newField[index[0] + i][index[1] - i].weightBot = Number(
                    Math.round(1.5 / i * kef.rz )
                )
            }
        }
        if (index[0] - i >= 0 && index[1] + i <= 14) {
            if (newField[index[0] - i][index[1] + i].player === player) {
                newField[index[0] - i][index[1] + i].weightBot = null
                rz++
            } else {
                newField[index[0] - i][index[1] + i].weightBot = Number(
                    Math.round(1.5 / i * kef.rz )
                )
            }
        }
    }

    return newField
}








const weightAnalysis = (field, index, player, kef) => {
    const newField = field
    let y = 0
    let x = 0
    let z = 0
    let rz = 0
    for (let i = 0; i < 5; i++) {
        //=====================================Y

        if (index[0] + i >= 0 && index[0] + i <= 14) {
            if (newField[index[0] + i][index[1]].player === player) {
                newField[index[0] + i][index[1]].weightPlayer = null
                y++
            } else {
                newField[index[0] + i][index[1]].weightPlayer = Number(
                    Math.round(1 / i * kef.y )
                )
            }
        }

        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === player) {
                newField[index[0] - i][index[1]].weightPlayer = null
               y++
            } else {
                newField[index[0] - i][index[1]].weightPlayer = Number(
                    Math.round(1 / i * kef.y)
                )
            }
        }

        //================================================== X

        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === player) {
                newField[index[0]][index[1] + i].weightPlayer = null
               x++
            } else {
                newField[index[0]][index[1] + i].weightPlayer = Number(
                    Math.round(1 / i * kef.x )
                )
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === player) {
                newField[index[0]][index[1] - i].weightPlayer = null
               x++
            } else {
                newField[index[0]][index[1] - i].weightPlayer = Number(
                    Math.round(1 / i * kef.x )
                )
            }
        }
        

        //====================================================Z

        if (index[0] + i <= 14 && index[1] + i <= 14) {
            if (newField[index[0] + i][index[1] + i].player === player) {
                newField[index[0] + i][index[1] + i].weightPlayer = null
                z++
            } else {
                newField[index[0] + i][index[1] + i].weightPlayer = Number(
                    Math.round(1/ i * kef.z )
                )
            }
        }
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === player) {
                newField[index[0] - i][index[1] - i].weightPlayer = null
               
            } else {
                newField[index[0] - i][index[1] - i].weightPlayer = Number(
                    Math.round(1 / i * kef.z )
                )
            }
        }

        //=============================================================RZ

        if (index[0] + i <= 14 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === player) {
                newField[index[0] + i][index[1] - i].weightPlayer = null
               
            } else {
                newField[index[0] + i][index[1] - i].weightPlayer = Number(
                    Math.round(1 / i * kef.rz )
                )
            }
        }
        if (index[0] - i >= 0 && index[1] + i <= 14) {
            if (newField[index[0] - i][index[1] + i].player === player) {
                newField[index[0] - i][index[1] + i].weightPlayer = null
               
            } else {
                newField[index[0] - i][index[1] + i].weightPlayer = Number(
                    Math.round(1 / i * kef.rz )
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

    for (let i = 0; i < 6; i++) {
        if (index[0] + i >= 0 && index[0] + i <= 14) {
            if (newField[index[0] + i][index[1]].player === player) {
                wins_y.unshift(player)
                
            } else {
                wins_y.unshift(0)
            }
        }
        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === player) {
                wins_y.push(player)
                
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
               
            } else {
                wins_x.unshift(0)
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === player) {
                wins_x.push(player)
               
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
                
            } else {
                wins_z.unshift(0)
            }
        }
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === player) {
                wins_z.push(player)
              
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
               
            } else {
                wins_rz.unshift(0)
            }
        }
        if (index[0] - i >= 0 && index[1] + i <= 14) {
            if (newField[index[0] - i][index[1] + i].player === player) {
                wins_rz.push(player)
               
            } else {
                wins_rz.push(0)
            }
        }
    }
    // console.log('rZ-X', vic_rz);

   y = winsMove(wins_y, player)
   x = winsMove(wins_x, player)
   z = winsMove(wins_z, player)
   rz = winsMove(wins_rz, player)

   

    return {
        y,
        x,
        z,
        rz
    }

}












const winsMove  = (arrWins, player) => {
    let kef = 0
    for (let i = 0; i < arrWins.length; i++) {
        if (arrWins[i + 0] === player) {
            console.log('1:',arrWins );
            kef++
        }
        if (arrWins[i + 0] === player &&
            arrWins[i + 1] === player ) {
                console.log('2:',arrWins );
                kef++
        }
        if (arrWins[i + 0] === player &&
            arrWins[i + 1] === player &&
            arrWins[i + 2] === player 
            ) {
                console.log('3:',arrWins );
                kef++
            }
        if (arrWins[i + 0] === player &&
            arrWins[i + 1] === player &&
            arrWins[i + 2] === player &&
            arrWins[i + 3] === player 
            ) {
                console.log('4:',arrWins );
                kef++
            }
        if (arrWins[i + 0] === player &&
            arrWins[i + 1] === player &&
            arrWins[i + 2] === player &&
            arrWins[i + 3] === player &&
            arrWins[i + 4] === player ) {
                console.log('5:',arrWins );
                kef++
            }
        if (
            arrWins[i + 0] === player &&
            arrWins[i + 1] === player &&
            arrWins[i + 2] === player &&
            arrWins[i + 3] === player &&
            arrWins[i + 4] === player &&
            arrWins[i + 5] === player
        ) {
            kef++
            alert(`${player} vins`)
            break
        }
    }
    if (arrWins.length < 6) {
        kef = 0
    }
    console.log('kef:', kef);
    return kef
}