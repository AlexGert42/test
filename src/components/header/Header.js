import {useGameField} from '../../context/GameFieldContext'


export const Header = () => {
    const {create, remove, onePlayer, single, player_1, player_2,count} = useGameField()
    let player = ''
    if (count % 2 === 0) {
        player = player_1
    } else {
        player = player_2
    }

    return (
        <header className="header">
            <div className="header__inner">
                <h1 className="header__tatle">Tic Toc Toe</h1>
                <div className="header__player">
                    <p>Текущий игрок: {player} </p>
                    <p>Текущий ход: {count} </p>
                </div>
                <div className="header__menu">
                    <button className="header__btn" onClick={() => create()}>create game</button>
                    <button className="header__btn" onClick={() => remove()}>remove game</button>
                    <button className="header__btn" disabled={single} style={single ? {color: 'red'} : {color: '#fff'}} onClick={() => onePlayer(true)}>one player</button>
                    <button className="header__btn" disabled={single} style={single ? {color: 'red'} : {color: '#fff'}} onClick={() => onePlayer(false)}>two player</button>
                </div>
            </div>
        </header>
    );
};
