/**
 * Created by vijaypawar on 04/07/17.
 */

import React from 'react';

import {RemitterService} from '../remitterService';

import RemitterFormCmpHtml from './remitterFormCmpHtml';

class remitterFormCmp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {remitterDataModel : RemitterService.getRemitter(props.match.params.id)};
    }

    render() {
        return (
            <RemitterFormCmpHtml remitter={this.state.remitterDataModel}></RemitterFormCmpHtml>
        );
    }
}

export default remitterFormCmp;
