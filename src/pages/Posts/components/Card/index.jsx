/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import styles from './styles'

const Card = ({ classes, title, author, body, onClick }) => {
  return (
    <div className={classes.root} onClick={onClick}>
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
  body: PropTypes.string,
  onClick: PropTypes.func
}
Card.defaultProps = {
  body: '',
  onClick: () => {}
}

export default withStyles(styles)(Card)
