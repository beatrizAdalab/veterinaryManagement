import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types'


const ListAppointments = ({ appointments, deleteAppointment }) => {

    const message = Object.keys(appointments).length === 0 ? 'There are no appointments' : 'Manage appointments here'

    return (
        <div className=''>
            <h2 className='mb-4'>{message}</h2>
    
            <div className='list-appointments'>
                {appointments.map(appointment => (
                    < Appointment
                        key={appointment.id}
                        appointment={appointment}
                        deleteAppointment={deleteAppointment}
                    />
                ))}
            </div>
        </div>
    )
}

ListAppointments.prototype = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default ListAppointments;

