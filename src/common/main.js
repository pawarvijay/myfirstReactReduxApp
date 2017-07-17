/**
 * Created by vijaypawar on 04/07/17.
 */

import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import Topics from './topiclist';
import RemitterListCmp from '../module/remitter/list/remitterListCmp';
import RemitterFormCmp from '../module/remitter/form/remitterFormCmp';

const Header = (match) => (
    <div>
        <Switch>
            <Route exact path="/topics" component={Topics}/>
            <Route exact path="/remitters" component={RemitterListCmp}/>
            <Route exact path="/remitter" component={RemitterFormCmp}/>
            <Route exact path="/remitter/:id" component={RemitterFormCmp}/>
        </Switch>
    </div>
)

export default Header;
