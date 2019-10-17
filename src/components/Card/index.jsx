import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import styles from './styles'

const Card = ({ classes, title, author, ...props }) => {
  return (
    <div className={classes.root} {...props}>
      <p className={classes.title}>{title}</p>
      <p className={classes.author}>&quot;{author}&quot;</p>
    </div>
  )
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default withStyles(styles)(Card)
