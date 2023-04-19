import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../App'
import { authReducer, initialState } from '../../store/authReducer'
import './Register.scss'
const Register = () => {
const {state, dispatch} = useContext(AuthContext)
const navigate = useNavigate()


useEffect (() => {
	if(state.isLogged) {
		navigate('/', {replace: true})
	}
}, [])


	console.log(state)
	return (
		<div className='auth-container'>
			<form className='auth-form'>
				<h1>Register</h1>
				<input placeholder='Enter your name!' type='text' required/>
				<input placeholder='Enter your phone number!' type='text' required/>
				<input placeholder='Enter your password!' type='password' required/>
				<button>Registration</button>
			</form>
		</div>
	)
}

export default Register
