import {useGameField} from '../../context/GameFieldContext'


export const Header = () => {
    const {create, remove} = useGameField()

    return (
        <header className="header">
            <div className="header__inner">
                <h1 className="header__tatle">Tic Toc Toe</h1>
                <div className="header__menu">
                    <button className="header__btn" onClick={() => create()}>create game</button>
                    <button className="header__btn" onClick={() => remove()}>remove game</button>
                </div>
            </div>
        </header>
    );
};
