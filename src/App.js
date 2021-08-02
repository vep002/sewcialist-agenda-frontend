import './App.css';
import React from 'react'
import {Switch, Link, Route, withRouter, Redirect, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import {useState, useEffect} from 'react';

function App(props) {

  const [currentUser, setCurrentUser]=useState({
    id: 0,
    username: "",
    profile_pic: "",
    projects: [],
    token:""
  })

  useEffect(() => {
    if(localStorage.token){

      fetch("http://localhost:3000/me", {
        headers: {
          "authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then((res) => handleResponse(res))

    }
  }, [])


  // LOGIN step 3a: the handleSubmit prop passed down to Login.js is the handleLoginSubmit here. This function takes in the formData stored in Login.js and runs a fetch POST request to the backend /login resource. The body of this POST is the formData. Finally, this request takes what it recieves from the backend and runs the handleResponse function. See backend code for the response sent from the backend.
  const handleLoginSubmit = (formData) => {
    // console.log(formData)

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        formData
      })
    })
    .then(res => res.json ())
    .then((res) => handleResponse(res))
  }

  // SignUp step 3a: the handleSubmit prop passed down to Signup.js is the handleSignUpSubmit here. This function takes in the formData stored in Signup.js and runs a fetch POST request to the backend /users resource. The body of this POST is the formData. Finally, this request takes what it recieves from the backend and runs the handleSignUpResponse function. See backend code for the response sent from the backend.
  const handleSignUpSubmit = (formData) => {
    console.log(formData)

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(
        formData
      )
    })
    .then(res => res.json())
    .then((res) => handleSignUpResponse(res))
  }

  // LOGIN step 4: this method takes the response from the backend and checks if a token is sent. If so, it sets the state of the App.js component with that user's information. It also saves the unique token in localStorage. It also routes to the /profile resource. If no token is found, the alert with the error message is rendered.
  let handleResponse = (res) => {
    // console.log(res)
    // console.log(res.user)
    if (res.token) {
      setCurrentUser({
        id: res.user.id,
        username: res.user.username,
        profile_pic: res.user.profile_pic,
        token: res.token,
        projects: res.user.projects,
      })
      localStorage.token = res.token
      props.history.push("/profile")
    } else {
      alert ("username or password is incorrect")
    }
  }

  // SIGNUP step 4: this method takes the response from the backend and checks if errors were sent. If so, it alerts the user with the error message. Otherwise it alerts that a new user was created and pushes to the login page.
  let handleSignUpResponse = (res) => {
    if(res.errors) {
      alert(res.errors)
    } else 
    alert("New User Registered!")
    props.history.push("/login")
  }

  // new project step 3a: this function takes in the formData object and runs a POST request to the /projects resource on the backend. Then takes the response from the backend and runs the addProjectToState function. See backend for next step.
  let handleProjectSubmit = (formData) => {
    fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "authorization": currentUser.token
        },
        body: JSON.stringify(
          formData
        )
        })
        .then(res => res.json())
        .then((res) => addProjectToState(res))
  }

  // new project step 4: takes in the new project and pushes it into the user's projects array. Updates the state of the currentUser to include the new projects array.
  let addProjectToState = (newProject) => {
    console.log(currentUser.projects)
    let copyOfProjects= [...currentUser.projects, newProject]
    console.log(newProject)
    console.log(copyOfProjects)

   
    setCurrentUser({
     id: currentUser.id,
     username: currentUser.username,
     profile_pic: currentUser.profile_pic,
     token: currentUser.token,
     projects: copyOfProjects,
    })
  }

  // Delete project step 3: takes the deleted projectId sent from the backend as an argument. Creates a new copy of the projects array with the deleted project removed. sets the state of the current user with the new projects array.
  let deleteProject = (deletedId) => {
    let copyOfProjects = currentUser.projects.filter((projectObj) => {
      return projectObj.id !== deletedId
    })
    setCurrentUser({
     id: currentUser.id,
     username: currentUser.username,
     profile_pic: currentUser.profile_pic,
     token: currentUser.token,
     projects: copyOfProjects,
    })
    console.log(currentUser.projects)
  }

// new task step 4: the addTask function takes in the new task sent from the backend. creates the projectForTask variable which represents the project associated with the new task. then creates the newArrayOfTasks, which adds the new task into the appropriate project array. then creates a copy of the project, adding the newArrayOfTasks into the copied project array. finally, runs the replaceProjectinState function.
const addTask = (task) => {
  let projectForTask = currentUser.projects.find(project => {
    return project.id === task.project_id
  })

  let newArrayOfTasks = [...projectForTask.tasks, task]

  let copyOfProject = {
    ...projectForTask,
    tasks: newArrayOfTasks
  }

  replaceProjectinState(copyOfProject)
}

  // new task step 5: takes in copyOfProject as an arguement. creates copyOfAllProjects variable, which maps over the projects belonging to the currentUser stored in state and checks whether each project id matches the copied project id. if a match is found, then returns the copied project. if not, returns the original project. finally, sets the currentUser's projects to the copyOfAllProjects.
  const replaceProjectinState = (copyOfProject) => {
    let copyOfAllProjects = currentUser.projects.map(project => {
      if(project.id === copyOfProject.id) {
        return copyOfProject
      } else {
        return project
      }
    })
    setCurrentUser({
      ...currentUser,
      projects:copyOfAllProjects
    })
  }

  const addMaterial = (material) => {
    let projectForMaterial = currentUser.projects.find(project => {
      return project.id === material.project_id
    })
  
    let newArrayOfMaterials = [...projectForMaterial.materials, material]
  
    let copyOfProject = {
      ...projectForMaterial,
      materials: newArrayOfMaterials
    }
  
    replaceProjectinState(copyOfProject)
  }

  let handleLogout = () => {
    localStorage.clear()
    setCurrentUser({
        id: 0,
        username: "",
        profile_pic: "",
        token: "",
        projects: []
    })
  }
  
   

  const renderForm = (routerProps) => {
    console.log(routerProps)
    if(routerProps.location.pathname === "/login"){
      return <Login handleSubmit={handleLoginSubmit} style={{
        fontFamily: 'Lato'
      }}/>
    } else if (routerProps.location.pathname === "/signup") {
      return <SignUp handleSubmit={handleSignUpSubmit} style={{
        fontFamily: 'Lato'
      }}/>
    }
  }


  const renderProfile = (routerProps) => {
    console.log(routerProps)
    return <Profile user={currentUser}
    projects={currentUser.projects}
    handleProjectSubmit={handleProjectSubmit}
    deleteProject = {deleteProject}
    addTask={addTask}
    addMaterial={addMaterial}
    token={currentUser.token}
    handleLogout={handleLogout}
    style={{
      fontFamily: 'Lato'
    }}
    />
  }



  return (
    <div className="App" style={{backgroundImage: `url(https://res.cloudinary.com/dz2jdgus7/image/upload/v1627863138/final%20project%20images/Untitled_design_4_myvlvt.png)`
    }}>
      <NavBar/>
      <Switch>
        <Route path="/login" render={ renderForm }/>
        <Route path="/signup" render={ renderForm } />
        <Route path="/profile" render={ renderProfile } />
        <Route path={'/'}>
          <Home 
          handleLoginSubmit={handleLoginSubmit}
          handleSignUpSubmit={handleSignUpSubmit}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);

