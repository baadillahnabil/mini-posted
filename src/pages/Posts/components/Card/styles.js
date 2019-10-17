const styles = {
  root: {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    width: ({ fullWidth }) => (fullWidth ? 'auto' : 300),
    height: 300,
    maxHeight: 300,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    cursor: ({ clickable }) => clickable && 'pointer',

    '&:hover': {
      boxShadow: ({ clickable }) =>
        clickable &&
        '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },

  title: {
    fontSize: 16,
    textAlign: 'center'
  },
  body: {
    fontStyle: 14,
    textAlign: 'justify',
    fontFamily: 'sans-serif'
  },
  author: {
    fontSize: 14,
    fontWeight: 'bolder',
    fontStyle: 'italic',
    textAlign: 'center'
  }
}

export default styles
