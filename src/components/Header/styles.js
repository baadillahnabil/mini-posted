const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

  button: {
    border: 'none',
    padding: 20,
    cursor: 'pointer',
    fontSize: 16,

    '&:focus': {
      outline: 'none'
    }
  },

  isActive: {
    borderBottom: '2px solid teal'
  }
}

export default styles
