import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// CSS Import
import './index.css';

// Components Import
import Navigation from './components/Navigation';
import Homepage from './components/Homepage/Homepage';
import ShopAll from './components/NavigationLinks/ShopAll';
import HipHop from './components/NavigationLinks/HipHop'
import Pop from './components/NavigationLinks/Pop';
import Rock from './components/NavigationLinks/Rock'
import Jazz from './components/NavigationLinks/Jazz'
import ShoppingCart from './components/NavigationLinks/ShoppingCart';
import ShippingInformation from './components/CheckoutForms/ShippingInformation';
import CheckoutConfirm from './components/CheckoutForms/CheckoutConfirm';

const Website = () => {
  return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Homepage}/>
            <Route path='/shopall' component={ShopAll}/>
            <Route path='/hiphop' component={HipHop}/>
            <Route path='/pop' component={Pop}/>
            <Route path='/rock' component={Rock}/>
            <Route path='/jazz' component={Jazz}/>
            <Route path='/cart' component={ShoppingCart}/>
            <Route path='/shipping' component={ShippingInformation}/>
            <Route path='/confirm' component={CheckoutConfirm}/>
          </Switch>
        </React.Fragment>
      </Router>
  )
}

ReactDOM.render(<Website />, document.getElementById('root'))