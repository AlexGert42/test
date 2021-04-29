import React, { useContext, useReducer, useEffect } from "react"

const CREATE_GAME = "CREATE_GAME"
const REMOVE_GAME = "REMOVE_GAME"
const ACTION_GAME = "ACTION_GAME"
const PLAYER = "PLAYER"


const GameFieldContext = React.createContext()
export const useGameField = () => useContext(GameFieldContext)

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_GAME:
            if (action.payload) {
                const createField = new Array(15).fill(new Array(15).fill({}))
                const field = createField.map((line, indexLine) =>
                    line.map((cell, indexCell) => {
                        return cell = {
                            indexLine,
                            indexCell,
                            index: indexLine * 15 + indexCell,
                            weight: 0,
                            player: "",
                        }
                    })
                )

                return {
                    ...state,
                    flag: action.payload,
                    field: field,
                    count: 0,
                }
            } else {
                return {
                    ...state,
                    flag: action.payload,
                    field: "",
                }
            }
        case REMOVE_GAME:
            return { 
                ...state,
                 flag: action.payload,
                 single: false,
                 count: 0,
                 }
        case ACTION_GAME:
            return { ...state, field: action.payload, count: state.count++ }
        case PLAYER:
            return {...state, single: action.payload}
        default:
            return state
    }
}






export const GameFieldProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        flag: false,
        field: "",
        count: 0,
        single: false,

        player_1: "X",
        player_2: "O",
    })

    const create = () => dispatch({ type: CREATE_GAME, payload: true })
    const remove = () => dispatch({ type: REMOVE_GAME, payload: false })
    const setField = (newField) => dispatch({ type: ACTION_GAME, payload: newField })
    const onePlayer = (value) => dispatch({ type: PLAYER, payload: value})
    

    window.state = state

    return (
        <GameFieldContext.Provider
            value={{
                flag: state.flag,
                field: state.field,
                single: state.single,
                count: state.count,
                player_1: state.player_1,
                player_2: state.player_2,
 
                create,
                remove,
                setField,
                onePlayer,
            }}
        >
            {children}
        </GameFieldContext.Provider>
    )
}




















