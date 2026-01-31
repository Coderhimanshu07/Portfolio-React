import React from 'react'
import axios from 'axios'
function Data_fetch() {



    async function Fetch_Asy_Await() {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json()
        console.log(data)
}


    // Fetch_Asy_Await()

    function Fetch_Promise(){
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    // Fetch_Promise()

    async function Axios_Asy_Await(){
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        console.log(data)
    }

    // Axios_Asy_Await()

    function Axios_Promise(){
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((data) => console.log(data))
    }

    // Axios_Promise()
  return (
    <>
    <button onClick={Fetch_Asy_Await}>Fetch Async Await</button><br />
    <button onClick={Fetch_Promise}>Fetch Promise</button><br />
    <button onClick={Axios_Asy_Await}>Axios Async Await</button><br />
    <button onClick={Axios_Promise}>Axios Promise</button>
    </>
  )
}

export default Data_fetch