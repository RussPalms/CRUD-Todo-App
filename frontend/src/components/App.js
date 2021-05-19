import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className='center'>
                <h1>ToDoCRUD</h1>
            </div>
        );
    }
};

// export default App;

ReactDOM.render(<App />, document.querySelector("app"));