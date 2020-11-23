import React from 'react';

function Person({personAtr}) {
    return (
        <div>
            <h2>I am {personAtr.name}. my age age is {personAtr.age} and skill is {personAtr.skill}</h2>
        </div>
    );
}

export default Person;