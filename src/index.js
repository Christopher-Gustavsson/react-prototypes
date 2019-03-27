import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => {
    return (Math.floor(Math.random() * 1000)+1);
}

const user = {
    name: "Chris",
    luckyNumber: luckyNumber()
};

const greeting = (user) => {
    return(
        <div className="container">
            <h1>Hello {user.name}</h1>
            <h2 className="text-muted">Your lucky number is {user.luckyNumber}</h2>
        </div>
    );
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);



