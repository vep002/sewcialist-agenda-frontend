import { requirePropFactory } from '@material-ui/core'
import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default function Home(props) {
    return (
        <div>
           <Login handleSubmit={props.handleLoginSubmit}></Login>
           <SignUp handleSubmit={props.handleSignUpSubmit}></SignUp>
        </div>
    )
}
