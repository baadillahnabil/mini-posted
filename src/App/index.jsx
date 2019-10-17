import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import styles from './styles'

import Header from '../components/Header'
import Posts from '../pages/Posts'
import PostDetail from '../pages/Posts/pages/Detail'
import AddPost from '../pages/Posts/pages/Add'
import PasswordGenerator from '../pages/PasswordGenerator'

const App = ({ classes, location }) => {
  return (
    <div className={classes.root}>
      <Header
        links={[
          {
            path: '/',
            title: 'Posts',
            isActive: location.pathname === '/'
          },
          {
            path: '/new-post',
            title: 'Add Post',
            isActive: location.pathname === '/new-post'
          },
          {
            path: '/password-generator',
            title: 'Password Generator',
            isActive: location.pathname === '/password-generator'
          }
        ]}
      />

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
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(App))
