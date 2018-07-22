import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pikka/PhotoPikka'
import CreatePikka from './Pikka/CreatePikka'
import SignIn from './Auth/SignIn'
import SignOut from './Auth/SignOut'
import SignUp from './Auth/SignUp' 

const Main = (props) => (
 <Switch>
   <Route path='/' exact component={Home} />
   {/* <Route path='/signin' component={SignIn} /> */}
   <Route path='/signin' render={() => <SignIn loginPass={props.loginPass} loginNotPass={props.loginNotPass}/>} />
   <Route path='/signup' component={SignUp} />
   <Route path='/signout' component={SignOut} />
   <Route path='/createpage' component={CreatePikka} />
 </Switch>
)

export default Main