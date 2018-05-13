import React from 'react'
import ReactDOM from 'react-dom'


function Cartoon(props){
  return <h1> Hello , {props.name}</h1>
}
ReactDOM.render(
 <Cartoon name='saif'/>,
document.getElementById('root')
);
