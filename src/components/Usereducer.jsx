import React, { useReducer } from 'react'
// ******************************** Use Reducer ******************************
let reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
        case "toggleText":
            return {count: state.count ,showText: !state.showText}
        default :
            return state

    }
}
const Usereducer = () => {
    const [state, dispatch] = useReducer(reducer , {count:0 , showText: true})

    return (
        <div>
            <h1>{state.count}</h1>
            <button 
                onClick={() => {
                    dispatch({type: "INCREMENT"});
                    dispatch({type: "toggleText"});
                }}
            >
            Hi
            </button>

            {state.showText && <p>Hello</p>}
        </div>
    )
}

export default Usereducer
