


import React, {Component} from 'react';
import Dashboard from './component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'
import {Switch, Route} from 'react-router-dom';

export default(
    <Switch>
        <Route component={ Dashboard } exact path="/"/>

        <Route component={ Wizard } path="/wizard"/>
    </Switch>
)