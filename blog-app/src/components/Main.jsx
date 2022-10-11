import React from 'react';

import { Route,BrowserRouter,Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import SinglePost from './SinglePost';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
          <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/articles/:slug" element={SinglePost} />
        </Routes>
        </BrowserRouter>
    );
  }
}

export default Main;