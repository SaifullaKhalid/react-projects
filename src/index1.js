import React from 'react'
import ReactDOM from 'react-dom'

function cartoon(name='Pikachu' , show='Pokemon') {

return <div>
        <h1 className='someclass'>cartoon name is {name} and show is {show}</h1>
        <h2>cartoon name is {name} and show is {show}</h2>
      </div>
}

ReactDOM.render(
  cartoon()
document.getElementById('root')
);
