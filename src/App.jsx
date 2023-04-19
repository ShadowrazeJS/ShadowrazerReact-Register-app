import React, { createContext, useReducer } from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { authReducer, initialState } from './store/authReducer'

export const AuthContext = createContext()

const App = () => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />}/>
      </Routes>
    </AuthContext.Provider>
  )
}

export default App

