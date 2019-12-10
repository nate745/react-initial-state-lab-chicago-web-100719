import React from 'react';

class Bomb extends React.Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const secLeft = this.state.secondsLeft
        const message = secLeft === 0 ? 'Boom!' : `${secLeft} seconds left before I go boom!`;
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default Bomb