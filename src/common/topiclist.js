/**
 * Created by vijaypawar on 03/07/17.
 */

import React from 'react';

import {
    Route,
    Link
} from 'react-router-dom';

import Topic from './topic';

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React 1
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components 2
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State 3
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

export default Topics;




