import React, { Component } from 'react'
import NavBar from './components/navbar'
import Counters from './components/counters'
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
    // this.state = this.props.something
    //best place to initialise state
  }
  componentDidMount() {
    console.log("App - Mounted");
    //best place to make ajax calls
    // this.setState({counters : values from ajax })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prev Props " + prevProps);
    console.log("prev state" + prevState);
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const ind = counters.indexOf(counter);
    counters[ind] = { ...counter };
    counters[ind].value++;
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters: counters });
  };
  handleCounterAdd = () => {
    const counters = this.state.counters;
    let maxId = 0;
    counters.forEach((c) => {
      if (c.id > maxId) maxId = c.id;
    });
    counters.push({ id: maxId + 1, value: 0 });
    this.setState({ counters: counters });
  };

  // this.state.counters.reduce((acc,curr,i,arr) => {return acc+curr},0)
  // const sum = this.state.counters.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
         // totalCounters={ this.state.counters.filter((c) => c.value > 0).length }
         totalCounters={ this.state.counters.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onAddCounter={this.handleCounterAdd}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;