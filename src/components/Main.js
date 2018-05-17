import 'normalize.css/normalize.css';
import 'styles/App.css';
import Column from './column';
import React from 'react';
import ColumnCreator from './columnCreator';


class AppComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      board: {
        columns: [
          {
            position: 1,
            text: 'To Do',
            cards: [
              {
                title: 'Card1'
              },
              {
                title: 'Card2'
              }
            ]
          }
        ]
      }
    }
  }

  renderColumns(board) {
    let columns = board.columns
    if (columns) {
      let boardColumns = []
      for (let count=0; count<columns.length; count++) {
        boardColumns.push(
          <Column
            key={count}
            position={columns[count].position}
            text={columns[count].text}
            cards={columns[count].cards}
            updateCards={this.updateCards.bind(this)}
          />)
      }
      return (
        boardColumns
      );
    }
  }

  updateCards(columnKey, cardTitle) {
    let board = {...this.state.board}
    board.columns[columnKey-1].cards.push({title: cardTitle})
    this.setState({board})
  }

  addColumn(colPosition, columnTitle) {
    let board = {...this.state.board}
    board.columns.push({position: colPosition, text: columnTitle, cards: []})
    this.setState({board})
  }

  render() {
    return (
      <div className="board" style={styles.layout}>
        {this.renderColumns(this.state.board)}
        <ColumnCreator
          position={this.state.board.columns.length+1}
          addColumn={this.addColumn.bind(this)}
        />
      </div>
    );
  }
}

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '5em'
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
