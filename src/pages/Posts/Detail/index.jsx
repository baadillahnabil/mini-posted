import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import styles from './styles'

const PostDetail = ({ classes }) => {
  return (
    <div className={classes.root}>
      <p>Post detail page</p>
    </div>
  )
}

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PostDetail)
