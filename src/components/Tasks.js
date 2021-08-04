import React from 'react'
import {useState} from 'react'

export default function Tasks(props) {

    const [completed, setCompleted] = useState(false)


    
    let handleClick = () => {
        if (completed===false) {setCompleted(true)
        }else {setCompleted(false)}
        fetch(`http://localhost:3000/tasks`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "authorization": props.user.token
            },
            body: JSON.stringify({
              completed
            })
            })
            // .then(res => res.json())
            // .then((res) => props.completeTask(res))
        }
    

    return (
        <div>
            <li>{props.task.description}, {props.task.start_date}, {props.task.end_date}</li>
            <label>Completed</label>
            <input type="checkbox" value="completed" onClick={handleClick}></input>
        </div>
    )
}
