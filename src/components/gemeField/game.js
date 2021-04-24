



export const gameAction = (field, index) => {
    const newField = field
    newField[index[0]][index[1]].weight = null
    newField[index[0]][index[1]].player = "X"

    
    let y = 0
    let x = 0
    let z = 0
    let rz = 0

    let count = 0


    for (let i = 0; i < newField.length; i++) {
        
        for (let k = 0; k < newField[i].length; k++) {
            if (newField[i][k].player == 'X') {
                console.log(newField[i][k]);
               
            }
            
        }
        
    }




    for (let i = 0; i < 5; i++) {
        // debugger
        if (index[0] + i >= 0 && index[0] + i <= 14 && index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] + i][index[1]].player === "X" || newField[index[0] - i][index[1]].player === "X") {
                y += 1
                
        } 
    }
    
    for (let i = 1; i < 7; i++) {
        if (index[1] + i >= 0 && index[1] + i <= 14 && index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] + i].player === "X") {
                x++
            } 
            if (newField[index[0]][index[1] - i].player === "X") {
                x++
            } 
        }
    }

    for (let i = 0; i < 5; i++) {
        if (index[0] + i <= 14 && index[1] + i <= 14 && index[0] - i >= 0 && index[1] - i >= 0) {
            if (newField[index[0] + i][index[1] + i].player === "X" || newField[index[0] - i][index[1] - i].player === "X") {
                z++
            }
        } 
    }
    for (let i = 0; i < 5; i++) {
        if (index[0] + i <= 14 && index[1] - i >= 0 && index[0] - i >= 0 &&  index[1] + i <= 14) {
            if (newField[index[0] + i][index[1] - i].player === "X" || newField[index[0] - i][index[1] + i].player === "X") {
                rz++
            }
        } 
    }


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
}
