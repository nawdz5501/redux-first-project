import React from 'react'
import "./App.css"
import Header from './components/Header'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/products/Products'
import News from './components/pages/News'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import ProductsDetail from './components/pages/products/ProductsDetail'
function App() { 
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/products/:id'  component={ProductsDetail}/>
          <Route path='/news' component={News}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App

