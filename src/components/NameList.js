import React from 'react';
import Person from './Person';

function NameList(props) {
    const persons = [
        {
            id : 1,
            name : 'Bruce',
            age : 32,
            skill : 'Businessman'
        },
        {
            id : 2,
            name : 'Clark',
            age : 35,
            skill : 'Reporter'
        },
        {
            id : 3,
            name : 'Diana',
            age : 29,
            skill : 'Model'
        }
    ]
const personList = persons.map(person => <Person key={person.id} personAtr={person}/>)
    return (
        <div>
            {personList}
        </div>
    );
}

export default NameList;