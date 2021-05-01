
export const singleGameAction = (field, index, player, botPlayer) => {
    console.log('single', player);
    const newField = field
    newField[index[0]][index[1]].weightPlayer = null
    newField[index[0]][index[1]].weightBot = null
    newField[index[0]][index[1]].player = player
    // console.log(newField);
    vins(field, index)

    
    let kefPlayer = movePlayer(newField, index, player, botPlayer)
    
    let weightPlayer = weightAnalysis(newField, index, player, kefPlayer)
    
    let moveBot = bot(weightPlayer, player, botPlayer)
    // console.log(moveBot);

    newField[moveBot.indexLine][moveBot.indexCell].player = botPlayer
    newField[moveBot.indexLine][moveBot.indexCell].weightBot = null
    newField[moveBot.indexLine][moveBot.indexCell].weightPlayer = null
    let kefBot = movePlayer(newField, [moveBot.indexLine, moveBot.indexCell], botPlayer, player)


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
    
    let comb = []
    

    weightPlayer.map((line, il) => line.map((cell, ic) => {
        if (cell.player === player) {
            // let newArry = new Array(15).fill(new Array(15).fill(0))
            let array = []
            for (let i = 0; i < 7; i++) {
                if (cell.indexLine + i <= 14 && cell.indexLine - i >= 0) {
                    if (weightPlayer[il + i][ic].player === 'O' || weightPlayer[il - i][ic].player === 'O') {
                        array[cell.indexLine + i] = 'O'
                    } else {
                        array[cell.indexLine + i] = 'X'
                    }
                    
                }
                // if (cell.indexLine - i >= 0) {
                //     if (weightPlayer[il - i][ic].player === 'O') {
                //         array[cell.indexLine - i] = -1
                //     } else {
                //         array[cell.indexLine - i] = 2
                //     }
                    
                // }
                comb = array
            }
            
        }
        
    }))

    console.log('comb:', comb);
    // console.log(weightPlayer);


















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
                newField[index[0] + i][index[1]].weightBot += Number(
                    Math.round(1.5  * kef.y )
                )
            }
        }

        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === player) {
                newField[index[0] - i][index[1]].weightBot = null
                y++
            } else {
                newField[index[0] - i][index[1]].weightBot += Number(
                    Math.round(1.5  * kef.y )
                )
            }
        }

        //================================================== X

        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === player) {
                newField[index[0]][index[1] + i].weightBot = null
                x++
            } else {
                newField[index[0]][index[1] + i].weightBot += Number(
                    Math.round(1.5  * kef.x )
                )
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === player) {
                newField[index[0]][index[1] - i].weightBot = null
                x++
            } else {
                newField[index[0]][index[1] - i].weightBot += Number(
                    Math.round(1.5  * kef.x )
                )
            }
        }
        

        //====================================================Z

        if (index[0] + i <= 14 && index[1] + i <= 14) {
            if (newField[index[0] + i][index[1] + i].player === player) {
                newField[index[0] + i][index[1] + i].weightBot = null
                z++
            } else {
                newField[index[0] + i][index[1] + i].weightBot += Number(
                    Math.round(1.5  * kef.z )
                )
            }
        }
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === player) {
                newField[index[0] - i][index[1] - i].weightBot = null
                z++
            } else {
                newField[index[0] - i][index[1] - i].weightBot += Number(
                    Math.round(1.5  * kef.z )
                )
            }
        }

        //=============================================================RZ

        if (index[0] + i <= 14 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === player) {
                newField[index[0] + i][index[1] - i].weightBot = null
                rz++
            } else {
                newField[index[0] + i][index[1] - i].weightBot += Number(
                    Math.round(1.5  * kef.rz )
                )
            }
        }
        if (index[0] - i >= 0 && index[1] + i <= 14) {
            if (newField[index[0] - i][index[1] + i].player === player) {
                newField[index[0] - i][index[1] + i].weightBot = null
                rz++
            } else {
                newField[index[0] - i][index[1] + i].weightBot += Number(
                    Math.round(1.5  * kef.rz )
                )
            }
        }
    }

    return newField
}



