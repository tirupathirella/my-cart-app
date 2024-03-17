import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
    
    render() { 
        console.log('Counters - Rendered');
        const { counters, onAddCounter , onReset, onDelete, onIncrement } = this.props;
        return (
          <div>
            <button
              onClick={onReset}
              className="btn btn-primary btn-sm m-2"
            >
              Reset
            </button>
            <button
              onClick = { onAddCounter }
              className="btn btn-success btn-sm m-2"
            >
              Add New Item
            </button>
            {counters.map((counter) => (
              <Counter
                key={counter.id}
                onIncrement={onIncrement}
                onDelete={onDelete}
                counter={counter}
              ></Counter>
            ))}
          </div>
        );
    }
}
 
export default Counters;