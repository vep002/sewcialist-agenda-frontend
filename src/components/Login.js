import React from 'react'
import {useState} from 'react';

export default function Login(props) {

    const [username, setUserName]=useState("")
    const [password, setPassword]=useState("")

    // LOGIN step 2: the submitHandler function creates the formData object, which stores the user's username and password. Then it calls the handleSubmit() function, passing in the formData as an argument. See App.js for next step.
    let submitHandler = (e) => {
        e.preventDefault()

        let formData = {
            username: username,
            password: password}
            props.handleSubmit(formData)
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const formName = "Login"

    return (
        <div>
            {/* LOGIN Step 1: user enters their login credentials and clicks the submit button, which runs the submitHandler function */}
            <form onSubmit={submitHandler}>
            <h1>{formName}</h1>
                <label for="username">username:</label>
                <input 
                type="text" 
                id="username" 
                name="username"
                value={username}
                onChange={handleUserNameChange}
                />
                <label for="password">password</label>
                <input 
                type="password" 
                id="password" 
                name="password"
                value={password}
                onChange={handlePasswordChange}
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>    
    )
}
