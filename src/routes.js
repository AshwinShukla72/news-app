import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './src/components/Home/homes';
import Layout from './hoc/Layout/layout';


class Routes extends Component{
    render(){
        return(
           
           <layout>
               <Switch>
                <Route path="/" exact component= {Home}></Route>
            </Switch>
           </layout>
        )
    }
}
export default Routes;