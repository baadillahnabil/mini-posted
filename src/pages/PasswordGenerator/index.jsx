import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import InputField from '../../components/Input/Field'
import Button from '../../components/Button'

import styles from './styles'

const PasswordGenerator = ({ classes }) => {
  const [password, setPassword] = useState('')

  const onGeneratePassword = () => {
    const chars =
      'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let pass = ''
    for (let x = 0; x < 12; x += 1) {
      const i = Math.floor(Math.random() * chars.length)
      pass += chars.charAt(i)
    }
    setPassword(pass)
  }

  return (
    <div className={classes.root}>
      <InputField
        type="text"
        placeholder="Click Generate Password below"
        value={password}
        readOnly
      />
      <Button
        onClick={onGeneratePassword}
        customClasses={{ button: classes.button }}
      >
        Generate Password
      </Button>
    </div>
  )
}

PasswordGenerator.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PasswordGenerator)
