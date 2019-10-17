import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import styles from './styles'

const PasswordGenerator = ({ classes }) => {
  return (
    <div className={classes.root}>
      <p>Password generator page</p>
    </div>
  )
}

PasswordGenerator.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PasswordGenerator)
