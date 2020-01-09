import React from 'react';
import './index.css';
import { validateMatrix } from '../../utils';

class GameGrid extends React.Component { 

    constructor(props){
        super(props);
        this.state = this.getInitialState()
    }

    getInitialState = () => {
        return {
            grid : [['#','#','#'],['#','#','#'],['#','#','#']],
            turn : this.props.player === 'O' ? 'Player' : 'Computer',
            score : 'O'
        }
    }

    populate = ( event , x, y ) => {
        const value = this.state.grid[x][y];
        
        if(value === '#'){
            this.setState((prevState) => {
                let myGrid = prevState.grid;
                myGrid[x][y] = prevState.score;
                return {
                    grid : myGrid,
                    turn : prevState.turn === 'Player' ? 'Computer' : 'Player',
                    score : prevState.score === 'O' ? 'X' : 'O'
                }
            })
        } 
    }

    resetStatus = () => {
        this.setState(this.getInitialState());
    } 

    render () { 

        const { player , computer } = this.props;
        const { grid ,turn } = this.state;
        let markup = grid.map( (ele,x) => <tr key={x} className='row'>{ele.map( (block,y) => <td key={y} onClick={ (event) => this.populate(event,x,y)}>{block}</td> )}</tr> );        
        const result = validateMatrix(this.state.grid);

        return (
            <div className='game-grid'>
                <div className='details'>
                    <h6> Player : { player } </h6>
                    <h6> Computer : { computer } </h6>
                    <h6> Turn : { turn }</h6>
                </div>   
                <div className="grid">
                    <table className="grid-table">
                        <tbody>
                           {markup}
                        </tbody>
                    </table>
                </div>
                <div className='winner-section'>
                    Match Result : { result }
                </div>
                <div className='reset-section'>
                    <button onClick={this.resetStatus} className='start-button'>Reset</button>
                </div>
            </div>
        )
    }
}

export default GameGrid;