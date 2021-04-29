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
                            style={cell.weight == 0 ? {color: 'black'} : {color: 'red', fontWeight: 'bold', fontSize: '1.5rem'}}
                            onClick={() => {
                                if (cell.weight === null) {
                                    return null
                                } else {
                                    if (single) {
                                        player = 'X'
                                        setField(gameAction(field, [cell.indexLine, cell.indexCell], player))
                                    } else {
                                        
                                        setField(gameAction(field, [cell.indexLine, cell.indexCell], player))
                                    }
                                }
                               
                            }}
                            key={cell.index}
                            >{cell.player} <br/>{cell.weight}</div>
                        )
                    }))}
                </div>
            </div>
        </main>
    )
}

{/* <br/>{cell.weight} */}