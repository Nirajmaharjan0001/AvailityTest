import React from 'react'
import useForm from './useForm'
import validation from './validation'
import './form.css'
const RegistrationForm = ({submitForm}) => {
    const {handleChange, handleSubmit, values, errors} = useForm(submitForm, validation);
    return (
        <div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Register with Availity</h1>
                    <div className="form-input-container">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input id="firstname" type="text" name="firstname" className="form-input" placeholder="Enter First Name" value={values.firstname} onChange={handleChange}/>
                        {errors.firstname && <p className="error">{errors.firstname}</p>}
                    </div>
                    <div className="fform-input-container">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input id="lastname" type="text" name="lastname" className="form-input" placeholder="Enter Last Name" value={values.lastname} onChange={handleChange}/>
                        {errors.lastname && <p className="error">{errors.lastname}</p>}
                    </div>
                    <div className="fform-input-container">
                        <label htmlFor="npinumber" className="form-label">NPI Number</label>
                        <input id="npinumber" type="number" name="npinumber" className="form-input" placeholder="Enter NPI Number" value={values.npinumber} onChange={handleChange}/>
                        {errors.npinumber && <p className="error">{errors.npinumber}</p>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="businessaddress" className="form-label">Business Address</label>{/*Just keeping one field for address for saving time in real time we need more fields for address*/}
                        <input id="businessaddress" type="text" name="businessaddress" className="form-input" placeholder="Enter Business Address" value={values.businessaddress} onChange={handleChange}/>
                        {errors.businessaddress && <p className="error">{errors.businessaddress}</p>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="phonenr" className="form-label">Phone Number</label>
                        <input id="phonenr" type="number" name="phonenr" className="form-input" placeholder="Enter Phone Number" value={values.phonenr} onChange={handleChange}/>
                        {errors.phonenr && <p className="error">{errors.phonenr}</p>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input id="email" type="email" name="email" className="form-input" placeholder="Enter Email Address" value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <button className="form-submit-btn" type="submit">Register</button>
                </form>
            </div>

        </div>
    )
}

export default RegistrationForm
