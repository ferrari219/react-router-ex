import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Params from './Pages/Params';
import Query from './Pages/Query';

import styles from './App.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const activeStyle = {
      background: 'yellow'
    };

    return (
      <div>
        <div className={cx("link")}>
            <ul>
                <li><NavLink exact to="/" activeClassName={cx('on')}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeClassName={cx('on')}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeClassName={cx('on')}>About Foo</NavLink></li>
                <li><NavLink to="/params/a" activeClassName={cx('on')}>Params: A</NavLink></li>
                <li><NavLink to="/params/b" activeClassName={cx('on')}>Params: B</NavLink></li>
                <li><NavLink to="/query" activeClassName={cx('on')}>Query:궁시렁</NavLink></li>
            </ul>        
        </div>
        <div className={cx("route")}>
          <Route path='/' component={Home} exact/>
          {/* <Route path='/about' component={About} exact/> */}
          <Route path='/about/:name?' component={About}/>
          <Route path='/params/:username?' component={Params}/>
          <Route path='/query' component={Query}/>
        </div>
      </div>
    );
  }
}

export default App;