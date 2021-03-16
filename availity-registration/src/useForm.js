import {useState, useEffect} from  'react'

const useForm = (submitForm, validation) =>{
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        npinumber: '',
        businessaddress: '',
        phonenr: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const [isRegister, setIsRegister] = useState(false);
    const handleChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validation(values));
        setIsRegister(true);
        console.log(values);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isRegister){
            submitForm();
        }
    });

    return {handleChange, values, handleSubmit, errors};
};

export default useForm;