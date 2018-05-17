import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div style={styles.card} className="card">{this.props.cardTitle}</div>
    )
  }
}

const styles = {
  card: {
    width: '10em',
    border: '0.1em solid grey',
    padding: '0.5em',
    margin: '0.5em auto',
    color: 'grey',
    textAlign: 'center'
  }
}

export default Card