const vins = (field, index) => {
    let newArry = new Array(15).fill(new Array(15).fill(0))
    let n = 0
    field.map((line, il) => line.map((cell, ic) => {
        if (cell.player === 'X') {
            newArry[il][ic] = cell.player
            if (il + 1 <= 14) {
                newArry[il + 1][ic] = cell.player
               
            }
            if (il + 2 <= 14) {
                newArry[il + 2][ic] = cell.player
            }
            if (il + 3 <= 14) {
                newArry[il + 3][ic] = cell.player
            }
            if (il + 4 <= 14) {
                newArry[il + 4][ic] = cell.player
            }

           

        }
    }))
    // console.log(newArry);
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
                newField[index[0] + i][index[1]].weightPlayer += Number(
                    Math.round(1  * kef.y )
                )
            }
        }

        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === player) {
                newField[index[0] - i][index[1]].weightPlayer = null
               y++
            } else {
                newField[index[0] - i][index[1]].weightPlayer += Number(
                    Math.round(1  * kef.y)
                )
            }
        }

        //================================================== X

        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === player) {
                newField[index[0]][index[1] + i].weightPlayer = null
               x++
            } else {
                newField[index[0]][index[1] + i].weightPlayer += Number(
                    Math.round(1  * kef.x )
                )
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === player) {
                newField[index[0]][index[1] - i].weightPlayer = null
               x++
            } else {
                newField[index[0]][index[1] - i].weightPlayer += Number(
                    Math.round(1  * kef.x )
                )
            }
        }
        

        //====================================================Z

        if (index[0] + i <= 14 && index[1] + i <= 14) {
            if (newField[index[0] + i][index[1] + i].player === player) {
                newField[index[0] + i][index[1] + i].weightPlayer = null
                z++
            } else {
                newField[index[0] + i][index[1] + i].weightPlayer += Number(
                    Math.round(1 * kef.z )
                )
            }
        }
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === player) {
                newField[index[0] - i][index[1] - i].weightPlayer = null
               
            } else {
                newField[index[0] - i][index[1] - i].weightPlayer += Number(
                    Math.round(1  * kef.z )
                )
            }
        }

        //=============================================================RZ

        if (index[0] + i <= 14 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === player) {
                newField[index[0] + i][index[1] - i].weightPlayer = null
               
            } else {
                newField[index[0] + i][index[1] - i].weightPlayer += Number(
                    Math.round(1 * kef.rz )
                )
            }
        }
        if (index[0] - i >= 0 && index[1] + i <= 14) {
            if (newField[index[0] - i][index[1] + i].player === player) {
                newField[index[0] - i][index[1] + i].weightPlayer = null
               
            } else {
                newField[index[0] - i][index[1] + i].weightPlayer += Number(
                    Math.round(1  * kef.rz )
                )
            }
        }
    }

    return newField
}



const movePlayer = (newField, index, player, playerTwo) => {
    

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
                wins_y.unshift(newField[index[0] + i][index[1]].player)
            }
        }
        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === player) {
                wins_y.push(player)
                
            } else {
                wins_y.push(newField[index[0] - i][index[1]].player)
            }
        }
    }

    // console.log('Y-X', wins_y);
    for (let i = 0; i < 7; i++) {
        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === player) {
                wins_x.unshift(player)
               
            } else {
                wins_x.unshift(newField[index[0]][index[1] + i].player)
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === player) {
                wins_x.push(player)
               
            } else {
                wins_x.push(newField[index[0]][index[1] - i].player)
            }
        }
    }

    // console.log('X', vic_x);

    for (let i = 0; i < 7; i++) {
        if (index[0] + i <= 14 && index[1] + i <= 14) {
            if (newField[index[0] + i][index[1] + i].player === player) {
                wins_z.unshift(player)
                
            } else {
                wins_z.unshift(newField[index[0] + i][index[1] + i].player)
            }
        }
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === player) {
                wins_z.push(player)
              
            } else {
                wins_z.push(newField[index[0] - i][index[1] - i].player)
            }
        }
    }

    // console.log('Z-X', vic_z);

    for (let i = 0; i < 7; i++) {
        if (index[0] + i <= 14 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === player) {
                wins_rz.unshift(player)
               
            } else {
                wins_rz.unshift(newField[index[0] + i][index[1] - i].player)
            }
        }
        if (index[0] - i >= 0 && index[1] + i <= 14) {
            if (newField[index[0] - i][index[1] + i].player === player) {
                wins_rz.push(player)
               
            } else {
                wins_rz.push(newField[index[0] - i][index[1] + i].player)
            }
        }
    }
    // console.log('rZ-X', vic_rz);

   y = winsMove(wins_y, player, playerTwo)
   x = winsMove(wins_x, player, playerTwo)
   z = winsMove(wins_z, player, playerTwo)
   rz = winsMove(wins_rz, player, playerTwo)

   

    // return {
    //     y,
    //     x,
    //     z,
    //     rz
    // }
    return newField
}












const winsMove  = (arrWins, player, playerTwo) => {
    let kef = 1
    if (arrWins.length < 6) {
        return kef = 1
    } else {
        for (let i = 0; i < arrWins.length; i++) {
            if (arrWins[i + 0] === player) {
                // console.log('1:',arrWins );
                kef = 1
            }
            if (arrWins[i + 0] === player &&
                arrWins[i + 1] === player ) {
                    // console.log('2:',arrWins );
                    kef = 1
            }
            if (arrWins[i + 0] === player &&
                arrWins[i + 1] === player &&
                arrWins[i + 2] === player 
                ) {
                    // console.log('3:',arrWins );
                    kef++
                }
            if (arrWins[i + 0] === player &&
                arrWins[i + 1] === player &&
                arrWins[i + 2] === player &&
                arrWins[i + 3] === player 
                ) {
                    // console.log('4:',arrWins );
                    kef++
                }
            if (arrWins[i + 0] === player &&
                arrWins[i + 1] === player &&
                arrWins[i + 2] === player &&
                arrWins[i + 3] === player &&
                arrWins[i + 4] === player ) {
                    // console.log('5:',arrWins );
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

        return kef

    }
   
    
  
    // console.log('kef:', kef);
    
}