const styles = {
  root: {},

  button: {
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: 16,
    backgroundColor: 'teal',
    borderRadius: 5,
    color: 'white',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    width: ({ fullWidth }) => fullWidth && '100%',

    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
    }
  }
}

export default styles
