/**
 * Created by vijaypawar on 12/07/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUUID} from '../../../common/utility';
import * as remitterActions from '../../../redux/actions/remitterActions';
import RemitterFormItemLineCmp from './RemitterFormItemLineCmp';

class RemitterFormItemsCmp extends React.Component {
    static propTypes = {
        parentId: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired,
        remitters: PropTypes.array.isRequired,
        parentObject: PropTypes.object.isRequired
    }

    addItem() {
        let item = {id: getUUID(), parentId: this.props.parentId, yooName: '', yooRate: '', yooQuantity: ''};
        this.props.dispatch(remitterActions.addItem({fullState: this.props.parentObject, newItem: item}));
    }

    render() {
        return (
            <div className="well-sm">

                <button className="btn btn-default" onClick={this.addItem.bind(this)}>Add Item From nside</button>

                <table className="table bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rate</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.items.map((item, index) => (

                                <RemitterFormItemLineCmp key={index} item={item} parentId={this.props.parentId}
                                                         parentObject={this.props.parentObject}></RemitterFormItemLineCmp>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        remitters: state.remitters
    }
}
export default connect(mapStateToProps)(RemitterFormItemsCmp)
