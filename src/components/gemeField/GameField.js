import {useGameField} from '../../context/GameFieldContext'
import {gameAction} from './game'


export const GameField = () => {
    const {flag, field, setField, count, player_1, player_2, single } = useGameField()
    let player = '' 
    if (!flag) {
        return null
    }
        if (count % 2 === 0) {
            player = player_1
        } else {
            player = player_2
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
                                    setField(gameAction(field, [cell.indexLine, cell.indexCell], player, single))
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