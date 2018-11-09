import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

import styles from './App.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const activeStyle = {
   
    };

    return (
      <div>
        <div className={cx("link")}>
            <ul>
                <li><NavLink exact to="/" activeClassName={cx('on')}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeClassName={cx('on')}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeClassName={cx('on')}>About Foo</NavLink></li>
            </ul>        
        </div>
        <div className={cx("route")}>
          <Route path='/' component={Home} exact/>
          {/* <Route path='/about' component={About} exact/> */}
          <Route path='/about/:name?' component={About}/>
        </div>
      </div>
    );
  }
}

export default App;