import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { withRouter } from 'react-router-dom'

import Card from './components/Card'

import db from '../../db'
import styles from './styles'

const Posts = ({ classes, history }) => {
  return (
    <div className={classes.root}>
      <div className={classes.cardsWrapper}>
        {db.map(data => (
          <Card
            key={data.id}
            title={data.title}
            author={data.author}
            clickable
            onClick={() => history.push(`/post/${data.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(Posts))
