import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/App'
import About from './containers/About'
import Public from './containers/Public'
import Profile from './containers/Profile'
import Gallery from './containers/Gallery'
import Setting from './containers/Setting'
import Login from './containers/Login'
import Share from './containers/Share'

export default (
    <Route path="/" component={App}>
        {/* add it here, as a child of `/` */}
        <IndexRoute component={Public}/>

        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="/public" component={Public}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/setting" component={Setting}/>
        <Route path="/share" component={Share}/>
    </Route>
)
