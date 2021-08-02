import React from 'react'
import {useState} from 'react'


export default function AddTaskForm(props) {

    const [description, setDescription] = useState("")

    const [start_date, setStartDate] = useState("")

    const [end_date, setEndDate] = useState("")

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleStartDate = (e) => {
        setStartDate(e.target.value)
    }

    const handleEndDate = (e) => {
        setEndDate(e.target.value)
    }

    // new task step 2:  the handleSubmit function creates the formData object and runs the handleTaskSubmit function which is passed down as a prop from ProjectDetails.js. see ProjectDetails.js for next step.
    let handleSubmit = (e) => {
        e.preventDefault()

        let formData = {
            description: description,
            start_date: start_date,
            end_date: end_date,
            project_id: `${props.project_id}`
        }
        props.handleTaskSubmit(formData)
    }


    return (
        <div>
          {/* new task step 1: user enters new task information and when the form is submitted, the handleSubmit function is run */}
              <form onSubmit={handleSubmit}> 
              <h2>Add a Task</h2>    
              <label>Description</label>
                <input type="text"
                name="description"
                value= {description}
                onchange= {handleDescription}
                ></input>
                <br/>
                <label>Start Date</label>
                <input type="text"
                name="start_date"
                value={start_date}
                onChange={handleStartDate}
                ></input>
                <br/>
                <label>End Date</label>
                <input type="text"
                name="end_date"
                value={end_date}
                onChange={handleEndDate}
                ></input>
                <br/>
                <input type="submit" value="Submit"/>
              </form>
        </div>
    )
}

