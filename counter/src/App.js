import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Counters from './Components/counters';



class App extends Component {
  
    state = { 
      counters: [
          {id: 1, value: 1},
          {id: 2, value: 2},
          {id: 3, value: 3},
          {id: 4, value: 4}
      ]
  };
  
  handleIncrement = counter => {
      
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter)
      counters [index] = {...counter};
      counters [index].value++; 
      this.setState ({ counters });
      console.log(counter);
  };

  handleReset = () => {
      const counters = this.state.counters.map (c => {
          c.value = 0;
          return c;
      });

      this.setState ({ counters });
  };

  handleDelete= ( counterId  ) => {
      console.log('called')
      const counters = this.state.counters.filter( c => c.id !== counterId);
      this.setState ( { counters });
      

  };
  

  render() { 
    return (

      <React.Fragment>
      
        <Navbar/>
        <main className='container'>
          <Counters 
            counters = {this.state.counters}
            onReset = {this.handleReset} 
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}
            />
        </main> 

      </React.Fragment>

    );
  }
}
 
export default App;
