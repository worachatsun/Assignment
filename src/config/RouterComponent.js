import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import EditPreferencesComponent from '../components/EditPreferencesComponent'

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={EditPreferencesComponent}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterComponent