






const result = (arrWins) => {
    for (let i = 0; i < arrWins.length; i++) {
        if (
            arrWins[i + 1] === 'X' &&
            arrWins[i + 2] === 'X' &&
            arrWins[i + 3] === 'X' &&
            arrWins[i + 4] === 'X' &&
            arrWins[i + 5] === 'X' &&
            arrWins[i + 6] === 'X'
            ) {
                alert('X vins')
                break
            }
    }
}









export const gameAction = (field, index) => {
    const newField = field
    newField[index[0]][index[1]].weight = null
    newField[index[0]][index[1]].player = "X"

    
    let y = 0
    let x = 1
    let z = 0
    let rz = 0

    let m = []


    let wins_x = []
    let wins_y = []
    let wins_z = []
    let wins_rz = []


    for (let i = 0; i < 7; i++) {
        if (index[0] + i >= 0 && index[0] + i <= 14) {
            if (newField[index[0] + i][index[1]].player === "X") {
                wins_y.unshift('X')
            } else {
                wins_y.unshift(0)
            }
        }
        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if ( newField[index[0] - i][index[1]].player === "X") {
                wins_y.push('X')
            } else {
                wins_y.push(0)
            }
        }
    }

    // console.log('Y-X', wins_y);
    for (let i = 0; i < 7; i++) {
        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === "X") {
                wins_x.unshift('X')
            } else {
                wins_x.unshift(0)
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === "X") {
                wins_x.push('X')
            } else {
                wins_x.push(0)
            }
        }
    }


    // console.log('X', vic_x);

    for (let i = 0; i < 7; i++) {
        if (index[0] + i <= 14 && index[1] + i <= 14) {
            if (newField[index[0] + i][index[1] + i].player === "X") {
                wins_z.unshift('X')
            } else {
                wins_z.unshift(0)
            }
        } 
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === "X") {
                wins_z.push('X')
            } else {
                wins_z.push(0)
            }
        }
    }

    // console.log('Z-X', vic_z);








    for (let i = 0; i < 7; i++) {
        if (index[0] + i <= 14 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === "X") {
                wins_rz.unshift('X')
            } else {
                wins_rz.unshift(0)
            }
        } 
        if (index[0] - i >= 0 &&  index[1] + i <= 14) {
            if ( newField[index[0] - i][index[1] + i].player === "X") {
                wins_rz.push('X')
            } else {
                wins_rz.push(0)
            }
        }
    }
    // console.log('rZ-X', vic_rz);

    result(wins_y)
    result(wins_x)
    result(wins_z)
    result(wins_rz)



















    for (let i = 0; i < 5; i++) {
        
        // =====================================Y
       
        

        if (index[0] + i >= 0 && index[0] + i <= 14) {
            if (newField[index[0] + i][index[1]].player === "X" ) {
                newField[index[0] + i][index[1]].weight = null
                
            } else {
                newField[index[0] + i][index[1]].weight += Number(
                    Math.round(10 * y)
                )
               
            }
        }

        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === "X") {
                newField[index[0] - i][index[1]].weight = null
                
            } else {
                newField[index[0] - i][index[1]].weight += Number(
                    Math.round(10 * y)
                )
            }
        }
       
        
        // ================================================== X


        


        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === "X") {
                newField[index[0]][index[1] + i].weight = null
                
            } else {
                newField[index[0]][index[1] + i].weight += Number(
                    Math.round(10 * x)
                )
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === "X") {
                newField[index[0]][index[1] - i].weight = null
            } else {
                newField[index[0]][index[1] - i].weight += Number(
                    Math.round(10 * x)
                )
            }
        }
        // console.log('X', x);


        // ====================================================Z
       

        if (index[0] + i <= 14 && index[1] + i <= 14 ) {
            if (newField[index[0] + i][index[1] + i].player === "X") {
                
                newField[index[0] + i][index[1] + i].weight = null
                
            } else {
                newField[index[0] + i][index[1] + i].weight += Number(Math.round(10 * z))
            }
        }
        if (index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] - i][index[1] - i].player === "X") {
                newField[index[0] - i][index[1] - i].weight = null
                
            } else {
                newField[index[0] - i][index[1] - i].weight += Number(Math.round(10 * z))
            }
        }
        

        // =============================================================RZ

       

        if (index[0] + i <= 14 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === "X") {
                newField[index[0] + i][index[1] - i].weight = null
               
            } else {
                newField[index[0] + i][index[1] - i].weight += Number(Math.round(10 * rz))
            }
        }
        if (index[0] - i >= 0 &&  index[1] + i <= 14) {
            if (newField[index[0] - i][index[1] + i].player === "X") {
                newField[index[0] - i][index[1] + i].weight = null
                
            } else {
                newField[index[0] - i][index[1] + i].weight += Number(Math.round(10 * rz))
            }
        }



    }

    return newField
}

