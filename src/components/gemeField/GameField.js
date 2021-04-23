import {useGameField} from '../../context/GameFieldContext'
import {useEffect} from 'react'
import {gameAction} from './game'


export const GameField = () => {
    const {flag, field, setField} = useGameField()
    useEffect(()=> {
        console.log('render');
    }, [gameAction])
    if (!flag) {
        return null
    }

    return (
        <main className="game_field">
            <div className="container">
                <div className="game_field__inner">
                    {field.map(line => line.map(cell => {
                        return (
                            <div className="game_field__cell"
                            style={cell.weight == 0 ? {color: 'black'} : {color: 'red', fontWeight: 'bold', fontSize: '2rem'}}
                            onClick={() => setField(gameAction(field,[cell.indexLine, cell.indexCell]))}
                            key={cell.index}
                            >{cell.weight} <br/>{cell.player}</div>
                        )
                    }))}
                </div>
            </div>
        </main>
    )
}