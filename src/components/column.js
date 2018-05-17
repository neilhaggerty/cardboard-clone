import React from 'react'
import Dragula from 'react-dragula';
import Card from './card'

class Column extends React.Component {

  renderCards(cards){
    if (cards) {
      let columnCards = []
      for (let count=0; count<cards.length; count++) {
        columnCards.push(<Card key={count} cardTitle={cards[count].title} />)
      }
      return (
        columnCards
      )
    }
  }

  setCardValue(e) {
      if (e.key === 'Enter'){
        this.props.updateCards(this.props.position, e.target.value)
        e.target.value = null
      }
  }


  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      Dragula([componentBackingInstance], options)
    }
  }

  render() {
    return (
      <div style={styles.column} className="column">
        <div style={styles.header}>{this.props.text}</div>
        <div ref={this.dragulaDecorator}>
          {this.renderCards(this.props.cards)}
          <input
            style={styles.input}
            type="text"
            placeholder="Card Title..."
            onKeyPress={this.setCardValue.bind(this)}
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
    margin: '0.5em auto',
    textAlign: 'center',
    display: 'block'
  }
}

export default Column