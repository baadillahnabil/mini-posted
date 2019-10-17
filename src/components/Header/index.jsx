import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { withRouter } from 'react-router-dom'
import clsx from 'clsx'

import styles from './styles'

const Header = ({ classes, links, history }) => {
  const changePath = to => {
    history.push(to)
  }

  return (
    <div className={classes.root}>
      {links.map(link => (
        <button
          key={link.path}
          type="button"
          className={clsx(classes.button, link.isActive && classes.isActive)}
          onClick={() => changePath(link.path)}
        >
          {link.title}
        </button>
      ))}
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
}
Header.defaultProps = {}

export default withRouter(withStyles(styles)(Header))
