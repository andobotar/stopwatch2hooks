import React from 'react';

class Stopwatch extends React.Component {
    state = {
        elapsedTime: 0,
        running: false
    };

    startPauseHandler = () => {
        if (!this.state.running) {
            const intervalId = setInterval(this.tick, 10);
            this.setState({ running: true, intervalId: intervalId });
        } else {
            clearInterval(this.state.intervalId);
            this.setState({ running: false });
        }
    };

    tick = () => {
        this.setState(prevState => {
            return { elapsedTime: prevState.elapsedTime + 1 };
        });
    };

    clear = () => {
        clearInterval(this.state.intervalId);
        this.setState({ elapsedTime: 0, running: false });
    };

    render() {
        return (
            <>
                <h1 className="time">{this.state.elapsedTime}</h1>
                <button className="button" onClick={this.startPauseHandler}>
                    {this.state.running ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={this.clear}>
                    Clear
                </button>
            </>
        );
    }
}

export default Stopwatch;
