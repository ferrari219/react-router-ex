#Rect-Router with Sass & css-module, classNames
```yarn add react-router-dom

   yarn add node-sass classnames
```

###Router, Link, NavLink(feat.activeclassName)
index.js

```import { BrowserRouter } from 'react-router-dom';
    
    

    <BrowserRouter>
    
        <App>
    
    </BrowserRouter>, ..
```


App.js

```import { Router, Link }  from 'react-router-dom';

   

   <Link to='/' exact>Home</Link>
   
   <Link to='/about/foo' >About:name</Link>
   
   
   
   <NavLink to='/' activeClassName="on" exact>Home</NavLink>
   
   
   
   <Router path='/' component={Home}/>
   
   <Router path='/about/:name' component={About}/>

```


/Pages/About.js

```rsc

    ({match})

    ..
    
    {match.params.name}
    
```
