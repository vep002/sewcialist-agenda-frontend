import React from 'react'
import AddTaskForm from './AddTaskForm'
import Tasks from './Tasks'
import Materials from './Materials'
import Images from './Images'
import AddMaterialForm from './AddMaterialForm'

export default function ProjectDetails(props) {

    let arrayOfTasks = props.project.tasks.map((task) => {
        return(<Tasks key={task.id} content={task.description}></Tasks>)
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


    return (
        <div>
               <h1>Description:</h1>
               <p>{props.project.description}</p>
                <label>Change project descripton</label>
                <input type="text"></input>
                <button>Submit</button>
              <h2>Images</h2>
             <Images project={props.project}/>
             <label>Add Images</label>
             <input type="text"></input>
             <button>Submit</button>
              <h2>Tasks:</h2>
                <p>{arrayOfTasks}</p> 
                <AddTaskForm handleTaskSubmit={handleTaskSubmit} project_id={props.project.id}/>
            <h2>Materials:</h2>
            <p>{arrayOfMaterials}</p>
            <AddMaterialForm handleMaterialSubmit={handleMaterialSubmit} project_id={props.project.id}/>
            <h2>Start Date:</h2>
            <p>{props.project.start_date}</p>
            <label>Update Start date</label>
            <input type="date"></input>
            <h2>End Date:</h2>
            <p>{props.project.end_date}</p>
            <label>Update end date</label>
            <input type="date"></input><br/>
              <button onClick={props.handleDelete}>Delete</button>
                
        </div>
    )
}
