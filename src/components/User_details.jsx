import React from 'react'
import User_dashboard from './User_dashboard';


function User_details() {
    let Users = {
        Name : "Himanshu",
        Role : "Admin"
    }

    return (
            <div>
                <User_dashboard myrole = {Users.Role} myname = {Users.Name} />
            </div>
    )
}

export default User_details
