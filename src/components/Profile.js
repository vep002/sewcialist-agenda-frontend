import React from 'react'
import ProjectContainer from './ProjectContainer'
import NavBar from './NavBar'
import Button from '@material-ui/core/Button'
import {useState} from 'react';
import Chart from './Chart'
import {Switch, Route, withRouter} from 'react-router-dom'
import { render } from '@testing-library/react';

 function Profile(props) {

    const [description, setDescription] = useState("")
    const [mock_up, setMockUp] = useState("")
    const [start_date, setStartDate] = useState("")
    const [end_date, setEndDate] = useState("")
    // const [tasks, setTasks] = useState("")
    const [visible, setVisible] = useState(false)

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleMockUp = (e) => {
        setMockUp(e.target.value)
    }

    const handleStartDate = (e) => {
        setStartDate(e.target.value)
    }

    const handleEndDate = (e) => {
        setEndDate(e.target.value)
    }

    // const handleTasks = (e) => {
    //     setTasks(e.target.value)
    // }

    // new project step 2: creates the formData object and runs the handleProjectSubmit function passed down as a prop from App.js. See App.js for next step.
    let handleSubmit = (e) => {
        e.preventDefault()

        let formData = {
            description: description,
            mock_up: mock_up,
            start_date: start_date,
            end_date: end_date,
        }
        props.handleProjectSubmit(formData)
    }

    let handleClick = () => {
        props.history.push("/browse")
    }



    let handleLogOutClick = () => {props.handleLogout()}

    return (
        <div>
                <Button>Your Projects</Button>
                <Button
                onClick={handleClick}
                >Get Inspired</Button>
                <img class= "profile" src={props.user.profile_pic}/>
                {/* new project step 1: user enters a new project, each input changes the state, and submitting the form runs the handleSubmit function */}
                <form onSubmit={handleSubmit}>
                <h2 style= {{ fontFamily: 'Lato'}}>Add a Project</h2>
                <label>Description</label>
                <input type="text"
                name="description"
                value={description}
                onChange={handleDescription}
                ></input>
                <br/>
                <label>Mock-up Image</label>
                <input type="text"
                name="mock_up"
                value={mock_up}
                onChange={handleMockUp}
                ></input>
                <br/>
                <label>Start Date</label>
                <input type="date"
                name="start_date"
                value={start_date}
                onChange={handleStartDate}
                ></input>
                <br/>
                <label>End Date</label>
                <input type="date"
                name="end_date"
                value={end_date}
                onChange={handleEndDate}
                ></input>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            <Chart user={props.user}/>
            <ProjectContainer user={props.user} projects={props.projects} deleteProject={props.deleteProject} addTask={props.addTask} addMaterial={props.addMaterial} token={props.token} history={props.history} updateProject={props.updateProject}/>
            <button class='blue-button' onClick={handleLogOutClick}>Sign Out</button>
        </div>
    )
}

export default Profile