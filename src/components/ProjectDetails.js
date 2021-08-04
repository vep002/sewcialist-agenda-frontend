import React from 'react'
import AddTaskForm from './AddTaskForm'
import Tasks from './Tasks'
import Materials from './Materials'
import Images from './Images'
import AddMaterialForm from './AddMaterialForm'
import {useState, useEffect} from 'react';

export default function ProjectDetails(props) {
    
    const [description, setDescription] = useState("")
    const [start_date, setStartDate] = useState("")
    const [end_date, setEndDate] = useState("")
    const [finished, setFinished] = useState("")

    let handleDescription = (e) => {
        setDescription(e.target.value)
    }

    let handleStartDate = (e) => {
        setStartDate(e.target.value)
    }
    
    let handleEndDate = (e) => {
        setEndDate(e.target.value)
    }

    let handleFinished = (e) => {
        setFinished(e.target.value)
    }

    let handleUpdateDescription = () => {
        let formData = {
            description: description,
            id: `${props.project.id}`
        }
        console.log(formData)
        fetch(`http://localhost:3000/projects/${props.project.id}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": props.user.token
            },
            body: JSON.stringify(
                formData
            )
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            props.updateProjectDescription(res)})
    }


    let handleUpdateStartDate= () => {
        let formData = {
            start_date: start_date,
            id: `${props.project.id}`
        }
        console.log(formData)
        fetch(`http://localhost:3000/projects/${props.project.id}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": props.user.token
            },
            body: JSON.stringify(
                formData
            )
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            props.updateProjectStartDate(res)})
    }

    let handleUpdateEndDate= () => {
        let formData = {
            end_date: end_date,
            id: `${props.project.id}`
        }
        console.log(formData)
        fetch(`http://localhost:3000/projects/${props.project.id}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": props.user.token
            },
            body: JSON.stringify(
                formData
            )
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            props.updateProjectEndDate(res)})
    }

    let handleUpdateFinished= () => {
        let formData = {
            finished: finished,
            id: `${props.project.id}`
        }
        console.log(formData)
        fetch(`http://localhost:3000/projects/${props.project.id}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": props.user.token
            },
            body: JSON.stringify(
                formData
            )
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            props.updateProjectFinished(res)})
    }

    let arrayOfTasks = props.project.tasks.map((task) => {
        return(<Tasks key={task.id} task={task} user={props.user}></Tasks>)
    })

    let arrayOfMaterials = props.project.materials.map((material) => {
        return (<Materials key={material.id} content={material.description}/>)
    })

    // new task step 3a: this function sends a POST request to the /tasks resource on the backend, with the formData as it's body. It then takes the response sent from the backend and runs the addTask function. see backend code for next step.
    const handleTaskSubmit = (formData) => {
        fetch(`http://localhost:3000/tasks`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "authorization": props.user.token
        },
        body: JSON.stringify(
          formData
        )
        })
        .then(res => res.json())
        .then((res) => props.addTask(res))
    }

    const handleMaterialSubmit = (formData) => {
        fetch(`http://localhost:3000/materials`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "authorization": props.user.token
        },
        body: JSON.stringify(
          formData
        )
        })
        .then(res => res.json())
        .then((res) => props.addMaterial(res))
    }

       // Delete project step 1: the handleDelete function runs a DELETE request to the /project.id resource, which is passed down as a prop. It then takes the repsonse from the backend and runs the deleteProject function, also passed down as a prop. See backend for next step.
   let handleDelete = () => {
       console.log("step 1")
    fetch(`http://localhost:3000/projects/${props.project.id}`, {
         method: "DELETE",
         headers: {
           "Content-type": "application/json",
           "authorization": props.user.token
       },
       })
         .then((r) => r.json())
         .then((r) => {
             console.log(r)
             props.deleteProject(r.id)
            props.history.push("/profile")
            });

}


    return (
        <div>
               <h1>Description:</h1>
               <p>{props.project.description}</p>
                <label>Change project descripton</label>
                <input type="text" 
                value={description}
                onChange={handleDescription}
                ></input>
                <button onClick= {handleUpdateDescription}>Submit</button>
              <h2>Images</h2>
              <img src={props.project.mock_up}/>
              <img src={props.project.finished}/>
             <label>Add Images</label>
             <input type="text"
             value={finished}
             onChange={handleFinished}
             ></input>
             <button onClick={handleUpdateFinished}>Submit</button>
              <h2>Tasks:</h2>
                <p>{arrayOfTasks}</p> 
                <AddTaskForm handleTaskSubmit={handleTaskSubmit} project_id={props.project.id} user={props.user}/>
            <h2>Materials:</h2>
            <p>{arrayOfMaterials}</p>
            <AddMaterialForm handleMaterialSubmit={handleMaterialSubmit} project_id={props.project.id}/>
            <h2>Start Date:</h2>
            <p>{props.project.start_date}</p>
            <label>Update Start date</label>
            <input type="date"
            value={start_date}
            onChange={handleStartDate}
            ></input>
            <button onClick= {handleUpdateStartDate}>Submit</button>
            <h2>End Date:</h2>
            <p>{props.project.end_date}</p>
            <label>Update end date</label>
            <input type="date"
            value={end_date}
            onChange={handleEndDate}
            ></input>
            <button onClick= {handleUpdateEndDate}>Submit</button>
            <br/>
              <button onClick={handleDelete}>Delete</button>
                
        </div>
    )
}
