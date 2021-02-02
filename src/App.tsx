// eslint-disable-next-line
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./App.css";

import SideNav from "./components/SideNav"
import Home from "./components/Home"
import CurrencyCard from "./components/CurrencyCard"

function App() {
  return (
    <Container>
      <Row>
        <Col sm={2}>
          <SideNav
            items={[
              { title: "Home", path: "/home" },
              { title: "Bitcoin (BTC)", path: "/forex/BTC/CHF" },
              { title: "Ethereum (ETH)", path: "/forex/ETH/CHF" },
              { title: "0x (ZRX)", path: "/forex/ZRX/CHF" },
              { title: "Ripple (XRP)", path: "/forex/XRP/CHF" },
              { title: "Stellar (XLM)", path: "/forex/XLM/CHF" },
              { title: "EOS (EOS)", path: "/forex/EOS/CHF" },
            ]}
          />
        </Col>
        <Col sm={10}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/forex/:from/:to" component={CurrencyCard} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
