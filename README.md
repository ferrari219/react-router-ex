#Rect-Router with Sass & css-module, classNames
<pre>
    yarn add react-router-dom

    yarn add node-sass classnames
</pre>

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
<pre>
   import { Router, Link }  from 'react-router-dom';

   ...

   <Link to='/' exact>Home</Link>
   <Link to='/about/foo' >About:name</Link>
   
    ...
   
   <NavLink to='/' activeClassName="on" exact>Home</NavLink>
   
    ...
   
   <Router path='/' component={Home}/>
   <Router path='/about/:name' component={About}/>
</pre>

/Pages/About.js
<pre>
    rsc

    ({match})

    ...
    {match.params.name}
</pre>
