import React from 'react'
import ReactDOM from 'react-dom'

class Cartoon extends React.Component{

 render(){
    return <h1>Hello, {this.props.name}</h1>
 }

}

ReactDOM.render(
 <Cartoon name='saif'/>,
document.getElementById('root')
);
