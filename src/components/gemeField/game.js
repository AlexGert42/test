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



export const gameAction = (field, index, player) => {
    const newField = field
    newField[index[0]][index[1]].weight = null
    newField[index[0]][index[1]].player = player

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

    winsMove(wins_y, player)
    winsMove(wins_x, player)
    winsMove(wins_z, player)
    winsMove(wins_rz, player)

    // for (let i = 0; i < 5; i++) {
        // =====================================Y

        // if (index[0] + i >= 0 && index[0] + i <= 14) {
            // if (newField[index[0] + i][index[1]].player === "X") {
                // newField[index[0] + i][index[1]].weight = null
            // } else {
                // newField[index[0] + i][index[1]].weight += Number(
                    // Math.round(10 * y)
                // )
            // }
        // }

        // if (index[0] - i >= 0 && index[0] - i <= 14) {
            // if (newField[index[0] - i][index[1]].player === "X") {
                // newField[index[0] - i][index[1]].weight = null
            // } else {
                // newField[index[0] - i][index[1]].weight += Number(
                    // Math.round(10 * y)
                // )
            // }
        // }

        // ================================================== X

        // if (index[1] + i >= 0 && index[1] + i <= 14) {
            // if (newField[index[0]][index[1] + i].player === "X") {
                // newField[index[0]][index[1] + i].weight = null
            // } else {
                // newField[index[0]][index[1] + i].weight += Number(
                    // Math.round(10 * x)
                // )
            // }
        // }
        // if (index[1] - i >= 0 && index[1] - i <= 14) {
            // if (newField[index[0]][index[1] - i].player === "X") {
                // newField[index[0]][index[1] - i].weight = null
            // } else {
                // newField[index[0]][index[1] - i].weight += Number(
                    // Math.round(10 * x)
                // )
            // }
        // }
        // console.log('X', x);

        // ====================================================Z

        // if (index[0] + i <= 14 && index[1] + i <= 14) {
            // if (newField[index[0] + i][index[1] + i].player === "X") {
                // newField[index[0] + i][index[1] + i].weight = null
            // } else {
                // newField[index[0] + i][index[1] + i].weight += Number(
                    // Math.round(10 * z)
                // )
            // }
        // }
        // if (index[0] - i >= 0 && index[1] - i >= 0) {
            // if (newField[index[0] - i][index[1] - i].player === "X") {
                // newField[index[0] - i][index[1] - i].weight = null
            // } else {
                // newField[index[0] - i][index[1] - i].weight += Number(
                    // Math.round(10 * z)
                // )
            // }
        // }

        // =============================================================RZ

        // if (index[0] + i <= 14 && index[1] - i >= 0) {
            // if (newField[index[0] + i][index[1] - i].player === "X") {
                // newField[index[0] + i][index[1] - i].weight = null
            // } else {
                // newField[index[0] + i][index[1] - i].weight += Number(
                    // Math.round(10 * rz)
                // )
            // }
        // }
        // if (index[0] - i >= 0 && index[1] + i <= 14) {
            // if (newField[index[0] - i][index[1] + i].player === "X") {
                // newField[index[0] - i][index[1] + i].weight = null
            // } else {
                // newField[index[0] - i][index[1] + i].weight += Number(
                    // Math.round(10 * rz)
                // )
            // }
        // }
    // }

    return newField
}
