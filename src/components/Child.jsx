import React from 'react'


// variable declared in parent class but we can also access the variable in cild class to use it for our operation
function Child(props) {
  return (
    <div>
        <h2>Hi, {props.my_name} there !!!</h2>
        <p>my age is {props.my_age}</p>
        <p>my email is {props.my_email}</p>
    </div>
  )
}

export default Child