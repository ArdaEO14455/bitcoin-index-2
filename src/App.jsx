// How to set up states for a program
// shortcut: 'rafce'

import React, { useState } from 'react'

// // note, keep fragment (<>) on the same line as return

// const App = () => {
//   // let[getter, setter] = useState(0)
//   let[count, setCount] = useState(0) 
//useState creates an internal variable in the React Framework, and when it's value is updated, React can track and refresh. when you read the variable that useState is used on, using the console.log below, it should return an array with 2 objects, a getter (can be named anything, and represents the 'current' value) and a setter function (way to change the value of the getter variable). as such we need to interpolate it using [] as seen above. the initial value of the getter is passed into useState
//   //normally, we should replace 'getter' with semantic words, but the 'setter' should be replaced with the 'getter' name prefixed with 'set'. e.g. getter = spam, setter = setSpam.
//   //syntax: [state, setState] = useState(initialState)
//   //note, the value in useState() can be ANYTHING. it can be a string, it can be an object.
//   console.log(count)

//   // document.querySelector('button').addEventListener('click', () => {})
//   return <> 
//     <h1>State</h1>
//     <p>You have clicked {count} times.</p>
//     <button onClick={() => console.log(setCount(count+1))}>Click Me!</button>
//     </>
// }
// /* 'onclick' builds in an inbuilt event-listener */
// //how to ensure that the page refreshed whenever an element gets changed
// //use 'hooks' to 'hook-into' specific parts of the React network. hooks allows us to have a value in a variable that is hooked into the react network, so that if it changes, React knows. they all start with 'use'. remember to import first
// export default App

//key thing to remember: when changing the getter variable, you MUST use the setter function, in this case -> setCount.


//-----------------------------------------------------------------

//not only will it re-render the specified component, but it will also re-render any child components

//Below, we create a new component, that is called in the App component
const ShowCount = ({value = 0}) => {
  return <p>You have clicked {value} times. </p> 
}

const App = () => {
 
  let[count, setCount] = useState(0) 
  console.log(count)


  return <> 
    <h1>State</h1>
    <ShowCount value = {count} /> 
    {/* Above is the child component of App, and gets  */}
    {/* <p>You have clicked {count} times.</p> */}
    <button onClick={() => console.log(setCount(count+1))}>Click Me!</button>
    </>
}
//but remember, setCount MUST be called to update the getter.
export default App

//-------------------------------------------------------------------------------------------------------

