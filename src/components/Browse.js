import React from 'react'
import {useState, useEffect} from 'react';
import ProjectContainer from './ProjectContainer'
import Project from './Project'
import Button from '@material-ui/core/Button'

export default function Browse(props) {

    const [projects, setProjects] =useState([])
    
    useEffect(() => {
        fetch(`http://localhost:3000/projects`)
        .then((r) => r.json())
        .then((projectsArray) => {
            setProjects(projectsArray)
        });
    }, [])

    let arrayOfProjects = projects.map(project => {
        return (<Project key={project.id} project={project} history={props.history}/>) 
    }) 

    let handleClick = () => {
        props.history.push("/profile")
    }

    return (
        <div>
            <Button
            onClick={handleClick}>Your Projects</Button>
            <Button>Get Inspired</Button>
            {arrayOfProjects}
        </div>
    )
}
