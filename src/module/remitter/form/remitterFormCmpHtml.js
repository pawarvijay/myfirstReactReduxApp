import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import * as remitterActions from '../../../redux/actions/remitterActions';
import RemitterFormItemsCmp from '../form/RemitterFormItemsCmp';
import {getUUID} from '../../../common/utility';

class RemitterFormCmpHtml extends React.Component {
    constructor(data) {
        super(data);
        let self = this;
        if (data.remitter.length == 1) {
            this.state = data.remitter[0];
        }
        else {
            this.state = {
                id: getUUID(),
                name: '',
                work: '',
                address: '',
                gender: '',
                email: '',
                language: '',
                passportno: '',
                rate: 0,
                quantity: 0,
                amount: 0,
                itemAmountTotal: 0,
                items: []
            }
        }

        self.handleChange = function (event, callback) {
            const target = event.target;
            const value = target.value;
            const name = target.name;

            self.setState({
                [name]: value
            }, () => {
                if (callback) {
                    callback();
                }
            });
        }

        self.computeAmountInComponent = function (event) {
            self.handleChange(event, function () {
                if (self.state.rate && self.state.quantity) {
                    self.setState({amount: parseInt(self.state.rate) * parseInt(self.state.quantity)});
                }
            });
            console.log(self.state)
        }

        self.computeAmountOutsideComponent = function () {
            if (self.state.rate && self.state.quantity) {
                self.props.dispatch(remitterActions.computeAmountInReducer(
                    self.state
                    )
                )
            }
        }

        self.handleSubmit = function (event) {
            event.preventDefault();
            self.props.dispatch(remitterActions.createRemitter(self.state))
        }
    }

    addItem() {
        let item = {id: 2, yooName: '', yooRate: '', yooQuantity: ''}
        this.props.dispatch(remitterActions.addItem({fullState: this.state, newItem: item}))
    }

    render() {

        return (
            <div className="col-lg-8 col-lg-offset-2">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                        <div className="col-sm-10">
                            <input
                                className="form-control"
                                name="name"
                                type="text"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="address">Address:</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.address}
                                type="text"
                                onChange={this.handleChange}
                                className="form-control"
                                id="address"
                                placeholder="Enter Address" name="address"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="work">work:</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.work}
                                type="text"
                                onChange={this.handleChange}
                                className="form-control"
                                id="work"
                                placeholder="Enter Work" name="work"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="passportno">Passport No:</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.passportno}
                                type="text"
                                onChange={this.handleChange}
                                className="form-control"
                                id="passportno"
                                placeholder="passport no" name="passportno"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="gender">gender</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.gender}
                                type="text"
                                onChange={this.handleChange}
                                id="gender"
                                placeholder="gender" name="gender"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="language">language</label>
                        <div className="col-sm-10">
                            <input
                                value={this.state.language}
                                type="text"
                                onChange={this.handleChange}
                                className="form-control"
                                id="language"
                                placeholder="language" name="language"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="id">Compute</label>

                        <div className="col-sm-2">
                            <input value={this.state.rate}
                                   type="number"
                                   onChange={this.handleChange}
                                   onBlur={this.computeAmountOutsideComponent}
                                   className="form-control"
                                   placeholder="rate"
                                   name="rate"
                            />
                        </div>
                        <div className="col-sm-2">
                            <input value={this.state.quantity}
                                   type="number"
                                   onChange={this.handleChange}
                                   onBlur={this.computeAmountOutsideComponent}
                                   className="form-control"
                                   placeholder="quantity"
                                   name="quantity"/>
                        </div>
                        <div className="col-sm-2">
                            <input value={this.state.amount}
                                   type="text"
                                   className="form-control"
                                   placeholder="amount"
                                   name="amount"/>
                        </div>

                        <div className="col-sm-2">
                            Item Amount Total : {this.state.itemAmountTotal}
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button value="submit" type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>

                </form>

                <RemitterFormItemsCmp items={this.state.items} parentId={this.state.id} parentObject={this.state}/>

            </div>
        );
    }
}

RemitterFormCmpHtml.propTypes = {
    dispatch: PropTypes.func.isRequired,
    remitters: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        remitters: state.remitters
    }
}
export default connect(mapStateToProps)(RemitterFormCmpHtml)