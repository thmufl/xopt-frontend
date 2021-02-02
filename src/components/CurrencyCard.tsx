import React, { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import axios from "axios"

const CurrencyCard = (props: any) => {
  const [state, setState] = useState(props);
  const {from, to} = state.match.params;

  const handleGetExchangeRate = async (event: React.MouseEvent) => {  
    try {
      const result = await axios.get(`http://localhost:8000/api/currency-exchange-rate/${from}/${to}`)
      if(result.status !== 200) {
        console.log(result)
        return
      }
      setState({...state, data: result.data})
    } catch(error) {
      console.log("Error", error)
    }
  }

  const handleGetCryptoRating = async (event: React.MouseEvent) => {  
    try {
      const result = await axios.get(`http://localhost:8000/api/crypto-rating/${from}`)
      if(result.status !== 200) {
        console.log(result)
        return
      }
      setState({...state, data: result.data.data})
    } catch(error) {
      console.log("Error", error)
    }
  }

  useEffect(() => {
    console.log("useEffect: ", state.match.params.to)
    console.log("useEffect: ", state.data) 
  }, [state])

  return (
    <>
      <Card style={{width: "auto"}}>
        <Card.Img variant="top" src="/public/src/assets/at-random-i.png" />
        <Card.Body>
          <Card.Title>{from}-{to}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <br/>From: {from}
            <br/>To: {to}
            <br/>Data: {JSON.stringify(state)}
          </Card.Text>
          <Button variant="primary" className="ml-2 mt-2" onClick={handleGetExchangeRate}>Get Exchange Rate</Button>
          <Button variant="primary" className="ml-2 mt-2" onClick={handleGetCryptoRating}>Get Crypto Rating</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CurrencyCard;
