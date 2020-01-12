import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import DashBoard from './component/DashBoard'
import Login from './component/Login'
import Add from './component/Add'
import View from './component/View'
import Edit from './component/Edit'

function App() {
  return (
    <BrowserRouter>
       <Route exact path="/" render={props => <Login {...props}/>}/>
       <Route  path="/dashboard" render={props => <DashBoard {...props}/> }/>
       <Route  path="/add" render={props => <Add {...props}/> }/>
       <Route  path="/edit/:id" render={props => <Edit {...props}/> }/>
       
       <Route  path="/view" render={props => <View {...props}/> }/>
       
    </BrowserRouter>
  )
}

export default App
