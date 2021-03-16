export default function validation(values){
    let errors = {};

    if(!values.firstname.trim()){
        errors.firstname = "First Name is Required";
    }

    if(!values.lastname.trim()){
        errors.lastname = "Last Name is Required";
    }

    if(!values.npinumber.trim()){
        errors.npinumber = "NPI Number is Required";
    }

    if(!values.businessaddress.trim()){
        errors.businessaddress = "Business Address is Required";
    }

    if(!values.phonenr.trim()){
        errors.phonenr = "Phone Number is Required";
    }

    if(!values.email.trim()){
        errors.email = "Email is Required";
    }else if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(values.email)){
        errors.email = "Invalid Email Address"
    }

    return errors;
}