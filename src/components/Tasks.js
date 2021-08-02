import React from 'react'

export default function Tasks(props) {
    return (
        <div>
            <li>{props.content}</li>
            <label>In Progress</label>
            <input type="checkbox" value="In Progress"></input><br/>
            <label>Completed</label>
            <input type="checkbox" value="Completed"></input>
        </div>
    )
}
