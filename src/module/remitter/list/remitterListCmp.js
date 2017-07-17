/**
 * Created by vijaypawar on 04/07/17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {RemitterService} from '../remitterService';

class remitterListCmp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {getListItems: []};
    }

    componentDidMount() {
        this.setState({getListItems: RemitterService.remitterslist});
    }

    render() {
        return (
            <div className="col-lg-8 col-lg-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading text-center"><strong>Remitters List</strong> <Link
                        className="pull-right" to={`/remitter`}>Add</Link></div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Work</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Language</th>
                            <th>Passport no</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.getListItems.map(function (element, index) {
                                return (
                                    <tr key={index}>
                                        <td>{element.name}</td>
                                        <td>{element.work}</td>
                                        <td>{element.address}</td>
                                        <td>{element.gender}</td>
                                        <td>{element.email}</td>
                                        <td>{element.language}</td>
                                        <td>{element.passportno}</td>
                                        <td><Link to={`/remitter/${element.id}`}>Edit</Link></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default remitterListCmp;
