import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions
}

function quizReducer(state, action){

    console.log(state, action)

    switch(action.type){
        case "CHANCE_STATE":
            console.log("Caiu o money")
            return state

        default:
            return state
    }

}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer, initialState)

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
} 