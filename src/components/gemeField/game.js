
 
 let x = 1
   
 let z = 1
 let rz = 1

let count = 0





export const gameAction = (field, index) => {
    const newField = field
    newField[index[0]][index[1]].weight = null
    newField[index[0]][index[1]].player = "X"


    
    let y = 1
    let x = 1
    let z = 1
   

    for (let i = 1; i < 7; i++) {
        // =========================== Y


        if (index[0] + i >= 0 && index[0] + i <= 14) {
            if (newField[index[0] + i][index[1]].player === "X" ) {
                newField[index[0] + i][index[1]].weight = null
                y *= 2.5
            } else {
                newField[index[0] + i][index[1]].weight += Number(
                    Math.round((10 * y) / i)
                )
            }
        }

        if (index[0] - i >= 0 && index[0] - i <= 14) {
            if (newField[index[0] - i][index[1]].player === "X") {
                newField[index[0] - i][index[1]].weight = null
                y *= 2.5
            } else {
                newField[index[0] - i][index[1]].weight += Number(
                    Math.round((10 * y) / i)
                )
            }
        }
        console.log('Y',y);

        //================================================== X

        if (index[1] + i >= 0 && index[1] + i <= 14) {
            if (newField[index[0]][index[1] + i].player === "X") {
                newField[index[0]][index[1] + i].weight = null
                x *= 2.5
            } else {
                newField[index[0]][index[1] + i].weight += Number(
                    Math.round((10 * x) / i)
                )
            }
        }
        if (index[1] - i >= 0 && index[1] - i <= 14) {
            if (newField[index[0]][index[1] - i].player === "X") {
                newField[index[0]][index[1] - i].weight = null
                x *= 2.5
            } else {
                newField[index[0]][index[1] - i].weight += Number(
                    Math.round((10 * x) / i)
                )
            }
        }



        //====================================================Z

        if (index[0] - i >= 0 &&  index[1] + i >= 0) {
            if (newField[index[0] + i][index[1] - i].player === "X") {
                newField[index[0] + i][index[1] - i].weight = null
                z *= 2.5
            } else {
                newField[index[0] + i][index[1] - i].weight += Number(Math.round((10 * z) / i))
            }
        }
        if (index[0] + i >= 0 &&  index[1] - i >= 0 ) {
            if (newField[index[0] - i][index[1] + i].player === "X") {
                newField[index[0] - i][index[1] + i].weight = null
                z *= 2.5
            } else {
                newField[index[0] - i][index[1] + i].weight += Number(Math.round((10 * z) / i))
            }
        }
        console.log('Z',z);


        //=============================================================RZ

        // if (index[0] + i >= 0 &&  index[1] + i >= 0) {
            // if (newField[index[0] + i][index[1] + i].player === "X") {
                // newField[index[0] + i][index[1] + i].weight = null
                // rz *= 2.5
            // } else {
                // newField[index[0] + i][index[1] + i].weight += Number(Math.round((10 * rz) / i))
            // }
        // }
        // if (index[0] - i >= 0 &&  index[1] - i >= 0) {
            // if (newField[index[0] - i][index[1] - i].player === "X") {
                // newField[index[0] - i][index[1] - i].weight = null
                // rz *= 2.5
            // } else {
                // newField[index[0] - i][index[1] - i].weight += Number(Math.round((10 * rz) / i))
            // }
        // }

        // if (
            // index[0] + i >= 0 &&
            // index[0] + i <= 14 &&
            // index[1] + i >= 0 &&
            // index[1] + i <= 14
        // ) {
            // if (
                // newField[index[0] + i][index[1] + i].player === "X" &&
                // newField[index[0] + i][index[1] + i].player === "X"
            // ) {
                // rz *= 1.5
                // newField[index[0] + i][index[1] + i].weight = null
                // newField[index[0] + i][index[1] + i].weight = null
            // }
        // }

        // if (
            // index[0] - i >= 0 &&
            // index[0] - i <= 14 &&
            // index[1] - i >= 0 &&
            // index[1] - i <= 14
        // ) {
            // newField[index[0] - i][index[1] - i].weight += Number(((10 * rz) / i).toFixed(1))
        // }
        // if (
            // index[0] + i >= 0 &&
            // index[0] + i <= 14 &&
            // index[1] + i >= 0 &&
            // index[1] + i <= 14
        // ) {
            // newField[index[0] + i][index[1] + i].weight += Number(((10 * rz) / i).toFixed(1))
        // }

    }

    // for (let i = 1; i < 7; i++) {
        
        
        
        
        
        
        
        
        
      
      
      
      
      
      
      
      
      










        //  if (
            // index[0] + i >= 0 &&
            // index[0] + i <= 14 &&
            // index[1] - i >= 0 &&
            // index[1] - i <= 14
        // ) {
            // newField[index[0] + i][index[1] - i].weight += 10
        // }
        // if (
            // index[0] - i >= 0 &&
            // index[0] - i <= 14 &&
            // index[1] + i >= 0 &&
            // index[1] + i <= 14
        // ) {
            // newField[index[0] - i][index[1] + i].weight += 10
        // }








        // if (
            // index[0] + i >= 0 &&
            // index[0] + i <= 14 &&
            // index[1] + i >= 0 &&
            // index[1] + i <= 14
        // ) {
            // newField[index[0] + i][index[1] + i].weight += 10
        // }
        // if (
            // index[0] - i >= 0 &&
            // index[0] - i <= 14 &&
            // index[1] - i >= 0 &&
            // index[1] - i <= 14
        // ) {
            // newField[index[0] - i][index[1] - i].weight += 10
        // }
    // }

    return newField
}
