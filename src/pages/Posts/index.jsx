import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import styles from './styles'

const Posts = ({ classes }) => {
  return (
    <div className={classes.root}>
      <p>Posts page</p>
    </div>
  )
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Posts)
