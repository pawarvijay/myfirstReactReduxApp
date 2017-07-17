/**
 * Created by vijaypawar on 12/07/17.
 */

/**
 * Created by vijaypawar on 12/07/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as remitterActions from '../../../redux/actions/remitterActions';

class RemitterFormItemLineCmp extends React.Component {
    static propTypes = {
        parentId: PropTypes.string.isRequired,
        item: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired,
        remitters: PropTypes.array.isRequired,
        parentObject : PropTypes.func.isRequired
    }

    constructor(data) {
        super(data);
        if (data.item[0]) {
            let item = data.item[0];
            this.state = {};
            this.state.id = item.id;
            this.state.parentId = item.parentId;
            this.state.yooName = item.yooName;
            this.state.yooRate = item.yooRate;
            this.state.yooQuantity = item.yooQuantity;
            this.state.yooAmount = item.yooAmount;
        } else {
            this.state = {};
            this.state.id = data.item.id;
            this.state.parentId = this.props.parentId;
            this.state.yooName = '';
            this.state.yooRate = '';
            this.state.yooQuantity = '';
            this.state.yooAmount = '';
        }
    }

    computeItemAmount() {

        //Todo : if i pass object from 1st comp to 2nd comp to 3rd comp then if i change in parent object from child object then in child component will the object be same as parent component
        //todo : Also in child component that object is always readonly
        //todo : that object can only be updated from reducer or any function in child

        if(this.state.yooRate && this.state.yooQuantity) {
            this.props.dispatch(remitterActions.computeItemAmountInReducer({
                fullState: this.props.parentObject,
                item: this.state
            }));
        }
    }

    removeItem(id) {
        alert('cant remove item bro');
    }

    render() {
        return (
            <tr>
                <td >
                    <input
                        onChange={(e) => this.setState({yooName: e.target.value})}
                        value={this.state.yooName}
                        type="text"
                        className="form-control"
                        placeholder="yooName"
                    />
                </td>
                <td>
                    <input
                        onBlur={this.computeItemAmount.bind(this)}
                        onChange={(e) => this.setState({yooRate: e.target.value})}
                        value={this.state.yooRate}
                        type="text"
                        className="form-control"
                        placeholder="yooRate"
                    />
                </td>
                <td>
                    <input
                        onBlur={this.computeItemAmount.bind(this)}
                        onChange={(e) => this.setState({yooQuantity: e.target.value})}
                        value={this.state.yooQuantity}
                        type="text"
                        className="form-control"
                        placeholder="yooQuantity"
                    />
                </td>
                <td>
                    {this.state.yooAmount}
                </td>
            </tr>
        )
    }
}

RemitterFormItemLineCmp.propTypes = {
    dispatch: PropTypes.func.isRequired,
    remitters: PropTypes.array.isRequired,
    item: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        remitters: state.remitters
    }
}
export default connect(mapStateToProps)(RemitterFormItemLineCmp)
