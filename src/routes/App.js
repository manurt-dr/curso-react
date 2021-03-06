import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/register';
import Player from '../containers/Player';
import NotFound from '../containers/NotFound.jsx';
import Layout from '../components/Layout';

const App = () =>  {
   return( 
     <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Layout>
         <Switch>
           <Route exact path="/curso-react" component={Home} />
           <Route exact path="/curso-react/login" component={Login} />
           <Route exact path="/curso-react/register" component={Register} />
           <Route exact path="/curso-react/player/:id" component={Player} />
           <Route component={NotFound} /> 
         </Switch>  
       </Layout>    
     </BrowserRouter>
   )
};

export default App;
