import './App.css';
import React from 'react';

/* function Helloworld(props) {
  return(
    <div id="hello">
      {props.mytext}
      <h3>{props.subtitle}</h3>
    </div>
  )
  
} */

// componente desde clases extendiendo desde Component
class Helloworld extends React.Component{

  state = {
    show: true
  }
  //metodo de la clase Helloworld
  toggleShow = () => {
    this.setState({show: !this.state.show})
  }



  render(){
    console.log(this.state.show)
    if (this.state.show) {
      return(
        <div id="hello">
        {this.props.mytext}
        <h3>{this.props.subtitle}</h3>
        <button onClick={this.toggleShow}>Show</button>
      </div>
      )
    }
    else{
      return(
      <h1>
        There are no elements
        <button onClick={this.toggleShow}>Show</button>
      </h1>
      )
    }
  }
}
// componente como clase React
/* class App extends React.Component{
  render(){
    return <div>This is my component: <Helloworld/> </div>
  }
} */

// componente con funcion flecha
//const App = () => <div>This is my component: <Helloworld/> </div>


// componente con funcion JS
function App() {
  return (
    <div>This is my component: 
      <Helloworld mytext="Hello Yully" subtitle="lorem ipsum"/>
      <Helloworld mytext="Yully Andrea Guzman"/>
      <Helloworld mytext="Hola Mundo"/>

    </div>
  )
 
}

export default App;
