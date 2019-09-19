import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NewAppointment from './components/NewAppointment'
import ListAppointments from './components/ListAppointments'
import logoVeterinary from './logoVeterinary.png'


class App extends Component {
  state = {
    appointments: []
  }

  componentDidMount() {
    const appointmentsLS = localStorage.getItem('appointments')

    if (appointmentsLS) {
      this.setState({
        appointments: JSON.parse(appointmentsLS)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments))
  }

  createNewAppointment = data => {
    const appointments = [...this.state.appointments, data];

    this.setState({
      appointments: appointments
    }, () => console.log(this.state))
  }

  deleteAppointment = id => {
    const currentAppointments = [...this.state.appointments];

    const appointments = currentAppointments.filter(appointment => appointment.id !== id)

    this.setState({
      appointments: appointments
    })

  }

  render() {
    return (
      <div className='App'>
        <div className='container container-header'>
          <Header
            title='Veterinary Patient Manager'>
          </Header>
        </div>

        <main>
          <div className='container container-form'>
            <div className='row pb-5'>
              <div className='col-md-7'>
                <NewAppointment
                  createNewAppointment={this.createNewAppointment} />
              </div>
              <div className='col-md-5'>
                <img src={logoVeterinary} className=' logoHome img-fluid' alt='logo Veterinary'></img>
              </div>
            </div>
          </div>
          <div className='management-appointments'>
            <div className='container'>
              <div className='row py-5'>
                <div className='col-md-12'>
                  <ListAppointments
                    appointments={this.state.appointments}
                    deleteAppointment={this.deleteAppointment} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className='text-center py-4'>
          <p className='m-0'>Beatriz García ©2019.</p>
        </footer>
      </div>
    );
  }
}

export default App;

