import React from 'react'
import ReactDOM from 'react-dom'

let obj = {
fname:'saifulla',
lname:'khalid'

}


ReactDOM.render(
<h1>Welcome {obj.fname} {obj.lname} to React Learning!</h1>,

document.getElementById('root')
);
