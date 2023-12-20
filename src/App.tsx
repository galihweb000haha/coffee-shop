
import 'normalize.css';
import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import About from "./pages/About"
import Products from "./pages/Products"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element={<Products />} />
            </Routes>
          </main>
      </BrowserRouter>
    );
  }
}

// export default class MyComponent extends Component {
//   render() {
//     return <div>Hello, World!</div>;
//   }
// }