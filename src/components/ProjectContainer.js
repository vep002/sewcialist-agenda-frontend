import React from 'react'
import Project from './Project'

export default function ProjectContainer(props) {

    console.log(props)

    let arrayOfProjects = props.projects.map(project => {
            return (<Project key={project.id} project={project} currentUser={props.user} deleteProject={props.deleteProject} addTask={props.addTask} addMaterial={props.addMaterial} history={props.history} updateProject={props.updateProject}/>)
            
        })

    return (
        
        <div>
            {arrayOfProjects}
        </div>
    )
}
