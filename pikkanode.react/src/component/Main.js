import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pikka/PhotoPikka'
import SignIn from './Auth/SignIn'
import SignOut from './Auth/SignOut'
import SignUp from './Auth/SignUp' 

const Main = () => (
 <Switch>
   <Route path='/' exact component={Home} />
   <Route path='/signin' component={SignIn} />
   <Route path='/signup' component={SignUp} />
   <Route path='/signout' component={SignOut} />
 </Switch>
)

export default Main