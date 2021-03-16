import React, {useState} from 'react'
import RegistrationForm from './RegistrationForm'
import Registered from './Registered'

const AvailityForm = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    function submitForm(){
        setIsRegistered(true);
    }

    return (
        <div className="container">
            {!isRegistered ? <RegistrationForm submitForm={submitForm}/> : <Registered/>}
        </div>
    )
}

export default AvailityForm
