import {useGameField} from '../../context/GameFieldContext'


export const GameField = () => {
    const {flag, field, action} = useGameField()
    if (!flag) {
        return null
    }
    // const clickCell = () => {
    //     console.log();
    // }


    return (
        <main className="game_field">
            <div className="container">
                <div className="game_field__inner">
                    {field.map(line => line.map(cell => {
                        return (
                            <div className="game_field__cell"
                            onClick={() => action([cell.indexLine, cell.indexCell])}
                            key={cell.index}
                            >{cell.weight} <br/>{cell.player}</div>
                        )
                    }))}
                    {/* {field.map(cell => {
                        return (
                            <div className="game_field__cell"
                            onClick={() => action(cell.index)}
                            key={cell.index}
                            >{cell.weight}</div>
                        )
                    })} */}
                </div>
            </div>
        </main>
    )
}