
import React ,  {Component } from 'react';
import './counter.css'

class counter extends Component{

  constructor(props){

    super(props) ; 

    this.state = {
        counter :  0  , 
        display : true 
    }; 

    this.increase = this.increase.bind(this) ; 
    this.decrease = this.decrease.bind(this) ; 
   
  }

  increase(){

    this.setState({
        counter : this.state.counter + 1 
    }) ; 
   }
   decrease(){

    this.setState({
        counter : this.state.counter - 1 
    }) ; 
   }

   componentDidMount(){
       console.log('component did mount'); 
   }

   componentDidUpdate(){
    console.log('component did update'); 
   }
   componentWillUpdate(){
    console.log('component will update'); 
   }
   componentWillUnmount(){
    console.log('component will unmount'); 
   }

 
   shouldComponentUpdate (nextProps , nextState){
       if(this.state.counter === nextState.counter ){
           return false; 
       }
       else{
           return true ; 
       }
   }
  

  render(){

    return(
        <div className='All'>
         {this.state.display && 
            <div className='wrap-counter'>
                <button className='increase' onClick ={this.increase} >+</button>
                <span>{this.state.counter}</span>
                <button className='decrease' onClick ={this.decrease} >-</button>
             
            </div>
         }
           
         
        
        </div>
   

      
    )

  }

  

}

export default counter;
