import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './comonents/Footer'
import Header from './comonents/Header'
import {Container} from 'react-bootstrap'
import HomeScreens from './screens/HomeScreens'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
      <Container>
        <Route path="/" component={HomeScreens} exact/>
        <Route path="/product/:id" component={ProductScreen} />
      </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
