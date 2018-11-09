#Rect-Router with Sass & css-module, classNames
<code>
    yarn add react-router-dom

    yarn add node-sass classnames
</code>

###Router, Link, NavLink(feat.activeclassName)
index.js
<code>
    import { BrowserRouter } from 'react-router-dom';
    
    ...

    <BrowserRouter>
    
        <App>
    
    </BrowserRouter>, ...
</code>

App.js
<code>
   import { Router, Link }  from 'react-router-dom';

   ...

   <Link to='/' exact>Home</Link>
   <Link to='/about/foo' >About:name</Link>
   
    ...
   
   <NavLink to='/' activeClassName="on" exact>Home</NavLink>
   
    ...
   
   <Router path='/' component={Home}/>
   <Router path='/about/:name' component={About}/>
</code>

/Pages/About.js
<code>
    rsc

    ({match})

    ...
    {match.params.name}
</code>
