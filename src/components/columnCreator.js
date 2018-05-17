import React from 'react'

class ColumnCreator extends React.Component {

  setColumnValue(event, position) {
      if (event.key === 'Enter'){
        this.props.addColumn(position, event.target.value)
        event.target.value = null
      }
  }

  render() {
    return (
      <div style={styles.column} className="column">
        <div style={styles.header}>{this.props.text}</div>
        <div>
          <input
            style={styles.input}
            type="text"
            placeholder="New Column Title..."
            onKeyPress={(event) => this.setColumnValue(event, this.props.position)}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  column: {
    width: '20em',
    border: '0.1em solid red',
    padding: '0.5em',
    margin: '0.5em',
    color: 'grey',
    flex: 'column'
  },
  header: {
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    width: '10em',
    padding: '0.5em',
    margin: '0.5em',
    textAlign: 'center'
  }
}

export default ColumnCreator