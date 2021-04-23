import React, { useContext, useReducer, useEffect } from "react"

const CREATE_GAME = "CREATE_GAME"
const REMOVE_GAME = "REMOVE_GAME"
const ACTION_GAME = "ACTION_GAME"

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
                }
            } else {
                return {
                    ...state,
                    flag: action.payload,
                    field: "",
                }
            }
        case REMOVE_GAME:
            return { ...state, flag: action.payload }
        case ACTION_GAME:
            return { ...state, field: action.payload }
        default:
            return state
    }
}






export const GameFieldProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        flag: false,
        field: "",
    })

    const create = () => dispatch({ type: CREATE_GAME, payload: true })
    const remove = () => dispatch({ type: REMOVE_GAME, payload: false })
    const setField = (newField) => dispatch({ type: ACTION_GAME, payload: newField })

    window.state = state

    return (
        <GameFieldContext.Provider
            value={{
                flag: state.flag,
                field: state.field,
                create,
                remove,
                setField,
            }}
        >
            {children}
        </GameFieldContext.Provider>
    )
}




















