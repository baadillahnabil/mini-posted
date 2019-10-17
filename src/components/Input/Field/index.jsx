import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import styles from './styles'

const InputField = ({ classes, ...props }) => {
  return (
    <div className={classes.root}>
      <input className={classes.input} {...props} />
    </div>
  )
}

InputField.propTypes = {
  classes: PropTypes.object.isRequired
}
InputField.defaultProps = {}

export default withStyles(styles)(InputField)
