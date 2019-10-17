import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import clsx from 'clsx'

import styles from './styles'

const InputLabel = ({ classes, children, type, ...props }) => {
  return (
    <div className={classes.root}>
      <p
        className={clsx(classes.label, type === 'error' && classes.error)}
        {...props}
      >
        {children}
      </p>
    </div>
  )
}

InputLabel.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
  type: PropTypes.oneOf(['normal', 'error'])
}
InputLabel.defaultProps = {
  children: '',
  type: 'normal'
}

export default withStyles(styles)(InputLabel)
