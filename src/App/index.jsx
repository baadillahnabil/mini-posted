import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { Switch, Route, Redirect } from 'react-router-dom'

import styles from './styles'

import Posts from '../pages/Posts'
import PostDetail from '../pages/Posts/Detail'
import AddPost from '../pages/Posts/Add'
import PasswordGenerator from '../pages/PasswordGenerator'

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/post/:id" exact component={PostDetail} />
        <Route path="/new-post" exact component={AddPost} />
        <Route path="/password-generator" exact component={PasswordGenerator} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
