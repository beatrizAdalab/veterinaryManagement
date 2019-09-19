import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types'

const stateInitial = {
    appointment: {
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    },
    error: false
}

class NewAppointment extends Component {
    state = { ...stateInitial }

    handleChance = e => {
        this.setState({
            appointment: {
                ...this.state.appointment, [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { pet, owner, date, time, symptoms } = this.state.appointment;
        if (pet === '' || owner === '' || date === '' || time === '' || symptoms === '') {
            this.setState({
                error: true
            })
        } else {
            // created new Appointment with ID and up to App
            const newAppointment = { ...this.state.appointment };
            newAppointment.id = uuid();
            this.props.createNewAppointment(newAppointment);
            //reset state (form)
            this.setState({
                ...stateInitial
            })
        }
    }

    render() {
        const { error } = this.state;
        return (
            <div className='form-new-appointment'>
                <h2 className='mb-4'>
                    Fill in the form to create a new appointment
                </h2>
                {error ? <div className='alert alert-danger text-center mt-2 mb-4'>
                    All fields are required
                </div> : null}
                <form>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-3 col-form-label'>Pet Name:</label>
                        <div className='col-sm-8 col-lg-9'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='name'
                                name='pet'
                                onChange={this.handleChance}
                                value={this.state.appointment.pet}
                            />
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-3 col-form-label'> Owner Name:</label>
                        <div className='col-sm-8 col-lg-9'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='name'
                                name='owner'
                                onChange={this.handleChance}
                                value={this.state.appointment.owner}
                            />
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-1 col-form-label'> Date:</label>
                        <div className='col-sm-8 col-lg-5'>
                            <input
                                type='date'
                                className='form-control'
                                name='date'
                                onChange={this.handleChance}
                                value={this.state.appointment.date}
                            />
                        </div>

                        <label className='col-sm-4 col-lg-1 col-form-label'> Time:</label>
                        <div className='col-sm-8 col-lg-5'>
                            <input
                                type='time'
                                className='form-control'
                                name='time'
                                onChange={this.handleChance}
                                value={this.state.appointment.time}
                            />
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-12 col-form-label'> Symptoms:</label>
                        <div className='col-sm-8 col-lg-12'>
                            <textarea
                                rows="4"
                                className='form-control'
                                name='symptoms'
                                onChange={this.handleChance}
                                value={this.state.appointment.symptoms}
                                maxLength='250'>

                            </textarea>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-3">
                        <button onClick={this.handleSubmit} className='btn btn-success' type='button'>new appointment</button>
                    </div>
                </form>

            </div>
        );
    }
}

NewAppointment.propTypes = {
    createNewAppointment: PropTypes.func.isRequired
}

export default NewAppointment;