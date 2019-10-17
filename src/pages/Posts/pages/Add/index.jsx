import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import styles from './styles'

const AddPost = ({ classes }) => {
  return (
    <div className={classes.root}>
      <p>Add post page</p>
    </div>
  )
}

AddPost.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AddPost)
