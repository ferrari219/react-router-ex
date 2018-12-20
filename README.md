#Rect-Router with Sass & css-module, classNames
```
   yarn add react-router-dom

   yarn add node-sass classnames
```

###Router, Link, NavLink(feat.activeclassName)
index.js
```
import { BrowserRouter } from 'react-router-dom';

    <BrowserRouter>
    
        <App>
    
    </BrowserRouter>, ..
```


App.js
```
import { Route, Link }  from 'react-router-dom';


   <Link to='/' exact>Home</Link>
   
   <Link to='/about/foo' >About:name</Link>
   
   
   
   <NavLink to='/' activeClassName="on" exact>Home</NavLink>
   
   
   
   <Route path='/' component={Home}/>
   
   <Route path='/about/:name' component={About}/>

```


/Pages/About.js (Parameter)
```
rsc

    ({match})

    ..
    
    {match.params.name}
    
```

/Pages/Query?name=ferrari219 (Query)
```
import React from 'react';
import qs from 'qs';

const Query = ({ location }) => {
    const query = qs.parse(location.search.substr(1)); // .
    // console.log(query.name);
    return (
        <div>
            {query.name}
        </div>
    );
};
```

export default Query;
