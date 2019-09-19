import React from 'react';
import PropTypes from 'prop-types'

const Appointment = ({ appointment, deleteAppointment }) => (
    <div className='card mb-3'>
        <h6 className='card-header'>{appointment.pet}</h6>
        <div className='card-body row'>
            <p className='card-text col-lg-4'><span>Date: </span>{appointment.date}</p>
            <p className='card-text col-lg-4'><span>Time: </span>{appointment.time}</p>
            <p className='card-text col-lg-4'><span>Owner Name: </span>{appointment.owner}</p>
            <p className='card-text col-lg-12'><span>Symptoms: </span>{appointment.symptoms}</p>

            <div className='btns col-lg-12 text-right'>
                <button
                    className='btn btn-danger text-center'
                    onClick={() => deleteAppointment(appointment.id)}>
                    Deleted
        </button>
            </div>
        </div>
    </div>
)

Appointment.propTypes={
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired,

}

export default Appointment;

