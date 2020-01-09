import React from 'react';
import GameGrid from '../GameGrid';
import './index.css';

class StartGame extends React.Component {

    state = {
        player : '',
        computer : '',
        gameStarted : false
    }

    assignPlace = () => {
        const number = parseInt(Math.random() * 10);
        if(number % 2 === 0) {
            this.setState({
                player : 'O',
                computer : 'X',
                gameStarted : true
            });
        } else {
            this.setState({
                player : 'X',
                computer : 'O',
                gameStarted : true
            });
        }
    }

    render () {
        const { gameStarted } = this.state; 

        return (
            <div className='start-game'>
                {
                !gameStarted &&
                <button className="start-button" onClick={this.assignPlace} >
                    Start Game
                </button>
                } 
                {
                gameStarted &&
                    <GameGrid {...this.state} />
                }   
            </div>
        )
    }
}

export default StartGame;