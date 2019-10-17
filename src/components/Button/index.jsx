import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import styles from './styles'

const Button = ({ classes, children, ...props }) => {
  return (
    <div className={classes.root}>
      <button type="button" className={classes.button} {...props}>
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
}
Button.defaultProps = {}

export default withStyles(styles)(Button)
