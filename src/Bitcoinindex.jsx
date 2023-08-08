import React, { useEffect, useState } from 'react'

const Bitcoinindex = () => {
    const [price, setPrice] = useState(0)

    useEffect(() => {
        fetch('http://api.coindesk.com/v1/bpi/currentprice/AUD.json') //fetch json value
            .then(res => res.json()) //parse json out of response
            .then(data => setPrice(data.bpi.AUD.rate)), []}) //remember, first console.log the object so we can inspect it inthe browser inspector, and find where the value you are looking for lies

    useEffect(() => console.log('effect triggered on mount or any change')) //useEffect occurs at every mount, and it takes two parameters. the first is a callback function, and the second is the specified value that is to be observed, and if updated, it re-renders 

    // useEffect(() => console.log('effect triggered on mount'), []) //triggered only on mount
    
    useEffect(() => console.log('effect triggered on mount or price change'), [price]) //this will trigger if 'price' is changed. remember, more than one prop or variabel can be inputted.

    
    
  return <>
    <h1>Bitcoin Index</h1>
{ price ? <p>Current Price (AUD): {price} </p> : <p>Loading ...</p> }    
{/* here we use a turnery, whereby it checks if the value is true: is price > 0 true? if not (:), put 'Loading...*/}
</>

    }


export default Bitcoinindex
