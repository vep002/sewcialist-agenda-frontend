import React from 'react'
import {useState} from 'react';

export default function SignUp(props) {

    const [username, setUserName]=useState("")
    const [password, setPassword]=useState("")
    const [profile_pic, setProfilePic]=useState("")

    const formName="Register"


    // SIGNUP step 2: this function creates the formData object and runs the handleSubmit function, passing in formData object as an argumment. See App.js for next step.
    let submitHandler = (e) => {
        e.preventDefault()

        let formData={
            username: username,
            password: password,
            profile_pic: profile_pic
        }
        props.handleSubmit(formData)
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleProfilePicChange = (e) => {
        setProfilePic(e.target.value)
    }

    return (
        <div>
            {/*SIGNUP step 1: user creates their profile information and submits the form, which runs the submitHandler */}
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
            <label for="password">profile picture</label>
            <input 
            type="text" 
            id="profile_pic" 
            name="profile_pic"
            value={profile_pic}
            onChange={handleProfilePicChange}
            />
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}
