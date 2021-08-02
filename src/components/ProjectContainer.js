import React from 'react'
import Project from './Project'

export default function ProjectContainer(props) {

    console.log(props.user)

    let arrayOfProjects = props.projects.map(project => {
            return (<Project key={project.id} project={project} currentUser={props.user} deleteProject={props.deleteProject} addTask={props.addTask} addMaterial={props.addMaterial}/>)
            
        })

    return (
        
        <div>
            <h2>Here is the project container</h2>
            {arrayOfProjects}
        </div>
    )
}
