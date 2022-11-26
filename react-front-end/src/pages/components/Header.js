import React from "react";


export default function Header(props) {
    return (
        <header>

            <span>Workout tracker</span>
            <span>Hello, {'user'}</span>
            <button>logout</button>

        </header>

    )
}