import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { maxBy } from 'lodash'

import InputField from '../../../../components/Input/Field'
import InputLabel from '../../../../components/Input/Label'
import Button from '../../../../components/Button'

import db from '../../../../db'
import styles from './styles'

const AddPost = ({ classes, history }) => {
  const onAdd = values => {
    const newId = maxBy(db, 'id')
    db.push({
      author: values.author,
      id: newId.id + 1,
      title: values.title,
      body: values.content
    })
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          title: '',
          content: '',
          author: ''
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required('Title is needed!'),
          content: Yup.string().required('Content is needed!'),
          author: Yup.string().required('Author is needed!')
        })}
        onSubmit={onAdd}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form className={classes.form}>
            <Field name="title">
              {({ field }) => (
                <div className={classes.fieldWrapper}>
                  <InputLabel>Title</InputLabel>
                  <InputField {...field} type="text" />
                  <InputLabel type="error">
                    {errors.title && touched.title && errors.title}
                  </InputLabel>
                </div>
              )}
            </Field>
            <Field name="content">
              {({ field }) => (
                <div className={classes.fieldWrapper}>
                  <InputLabel>Content</InputLabel>
                  <textarea
                    {...field}
                    cols="30"
                    rows="10"
                    className={classes.content}
                  />
                  <InputLabel type="error">
                    {errors.content && touched.content && errors.content}
                  </InputLabel>
                </div>
              )}
            </Field>
            <Field name="author">
              {({ field }) => (
                <div className={classes.fieldWrapper}>
                  <InputLabel>Author</InputLabel>
                  <InputField {...field} type="text" />
                  <InputLabel type="error">
                    {errors.author && touched.author && errors.author}
                  </InputLabel>
                </div>
              )}
            </Field>

            <Button onClick={handleSubmit}>Add Post</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

AddPost.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(AddPost))
