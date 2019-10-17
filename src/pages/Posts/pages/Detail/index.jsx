import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { withRouter } from 'react-router-dom'

import Card from '../../components/Card'

import db from '../../../../db'
import styles from './styles'

const PostDetail = ({ classes, match }) => {
  const [currentPost, setCurrentPost] = useState(null)

  useEffect(() => {
    setCurrentPost(db.find(data => Number(data.id) === Number(match.params.id)))
  }, [match])

  return (
    <div className={classes.root}>
      {currentPost && (
        <Card
          title={currentPost.title}
          author={currentPost.author}
          body={currentPost.body}
          fullWidth
        />
      )}
    </div>
  )
}

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(PostDetail))
