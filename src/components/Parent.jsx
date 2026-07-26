import React from 'react'
import Child from './Child'

function Parent() {
    let name = "Himanshu";
    let age = 22;
    let email = "spyhimanshu@example.com";
    return (
        <>
            <div>
                <Child my_name={name} my_age={age} my_email={email} />
            </div>

        </>
    )
}

export default Parent

