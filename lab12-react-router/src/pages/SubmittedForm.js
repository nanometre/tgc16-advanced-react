import React from 'react'
import { useLocation } from 'react-router-dom';
// in the HTML specs, location refers to one URL

export default function SubmittedForm() {

    const location = useLocation();
    let fullName = location.state.formData.fullname;
    let email = location.state.formData.email;

    return <React.Fragment>
        <h1>Feedback recieved</h1>
        <p>
            Hi {fullName}, thank you for contacting us. We will forward your feedback
            to the relevant department (like real.) Please look forward to 
            a reply at your junk folder for your email {email}
        </p>
    </React.Fragment>
}