import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import ProjectDetails from './ProjectDetails';
// import AddTaskForm from './AddTaskForm';

export default function Project(props) {

    // let arrayOfTasks = props.project.tasks.map((task) => {
    //     return(<li key={task.id}>{task.description}</li>)
    // })

    // Delete project step 1: the handleDelete function runs a DELETE request to the /project.id resource, which is passed down as a prop. It then takes the repsonse from the backend and runs the deleteProject function, also passed down as a prop. See backend for next step.
    let handleDelete = () => {
        fetch(`http://localhost:3000/projects/${props.project.id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              "authorization": props.currentUser.token
          },
          })
            .then((r) => r.json())
            .then((r) => props.deleteProject(r.id));
    }

    const image = {
        cardContainer: {
            backgroundImage: `url(${props.project.mock_up})`
        }
    }

    // let viewProjectDetails = () => {
    //     return (<ProjectDetails handleDelete={handleDelete} project={props.project}/>)
    // }
    return (
        <div>
        <Card style= {image.cardContainer}>
              {/* <h1>Description:</h1> */}
              <p>{props.project.description}</p>
              {/* <h2>Mock up:</h2>
              {/* <img src={}/> */}
              {/* <h2>Tasks:</h2>
              <p>{arrayOfTasks}</p> */} 
              <button>View</button>
              {/* <button>Update</button> */}
              {/* <button onClick={handleDelete}>Delete</button> */}
                {/* <AddTaskForm/> */}
            </Card>
            <ProjectDetails addTask={props.addTask} addMaterial={props.addMaterial} handleDelete={handleDelete} project={props.project}/>
        </div>
    )
}
