import React from 'react';
import ReactDOM from 'react-dom';
 import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'

import Contact from './components/contact/contact'
 import Portfolio from './components/portfolio/portfolio'


ReactDOM.render(  <div>
                  <BrowserRouter>
                  <div>
                 
                  <Route path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact}/>

                  <Route path='/portfolio' component={Portfolio}/>
                  </div>
                  </BrowserRouter >
                  </div> , document.getElementById('root'));
