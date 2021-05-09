import * as React from 'react';
import axios from 'axios';
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = () => {
            axios.get('/api/data')
                .then((response) => {
                console.log(response.data);
                console.log(response.data.message);
                this.setState({
                    message: response.data.message
                });
            });
        };
        this.state = {
            message: 'Click the button to load data!'
        };
    }
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement("h1", null, this.state.message),
            React.createElement("button", { onClick: this.fetchData }, "Fetch Data")));
    }
}
export default App;
