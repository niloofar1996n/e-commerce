import React from 'react';
import { Route , Switch} from 'react-router-dom'
import './App.css';
import HomePage from "./component/pages/homepage/homePage";
import ShopPage from "./component/pages/shopPage/shopPage";
import Header from './component/header/header';
import SignInAndSignup from "./component/pages/signinAndSignup/signinAndSignup";



function App() {

  return (
    <div>
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignup} />
        </Switch>
    </div>
  );
}

export default App;
