const styles = {
  root: {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    width: 300,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    cursor: 'pointer',

    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },

  title: {
    fontSize: 16,
    textAlign: 'center'
  },
  author: {
    fontSize: 14,
    fontWeight: 'bolder',
    fontStyle: 'italic',
    textAlign: 'center'
  }
}

export default styles
