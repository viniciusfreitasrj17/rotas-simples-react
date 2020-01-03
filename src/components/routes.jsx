import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import erroLogin from './erroLogin'

const isAuthenticated = () => false

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/logout', state: { from: props.location } }} />
            )
        }
    />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => <h1>Hello World!</h1>} />
      <PrivateRoute exact path='/app' component={() => <h1>Você está logado</h1> } />
      <Route exact path='/logout' component={erroLogin} />
    </Switch>
  </BrowserRouter>
)

export default Routes