import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import Card from '../../components/Card'

import db from '../../db/data.json'
import styles from './styles'

const Posts = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.cardsWrapper}>
        {db.map(data => (
          <Card key={data.id} title={data.title} author={data.author} />
        ))}
      </div>
    </div>
  )
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Posts)
