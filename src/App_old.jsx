import './App.css';
import React, { Component } from 'react'
import NavBar from './components/navbar'
import Counters from './components/counters'


class App extends Component {

  state = { 
    counters: [
           {id:1 , value:4},
           {id:2 , value:0},
           {id:3 , value:0},
           {id:4 , value:0}
       ]
    } 
    handleIncrement = (counter) =>{
       const counters = [...this.state.counters];
       const ind = counters.indexOf(counter);
       counters[ind] = {...counter};
       counters[ind].value++;
       this.setState({counters:counters});
    }
    handleReset =()=>{
       const counters=this.state.counters.map(c=>{
           c.value=0;
           return c;
       })
       this.setState({counters:counters});
    }
    handleDelete = (counterId) =>{
       const counters= this.state.counters.filter( c => c.id!=counterId)
       this.setState({counters : counters});
    }
 render(){
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Counters 
         counters={this.state.counters}
         onIncrement={this.handleIncrement}
         onReset={this.handleReset}
         onDelete={this.handleDelete}
        />
      </main>
    </React.Fragment>
  );
 };
 
}

export default App;
