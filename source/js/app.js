import React from 'react';
import Table from './components/Table'
import SelectBar from './components/SelectBar'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Mati"
        };
    }

    render() {
        const name = this.state.name;
        return(
            <div className="container">
                <SelectBar />
                <Table />
            </div>
        );
    }
}

export default App;
