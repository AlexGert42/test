import {useGameField} from '../../context/GameFieldContext'
import {playersGameAction} from './game'
import {singleGameAction} from './gameBot'

export const GameField = () => {
    const {flag, field, setField, count, player_1, player_2, single } = useGameField()
    let player = '' 
    let gameAction = ''
    if (!flag) {
        return null
    }

        
    
    if (single) {
        gameAction = singleGameAction
    } else {
        if (count % 2 === 0) {
            player = player_1
        } else {
            player = player_2
        }
        gameAction = playersGameAction
    }




    
    return (
        <main className="game_field">
            <div className="container">
                <div className="game_field__inner">
                    {field.map(line => line.map(cell => {
                        return (
                            <div className="game_field__cell"
                            style={cell.weightPlayer == 0 || cell.weightBot == 0 ? {color: 'black'} : {color: 'red', fontWeight: 'bold', fontSize: '2.2rem'}}
                            onClick={() => {
                                if (cell.player === player_1 || cell.player === player_2) {
                                    return null
                                } else {
                                    if (single) {
                                        setField(gameAction(field, [cell.indexLine, cell.indexCell], player_1, player_2))
                                    } else {
                                        
                                        setField(gameAction(field, [cell.indexLine, cell.indexCell], player))
                                    }
                                }
                               
                            }}
                            key={cell.index}
                            >{cell.player}  </div>
                        )
                    }))}
                </div>
            </div>
        </main>
    )
}

{/* <br/>x:{cell.weightPlayer} <br/>o:{cell.weightBot} */}