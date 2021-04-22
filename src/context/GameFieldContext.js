import React, { useContext, useReducer } from "react";

const CREATE_GAME = "CREATE_GAME";
const REMOVE_GAME = "REMOVE_GAME";
const ACTION_GAME = "ACTION_GAME";

const GameFieldContext = React.createContext();
export const useGameField = () => useContext(GameFieldContext);

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_GAME:
            if (action.payload) {


                const createField = new Array(15).fill(new Array(15).fill({}));
                const field = createField.map((line, indexLine) =>
                line.map((cell, indexCell) => {
                    return (cell = {
                        indexLine,
                        indexCell,
                        index: indexLine * 15 + indexCell,
                        weight: 0,
                        player: '',
                    });
                }))

                
                return {
                    ...state,
                    flag: action.payload,
                    field: field
                }
            }
            return { ...state, flag: action.payload };
        case REMOVE_GAME:
            return { ...state, flag: action.payload };
        case ACTION_GAME:
            let newField = state.field;
            newField[action.payload[0]][action.payload[1]].weight = 0;
            newField[action.payload[0]][action.payload[1]].player = 'X';
            
            for (let i = 1; i < 6; i++) {
                if (action.payload[0] + i >= 0 && action.payload[0] + i <= 14) {
                    newField[action.payload[0] + i][
                        action.payload[1]
                    ].weight += 10;
                }
                if (action.payload[0] - i >= 0 && action.payload[0] - i <= 14) {
                    newField[action.payload[0] - i][
                        action.payload[1]
                    ].weight += 10;
                }
                if (action.payload[1] + i >= 0 && action.payload[1] + i <= 14) {
                    newField[action.payload[0]][
                        action.payload[1] + i
                    ].weight += 10;
                }
                if (action.payload[1] - i >= 0 && action.payload[1] - i <= 14) {
                    newField[action.payload[0]][
                        action.payload[1] - i
                    ].weight += 10;
                }
                if (action.payload[0] + i >= 0 && action.payload[0] + i <= 14 && action.payload[1] - i >= 0 && action.payload[1] - i <= 14) {
                    newField[action.payload[0] + i][action.payload[1] - i].weight += 10;
                }
                if (action.payload[0] - i >= 0 && action.payload[0] - i <= 14 && action.payload[1] + i >= 0 && action.payload[1] + i <= 14) {
                    newField[action.payload[0] - i][action.payload[1] + i].weight += 10;
                }

                if (action.payload[0] + i >= 0 && action.payload[0] + i <= 14 && action.payload[1] + i >= 0 && action.payload[1] + i <= 14) {
                    newField[action.payload[0] + i][action.payload[1] + i].weight += 10;
                }
                if (action.payload[0] - i >= 0 && action.payload[0] - i <= 14 && action.payload[1] - i >= 0 && action.payload[1] - i <= 14) {
                    newField[action.payload[0] - i][action.payload[1] - i].weight += 10;
                }
                
            }

            return { ...state, field: newField };
        default:
            return state;
    }
};

export const GameFieldProvider = ({ children }) => {
    


    
    const [state, dispatch] = useReducer(reducer, {
        flag: false,
        field: '',
    });
    // if (state.flag) {
    //     const createField = new Array(15).fill(new Array(15).fill({}));
    //     field = createField.map((line, indexLine) =>
    //     line.map((cell, indexCell) => {
    //         return (cell = {
    //             indexLine,
    //             indexCell,
    //             index: indexLine * 15 + indexCell,
    //             weight: 0,
    //             player: '',
    //         });
    //     })
    // );
    // }
    






    const create = () => dispatch({ type: CREATE_GAME, payload: true });
    const remove = () => dispatch({ type: REMOVE_GAME, payload: false });
    const action = (index) => dispatch({ type: ACTION_GAME, payload: index });

    window.state = state;

    return (
        <GameFieldContext.Provider
            value={{
                flag: state.flag,
                field: state.field,
                create,
                remove,
                action,
            }}
        >
            {children}
        </GameFieldContext.Provider>
    );
};
