import React from 'react'

// function Greet(){
//     return <h1>Hello Sourav</h1>
// }

const Greet = props => {
    return (
    <div>
        <h1>THis is {props.name} aka {props.heroname}</h1>
        {props.children}
    </div>
    )
}

export default Greet;