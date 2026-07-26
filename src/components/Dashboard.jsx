import React from 'react'


// 1. Conditional Rendering using if-else
// function Dashboard({ isLoggedIn }) {
//     if (isLoggedIn) {
//         // Showing dashboard content
//         return (
//             <div>
//                 <h1>Welcome to your Dashboard</h1>
//                 {/* Dashboard content goes here */}
//             </div>
//         )
//     }

//     else {
//         // Redirecting to login page
//         return (
//             <div>
//                 <h3>Please login</h3>
//             </div>
//         )
//     }
// }


// 2.. Conditional Rendering using Ternary Operator


// 2. Conditonal Rendering using ternary operators 

function Dashboard({isLoggedIn}){
    return <div><h2>{isLoggedIn ? "Welcome back Himanshu" : "Please Login"}</h2></div>
}
export default Dashboard