import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import clsx from 'clsx'

import styles from './styles'

const Button = ({ classes, children, customClasses, ...props }) => {
  return (
    <div className={classes.root}>
      <button
        type="button"
        className={clsx(classes.button, customClasses.button)}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  customClasses: PropTypes.objectOf(PropTypes.string)
}
Button.defaultProps = {
  customClasses: {
    button: ''
  }
}

export default withStyles(styles)(Button)
