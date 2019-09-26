import React ,  {Component } from 'react';
import './App.css';
import Counter from './Components/counter/counter' ; 

class App extends Component{

  constructor(props){

    super(props) ; 

    this.state = {

        display : true 
    }; 

    
    this.hideCounter = this.hideCounter.bind(this); 
  }

  hideCounter(){
       
    console.log("running hide counter"); 
    this.setState({

        display : !this.state.display
    })
}
  render(){

    return(

      <div className='App'>
          {this.state.display && <Counter></Counter> }
          <button onClick={this.hideCounter}> 
            remove
          </button>
      </div>
    
    )

  }

  

}

export default App;
