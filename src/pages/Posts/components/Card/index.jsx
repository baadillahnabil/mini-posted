import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import styles from './styles'

const Card = ({ classes, title, author, body, ...props }) => {
  return (
    <div className={classes.root} {...props}>
      <p className={classes.title}>{title}</p>
      {body !== '' && <p className={classes.body}>{body}</p>}
      <p className={classes.author}>&quot;{author}&quot;</p>
    </div>
  )
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string
}
Card.defaultProps = {
  body: ''
}

export default withStyles(styles)(Card)
