import React, {useState} from 'react';

function Box2(props) {
    const [ageCounter, setAgeCounter] = useState(props.age);

    return (
        <div onClick={() => setAgeCounter(Number(ageCounter) + 1)}>
            <p>Name: {props.name}</p>
            <p>I am {ageCounter} years old.</p>
            <p>The coolest color is {props.color}.</p>
        </div>
    )
}

export default Box2;